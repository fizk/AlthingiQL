import * as React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import {client} from './utils/client';
import Html from '../client/theme/layouts/Html';
import {ApolloClient} from 'apollo-client';
import {StaticRouter as Router} from 'react-router';
import 'isomorphic-fetch';
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache, IntrospectionFragmentMatcher} from "apollo-cache-inmemory";
import {ApolloProvider} from "@apollo/react-common";
import AppRouter from "../client/theme/routes";
import {renderToStringWithData} from "@apollo/react-ssr";
import introspectionQueryResultData from "../client/fragments";

const assetsServer = process.env.ASSETS_SERVER || '';

const app = express();
const serverConfig = {
    protocol: process.env.SERVER_PROTOCOL || 'http',
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.SERVER_PORT || 3000,
};
const clientConfig = {
    protocol: process.env.API_PROTOCOL || 'http',
    host: process.env.API_HOST || 'localhost',
    port: process.env.API_PORT || 8080,
};

app.use(express.static('public'));
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    context: {
        client: client(clientConfig),
    },
}));

app.get('*', (request, response) => {

    // response.status(200);
    // response.send(`<!doctype html>\n${ReactDOM.renderToString(
    //     <Html content={''} state={{}} assetsServer={assetsServer}/>
    // )}`);
    // response.end();

    // return;

    const fragmentMatcher = new IntrospectionFragmentMatcher({introspectionQueryResultData});
    const cache = new InMemoryCache({fragmentMatcher});

    const client = new ApolloClient({
        ssrMode: true,
        ssrForceFetchDelay: 1000,
        link: createHttpLink({
            uri: `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/graphql`,
            credentials: 'same-origin',
            headers: {
                cookie: request.header('Cookie'),
            },
        }),
        cache: cache,
    });

    const App = (
        <ApolloProvider client={client}>
            <Router location={request.url} context={{}}>
                <AppRouter />
            </Router>
        </ApolloProvider>
    );

    renderToStringWithData(App).then((content) => {
        const initialState = client.extract();
        const html = <Html content={content} state={initialState} assetsServer={assetsServer} />;
        response.status(200);
        response.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`);
        response.end();
    }).catch(error => {
        response.status(500);
        response.send(`error ${error.message}`);
        response.end();
    });
});

// tslint:disable-next-line:no-console
app.listen(serverConfig.port, () => console.log(`Server started on ${serverConfig.port}`));
