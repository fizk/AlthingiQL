import {graphql, compose, gql} from 'react-apollo';
import AssemblyIssues from './AssemblyIssues';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $cursor: CursorInput $type: String $category: String) {
        AssemblyIssues (assembly: $assembly cursor: $cursor type: $type category: $category) {
            issues {
                id
                name
                status
                type
                typeName
                subName
                goal
                assembly {id}
                proponentsCount
                proponents(count: 1) {
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
            cursor {from to}
            done
        }
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        props: (all: {ownProps: any, data?: {fetchMore: any, loading: boolean, AssemblyIssues: any}}) => { //@todo `any`
            return {
                issues: all.data.loading === false ? all.data.AssemblyIssues.issues : undefined,
                done: all.data.loading === false ? all.data.AssemblyIssues.done : true,
                loading: all.data.loading,
                loadMore: () => {
                    return all.data.fetchMore({
                        query: assemblyIssueQuery,
                        variables: {
                            assembly: all.ownProps.assembly,
                            type: all.ownProps.filter.type,
                            category: all.ownProps.filter.category,
                            cursor: {
                                from: all.data.AssemblyIssues.cursor.from,
                                to: all.data.AssemblyIssues.cursor.to,
                            },
                        },
                        updateQuery: (previousResult, { fetchMoreResult }) => {
                            return {
                                AssemblyIssues: {
                                    done: fetchMoreResult.AssemblyIssues.done,
                                    cursor: fetchMoreResult.AssemblyIssues.cursor,
                                    issues: [
                                        ...previousResult.AssemblyIssues.issues,
                                        ...fetchMoreResult.AssemblyIssues.issues
                                    ],
                                }
                            }
                        }
                    })
                }
            }
        },
        options: ({assembly, filter}) => ({
            variables: {
                assembly: assembly,
                type: filter.type,
                category: filter.category,
            }
        })
    })
)(AssemblyIssues)
