import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import AssemblyIssue from './AssemblyIssue';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        AssemblyIssueProgress (assembly: $assembly, issue: $issue) {
            issue {id}
            assembly {id}
            committee {id name}
            speech {id}
            document {id}
            date
            title
            type
            completed
        }
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
                avatar {templateSrc}
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
                    avatar {templateSrc}
                    party {
                        id
                        name
                        color
                    }
                }
                value
            }
            voteRange {
                count
                date
            }
            speechRange {
                count
                date
            }
        }
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        props: all => ({
            issue: all.data.loading === false ? all.data.AssemblyIssue : undefined,
            progress: all.data.loading === false ? all.data.AssemblyIssueProgress : undefined,
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
