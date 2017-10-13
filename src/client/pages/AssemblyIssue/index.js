import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import AssemblyIssue from './AssemblyIssue';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        AssemblyIssue(assembly: $assembly issue: $issue) {
            id
            assembly {
                id
            }
            name
            status
            goal
            subName
            type
            typeName
            typeSubName
            question
            majorChanges
            changesInLaw
            costsAndRevenues
            deliveries
            additionalInformation
            date
            proponents {
                id
                name
                party {
                    id
                    name
                    color
                }
            }
            speakers {
                congressman {
                    id
                    name
                    party {
                        id
                        name
                        color
                    }
                }
                duration
            }

        }
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        props: all => ({
            issue: all.data.loading === false ? all.data.AssemblyIssue : undefined,
            loading: all.data.loading,
        }),
        options: ({issue, assembly}) => ({
            variables: {
                issue: issue,
                assembly: assembly
            }
        })
    })
)(AssemblyIssue)
