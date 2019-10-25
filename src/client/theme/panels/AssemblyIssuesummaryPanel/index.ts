import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssueSummaryPanel from './AssemblyIssueSummaryPanel';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $issue: Int! $category: IssueCategory!) {
        AssemblyIssueProgress (assembly: $assembly, issue: $issue category: $category) {
            issue {
                ... on IssueInterface {
                    id
                    type {
                        category
                    }
                }
            }
            assembly {id}
            committee {id name}
            speech {id}
            document {id}
            date
            title
            type
            completed
        }
        AssemblyIssue (assembly: $assembly issue: $issue category: $category) {
            __typename
            ... on IssueInterface {
                id
                name
                type {
                    typeName
                    category
                }
                assembly {id}
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
            }
            ... on IssueA {...moreissueA}

        }
    }
    fragment moreissueA on IssueA {
        status
        goal
        subName
        type {
            typeSubName
        }
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
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({data: {error, loading, AssemblyIssueProgress, AssemblyIssue}}: any) => {
            return {
                error,
                loading,
                progress: loading === false ? AssemblyIssueProgress : null,
                issueItem: loading === false ? AssemblyIssue : null,
            }
        },
        options: ({assembly, issue, category}: {assembly: number; issue: number; category: number}) => ({
            variables: {
                assembly,
                issue,
                category
            },
        }),
    })
)(AssemblyIssueSummaryPanel)

