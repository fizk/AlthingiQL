import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssuePanel from './AssemblyIssuePanel';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $issue: Int! $category: IssueCategory!) {
        AssemblyIssue (assembly: $assembly, issue: $issue category: $category) {
            __typename
            ... on IssueInterface {
                name
                id
                assembly {id}

                type {type category typeName typeSubName}
            }
            ... on IssueA {
                proponents(count: 1) {
                    id
                    name
                    constituency {
                        id
                        name
                    }
                    party {
                        id
                        name
                        color
                    }
                }
            }
        }
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        props: ({data: {fetchMore, error, loading, AssemblyIssue}}: any) => {
            return {issueProperties: {
                    error,
                    loading,
                    issue: loading === false ? AssemblyIssue : undefined,
                },
            }
        },
        options: ({assembly, issue, category}: {assembly: number; issue: number; category: number}) => ({
            // notifyOnNetworkStatusChange: true, //@todo find a better way
            variables: {
                assembly,
                issue,
                category
            },
        }),
    })
)(AssemblyIssuePanel)


