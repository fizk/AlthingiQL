import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssue from './AssemblyIssue';

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

const queryAssembly = gql`
    query assembly ($assembly: Int!) {
        Assembly(assembly: $assembly) {
            id
            division {
                majority {color}
                minority {color}
            }
            cabinet {
                title
                period {from to}
            }
            period {
                from
                to
            }
        }
    }
`;

export default compose(
    graphql(queryAssembly, {
        props: ({data: {loading, error, Assembly}}: any) => ({
            assemblyProperties: {
                assembly: loading === false ? Assembly : {
                    id: undefined,
                    period: {
                        from: undefined,
                        to: undefined,
                    },
                    division: [],
                    cabinet: {
                        title: undefined,
                        period: {from: undefined, to: undefined}
                    }
                },
                loading,
                error,
            }
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly: Number(assembly),
            },
        }),
    }),
    graphql(assemblyIssueQuery, {
        props: ({data: {loading, AssemblyIssue, AssemblyIssueProgress}}: any) => ({ //@todo `any`
            issue: loading === false ? AssemblyIssue : undefined,
            progress: loading === false ? AssemblyIssueProgress : undefined,
            loading: loading,
        }),
        options: ({issue, assembly, category}: any) => ({
            variables: {
                issue: Number(issue),
                assembly: Number(assembly),
                category,
            },
        }),
    }),
)(AssemblyIssue);
