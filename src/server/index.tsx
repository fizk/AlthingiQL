import * as React from 'react';
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
import Routers from '../client/router';
import Chrome from '../client/components/Chrome';
import Helmet from 'react-helmet';

const assetsServer = process.env.ASSETS_SERVER || ''; // 'http://localhost:3001';

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
    schema,
    graphiql: true,
    context: {
        client: client(debug('server-log'), clientConfig),
    },
}));

app.get('*', (request, response) => {

    response.send(`
             <!doctype html>
             <html lang="is">
                 <head>
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                     <link rel="stylesheet" type="text/css" href="${assetsServer}/stylesheets/application.css" />
                 </head>
                 <body>
                     <div data-react></div>
                     <script src="${assetsServer}/javascripts/application.js"></script>
                 </body>
             </html>`);
    response.end();
    //
    // return;

    // const apolloClient = new ApolloClient({
    //     ssrMode: true,
    //     networkInterface: createNetworkInterface({
    //         uri: `${serverConfig.protocol}://${serverConfig.host}:${serverConfig.port}/graphql`,
    //         opts: {
    //             credentials: 'same-origin',
    //             headers: {
    //                 cookie: request.header('Cookie'),
    //             },
    //         },
    //     }),
    // });
    //
    // const combinedReducer = combineReducers({
    //     ...reducers,
    //     apollo: apolloClient.reducer(),
    // });
    // const store = createStore(combinedReducer, applyMiddleware(apolloClient.middleware(), thunk));
    //
    // const application = (
    //     <ApolloProvider client={apolloClient} store={store}>
    //         <StaticRouter location={request.url} context={{}}>
    //             <Routers />
    //         </StaticRouter>
    //     </ApolloProvider>
    // );
    //
    // renderToStringWithData(application).then(content => {
    //     const initialState = {apollo: apolloClient.getInitialState()};
    //     const helmet = Helmet.renderStatic();
    //     const html = `<!doctype html>
    //          <html lang="is">
    //              <head>
    //                  <meta name="viewport" content="width=device-width, initial-scale=1">
    //                  <meta property="og:site_name" content="Löggjafarþing">
    //                  <link rel="stylesheet" type="text/css" href="${assetsServer}/stylesheets/application.css" />
    //                  ${helmet.title.toString()}
    //                  ${helmet.meta.toString()}
    //                  ${helmet.link.toString()}
    //              </head>
    //              <body>
    //                  <div data-react>${content}</div>
    //                  <script>
    //                     window.__APOLLO_STATE__= ${JSON.stringify(initialState).replace(/</g, '\\\\\u003c')};
    //                 </script>
    //                  <script src="${assetsServer}/javascripts/application.js"></script>
    //              </body>
    //          </html>`;
    //     response.status(200);
    //     response.send(html);
    //     response.end();
    // }).catch(error => {
    //     const html = ReactDOM.renderToStaticMarkup(
    //         <html lang="is">
    //             <head>
    //                 <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    //                 <link rel="stylesheet" type="text/css" href="/stylesheets/application.css" />
    //             </head>
    //             <body>
    //                 <Chrome>
    //                     <pre>
    //                         message: {error.message}
    //                         file: {error.file}
    //                         line: {error.line}
    //                         column: {error.column}
    //                     </pre>
    //                 </Chrome>
    //             </body>
    //         </html>,
    //     );
    //     // debug('server-error')('%O', error);
    //     switch (error.constructor) {
    //         case ReferenceError:
    //         case EvalError:
    //         case SyntaxError:
    //         case RangeError:
    //         case TypeError:
    //         case URIError:
    //             response.status(500);
    //             break;
    //         case Error:
    //         default:
    //             response.status(500);
    //             console.log('%s %s %s %s', error.message, error.fileName, error.lineNumber, error.columnNumber);
    //             console.log('%j', error);
    //             break;
    //     }
    //     // debug('server-error')('%O', error);
    //     response.send(`<!doctype html>${html}`);
    //     response.end();
    // });
});

app.listen(serverConfig.port, () => console.log(`Server started on ${serverConfig.port}`));
