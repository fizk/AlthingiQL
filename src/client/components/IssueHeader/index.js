import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import IssueHeader from './IssueHeader';

const assemblyQuery = gql`
    query assemblyIssue($assembly: Int! $issue: Int!) {
        AssemblyIssue (assembly: $assembly issue: $issue) {
            id
            assembly {id}
            category
            name
            subName
            type
            typeName
            typeSubName
            status
            question
            goal
            date
        }
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: all => ({
            issue: all.data.loading === false ? all.data.AssemblyIssue : undefined,
            loading: all.data.loading
        }),
        options: ({assembly, issue}) => ({
            variables: {
                assembly: assembly,
                issue: issue,
            }
        })
    })
)(IssueHeader)
