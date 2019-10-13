import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssues from './AssemblyIssues';

const assemblyIssueQuery = gql`
    query ($assembly: Int!, $cursor: CursorInput, $types: [CategoryType], $category: IssueCategory){
        AssemblyIssues (assembly: $assembly cursor: $cursor types: $types category: $category) {
            issues {
                ... on IssueInterface {
                    ...issueInterface
                }
                ... on IssueA {
                    ... issueA
                }
            }
        }
    }

    fragment issueInterface on IssueInterface {
        id
        assembly {id}
        name
        type {type category typeName typeSubName}
        speechCount
        speechTime
    }

    fragment issueA on IssueA {
        subName
        status
        proponents(count: 1) {
            id
            name
            avatar {templateSrc}
            party {id name color}
            constituency {id name abbr_short}
        }
        proponentsCount
    }
`;

const queryAssemblyIssuesSummary = gql`
    query assemblyIssuesSummary ($assembly: Int!) {
        AssemblyIssuesSummary (assembly: $assembly) {
            types {count type {type typeName category typeSubName}}
            categories {count category {id title}}
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
    graphql(queryAssemblyIssuesSummary, {
        props: ({data: {loading, error, AssemblyIssuesSummary}}: any) => ({
            types: loading === false ? AssemblyIssuesSummary.types : [],
            categories: loading === false ? AssemblyIssuesSummary.categories : [],
        })
    }),
    graphql(assemblyIssueQuery, {
        props: ({ownProps, data: {fetchMore, error, loading, AssemblyIssues}}: any) => {
            return {
                error,
                loading,
                issues: loading === false ? AssemblyIssues.issues : undefined,
                done: loading === false ? AssemblyIssues.done : true,
                loadMore: () => {
                    return fetchMore({
                        query: assemblyIssueQuery,
                        variables: {
                            assembly: ownProps.assembly,
                            type: ownProps.filter.type,
                            category: ownProps.filter.category,
                            cursor: {
                                from: AssemblyIssues.cursor.from,
                                to: AssemblyIssues.cursor.to,
                            },
                        },
                        updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
                            return {
                                AssemblyIssues: {
                                    __typename: 'AssemblyIssues',
                                    done: fetchMoreResult.AssemblyIssues.done,
                                    cursor: fetchMoreResult.AssemblyIssues.cursor,
                                    issues: [
                                        ...previousResult.AssemblyIssues.issues,
                                        ...fetchMoreResult.AssemblyIssues.issues,
                                    ],
                                },
                            };
                        },
                    });
                },
            };
        },
        options: ({assembly, filter}: any): any => {
            return { //@todo
            variables: {
                assembly,
                type: filter.type,
                category: filter.category,
            },
        }},
    }),
)(AssemblyIssues);
