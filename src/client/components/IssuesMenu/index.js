import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import IssuesMenu from './IssuesMenu';

const assemblyQuery = gql`
    query assemblyIssue($assembly: Int!) {
        AssemblyCategorySummary(assembly: $assembly) {
            id
            superCategoryId
            title
            count
        }
        AssemblySummary(assembly: $assembly) {
            types {
                count
                type
                typeName
                typeSubName
            }
        }
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: all => ({
            types: all.data.loading === false ? all.data.AssemblySummary.types : undefined,
            categories: all.data.loading === false ? all.data.AssemblyCategorySummary: undefined,
            loading: all.data.loading
        }),
        options: ({assembly}) => ({
            variables: {
                assembly: assembly,
            }
        })
    })
)(IssuesMenu)
