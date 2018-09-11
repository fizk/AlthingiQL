import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import Routers from './router';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

declare const __GRAPHQL_SERVER__: string;


const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: __GRAPHQL_SERVER__ || 'http://localhost:3000/graphql',
    }),
});

let combinedReducer = combineReducers({
    ...reducers,
    apollo: client.reducer(),
});

const store = createStore(
    combinedReducer,
    window.__APOLLO_STATE__,
    applyMiddleware(client.middleware(), thunk)
);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = composeEnhancers(
//     applyMiddleware(
//         client.middleware(),
//         thunk
//     )
// )(createStore)(combinedReducer);

ReactDOM.render(
    <ApolloProvider client={client} store={store}>
        <Router>
            <Routers />
        </Router>
    </ApolloProvider>,
    document.querySelector('[data-react]')
);