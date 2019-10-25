import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssuesPanel from './AssemblyIssuesPanel';

/**
 * @todo categories (malaflokkar, yfirmalaflokkar) are not supported
 *      needs to be added as another argument into this query
 */
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
            cursor {from to}
            done
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

export default compose(
    graphql(assemblyIssueQuery, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({ownProps, data: {fetchMore, error, loading, AssemblyIssues}}: any) => {
            return {
                issues: {
                    error,
                    loading,
                    issues: loading === false ? AssemblyIssues.issues : undefined,
                    done: loading === false ? AssemblyIssues.done : true,
                },
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                pagination: () => {
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
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            }
        },
        options: ({assembly, filter}: {assembly: number; filter: Map<string,string>}) => ({
            // notifyOnNetworkStatusChange: true, //@todo find a better way
            variables: {
                assembly,
                filter,
                types: filter.has('tegund') ? (filter.get('tegund') || '').split(',') : null,
            },
        }),
    })
)(AssemblyIssuesPanel)


