import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import Routers from './router';
import {IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink} from 'apollo-link';
import introspectionQueryResultData from './fragments';

const fragmentMatcher = new IntrospectionFragmentMatcher({introspectionQueryResultData});
const cache = new InMemoryCache({fragmentMatcher});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([new HttpLink({uri: '/graphql'})]),
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <Router>
            <Routers/>
        </Router>
    </ApolloProvider>,
    document.querySelector('[data-react]'),
);
