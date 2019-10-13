import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import IssueDocuments from './IssueDocuments';

const issueDocumentsQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        IssueDocuments(issue: $issue, assembly: $assembly) {
            id
            type
            url
            date
            votes {
                id
                type
                outcome
                yes
                no
                inaction
                committee
            }
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
    }
`;

const assemblyIssueQuery = gql`
    query ($assembly: Int! $issue: Int! $category: IssueCategory!) {
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
        props: ({data: {loading, error, AssemblyIssue}}: any) => ({ //@todo `any`
            issueProperties: {
                issue: loading === false ? AssemblyIssue : {
                    id: undefined,
                    assembly: {id: undefined},
                    name: undefined,
                    type: {
                        type:  undefined,
                        category: undefined,
                        typeName: undefined,
                        typeSubName: undefined,
                    },
                    date: undefined,
                },
                loading,
                error,
            },
        }),
        options: ({issue, assembly, category}: any) => ({
            variables: {
                issue: Number(issue),
                assembly: Number(assembly),
                category,
            },
        }),
    }),
    graphql(issueDocumentsQuery, {
        props: ({data: {loading, error, IssueDocuments}}: any) => ({ //@todo `any`
            documents: loading === false ? IssueDocuments : undefined,
            loading,
            error,
        }),
        options: ({issue, assembly}: any) => ({
            variables: {
                issue,
                assembly,
                category: 'A',
            },
        }),
    }),
)(IssueDocuments);
