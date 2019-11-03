import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ApolloProvider} from 'react-apollo';
import {ApolloClient} from 'apollo-client';
import AppRouter from './theme/routes';
import {IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink} from 'apollo-link';
import introspectionQueryResultData from './fragments';
import {onError} from "apollo-link-error";
import {postGraphQLError, postNetworkError} from './utils/postError'
import {BrowserRouter as Router} from "react-router-dom";

const fragmentMatcher = new IntrospectionFragmentMatcher({introspectionQueryResultData});
const cache = new InMemoryCache({fragmentMatcher}).restore(window.__APOLLO_STATE__);

const linkError = onError(({ graphQLErrors, networkError, operation }): void => {
    graphQLErrors && postGraphQLError(graphQLErrors, operation);
    networkError && postNetworkError(networkError, operation);
});

const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        linkError,
        new HttpLink({uri: '/graphql'})
    ]),
});

ReactDOM.hydrate(
    <ApolloProvider client={client}>
        <Router>
            <AppRouter />
        </Router>
    </ApolloProvider>,
    document.querySelector('[data-react]'),
);
