import React from 'react';
import ReactDOM from 'react-dom/server';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import {client} from './utils/client';
import debug from 'debug';
import {ApolloClient, createNetworkInterface, ApolloProvider, renderToStringWithData} from 'react-apollo';
import {StaticRouter} from 'react-router';
import 'isomorphic-fetch';
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import {Routers} from '../client/router';
import {Chrome} from '../client/components/Chrome';

const app = express();
const serverConfig = {
    protocol: process.env.SERVER_PROTOCOL || 'http',
    host: process.env.SERVER_HOST || 'localhost',
    port: process.env.PORT || 3000,
};
const clientConfig = {
    protocol: process.env.CLIENT_PROTOCOL || 'http',
    host: process.env.CLIENT_HOST || 'localhost',
    port: process.env.CLIENT_PORT || 8080,
};

app.use(express.static('public'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        client: client(debug('server-log'), clientConfig),
    },
}));
app.get('*', (request, response) => {

    response.send(`
             <!doctype html>
             <html>
                 <head>
                     <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
                     <link rel="stylesheet" type="text/css" href="/stylesheets/application.css" />
                 </head>
                 <body>
                     <div data-react></div>
                     <script src="/scripts/application.js"></script>
                 </body>
             </html>`);
    response.end();

    return;

    const client = new ApolloClient({
        ssrMode: true,
        networkInterface: createNetworkInterface({
            uri: `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/graphql`,
            opts: {
                credentials: 'same-origin',
                headers: {
                    cookie: request.header('Cookie'),
                },
            },
        }),
    });

    let combinedReducer = combineReducers({
        ...reducers,
        apollo: client.reducer(),
    });
    const store = createStore(combinedReducer, applyMiddleware(client.middleware(), thunk));

    const app = (
        <ApolloProvider client={client} store={store}>
            <StaticRouter location={request.url} context={{}}>
                <Routers />
            </StaticRouter>
        </ApolloProvider>
    );

    renderToStringWithData(app).then(content => {
        const initialState = {apollo: client.getInitialState(), };
        const html = `<!doctype html>
             <html>
                 <head>
                     <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
                     <link rel="stylesheet" type="text/css" href="/stylesheets/application.css" />
                 </head>
                 <body>
                     <div data-react>${content}</div>
                     <script>
                        window.__APOLLO_STATE__= ${JSON.stringify(initialState).replace(/</g, '\\\\\u003c')};
                    </script>
                     <script src="/scripts/application.js"></script>
                 </body>
             </html>`;

        response.status(200);
        response.send(html);
        response.end();
    }).catch(error => {
        response.status(500);
        const html = ReactDOM.renderToStaticMarkup(
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                    <link rel="stylesheet" type="text/css" href="/stylesheets/application.css" />
                </head>
                <body>
                    <Chrome>
                        <pre>
                            {JSON.stringify(error, undefined, 4)}
                        </pre>
                    </Chrome>
                </body>
            </html>
        );
        debug('server-error')('%O', error);
        response.send(`<!doctype html>${html}`);
        response.end();
    });
});

app.listen(serverConfig.port, () => debug('server-log')(`Server started on ${serverConfig.port}`));
