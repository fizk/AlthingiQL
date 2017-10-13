import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import AssemblyIssues from './AssemblyIssues';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $cursor: String) {
        AssemblyIssues (assembly: $assembly cursor: $cursor) {
            issues {
                id
                name
                status
                type
                typeName
                goal
                assembly {id}
                proponents {
                    id
                    name
                    party {
                        id
                        name
                        color
                    }
                }
            }
            cursor
        }
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        props: all => {
            return {
                issues: all.data.loading === false ? all.data.AssemblyIssues.issues : undefined,
                loading: all.data.loading,
                loadMore: () => {
                    return all.data.fetchMore({
                        query: assemblyIssueQuery,
                        variables: {
                            assembly: all.ownProps.assembly,
                            cursor: all.data.AssemblyIssues.cursor
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            const previousEntry = previousResult.AssemblyIssues;
                            const newComments = fetchMoreResult.AssemblyIssues.issues;
                            const newCursor = fetchMoreResult.AssemblyIssues.cursor;

                            return {
                                cursor: newCursor,

                                    issues: [...previousEntry.issues, ...newComments],

                            }
                        }

                    })
                }
            }
        },
        options: ({assembly}) => ({
            variables: {
                assembly: assembly
            }
        })
    })
)(AssemblyIssues)
