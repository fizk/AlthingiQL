import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import IssueSpeeches from './IssueSpeeches';

const issueSpeechesQuery = gql`
    query ($assembly: Int! $issue: Int! $category: String! $speech: String $cursor: CursorInput) {
        IssueSpeeches(issue: $issue assembly: $assembly category: $category speech: $speech cursor: $cursor) {
            cursor {from to}
            done
            speeches {
                id
                assembly {id}
                issue {
                    ... on IssueInterface {id}
                }
                period {from to}
                congressmanType
                iteration
                type
                congressman {
                    id
                    name
                    avatar {templateSrc}
                    party {id name color}
                }
                text
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
    graphql(issueSpeechesQuery, {
        props: ({ownProps, data: {fetchMore, loading, IssueSpeeches}}: any) => { //@todo `any`
            return {
                speeches: loading === false ? IssueSpeeches.speeches : undefined,
                done: loading === false ? IssueSpeeches.done : true,
                loading: loading,
                loadMore: () => {
                    return fetchMore({
                        query: issueSpeechesQuery,
                        variables: {
                            issue: ownProps.issue,
                            assembly: ownProps.assembly,
                            cursor: {
                                from: IssueSpeeches.cursor.from,
                                to: IssueSpeeches.cursor.to,
                            },
                        },
                        updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
                            return {
                                IssueSpeeches: {
                                    cursor: fetchMoreResult.IssueSpeeches.cursor,
                                    done: fetchMoreResult.IssueSpeeches.done,
                                    speeches: [
                                        ...previousResult.IssueSpeeches.speeches,
                                        ...fetchMoreResult.IssueSpeeches.speeches,
                                    ],
                                },
                            };
                        },
                    });
                },
            };
        },
        options: ({issue, assembly, speech, category}: any) => {
            return {
                variables: {
                    issue,
                    assembly,
                    speech,
                    category,
                },
            };
        },
    }),
)(IssueSpeeches);
