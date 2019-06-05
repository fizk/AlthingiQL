import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import AssemblyIssues from './AssemblyIssues';
import {
    CategorySpeechTime,
    Issue as IssueType, IssueCount,
    Person as PersonType,
    Session as SessionType,
    VoteSummary as VoteSummaryType
} from "../../../../@types";

const assemblyIssueQuery = gql`
    query ($assembly: Int!, $cursor: CursorInput, $type: String, $category: String) {
        AssemblyIssues(assembly: $assembly, cursor: $cursor, type: $type, category: $category) {
            issues {
                __typename
                ... on IssueInterface {
                    id
                    category
                    name
                    type
                    typeName
                    assembly {id}
                }
                ... on IssueA {...issueA}

            }
            cursor {from to}
            done
        }
    }

    fragment issueA on IssueA {
        proponentsCount
        proponents(count: 1) {
            id
            name
            avatar {templateSrc}
            party {id name color}
        }
    }

`;


type Response = {
    AssemblyIssues: any;
};

type InputProps = {
    assembly: number;
    filter: string;
};

type Variables = {
    assembly: number;
    filter: string;
    category: string;
};

interface Props {
    // loading?: any;
    // error?: any;
    issues: any[];
    done: boolean;
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyIssueQuery, {
        props: ({ownProps, data: {fetchMore, loading, AssemblyIssues}}: any) => {
            return {
                issues: loading === false ? AssemblyIssues.issues : undefined,
                done: loading === false ? AssemblyIssues.done : true,
                loading: loading,
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
        options: ({assembly, filter}: any): any => ({ //@todo
            variables: {
                assembly,
                type: filter.type,
                category: filter.category,
            },
        }),
    }),
)(AssemblyIssues);
