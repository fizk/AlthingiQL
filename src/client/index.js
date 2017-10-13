import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {ApolloProvider} from 'react-apollo';
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {Routers} from './router';

const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:3000/graphql',
        // dataIdFromObject: record => record.id,
    })
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router>
            <Routers />
        </Router>
    </ApolloProvider>,
    document.querySelector('[data-react]')
);
