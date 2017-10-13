import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import IssueDocuments from './IssueDocuments';

const issueDocumentsQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        IssueDocuments(issue: $issue, assembly: $assembly) {
            id
            type
            url
            date
        }
    }
`;

export default compose(
    graphql(issueDocumentsQuery, {
        props: all => ({
            documents: all.data.loading === false ? all.data.IssueDocuments : undefined,
            loading: all.data.loading,
        }),
        options: ({issue, assembly}) => ({
            variables: {
                issue: issue,
                assembly: assembly
            }
        })
    })
)(IssueDocuments)
