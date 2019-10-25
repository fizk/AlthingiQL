import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssueSpeechesPanel from './AssemblyIssueSpeechesPanel';

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
                    constituency {id name}
                }
                text
            }

        }
    }
`;

export default compose(
    graphql(issueSpeechesQuery, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({ownProps, data: {error, loading, fetchMore, IssueSpeeches}}: any) => {
            return {
                speeches: {
                    error,
                    loading,
                    speeches: loading === false ? IssueSpeeches.speeches : [],
                    done: loading === false ? IssueSpeeches.done : false,
                },
                // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
                pagination: () => {
                    return fetchMore({
                        query: issueSpeechesQuery,
                        variables: {
                            issue: ownProps.issue,
                            assembly: ownProps.assembly,
                            category: ownProps.category,
                            cursor: {
                                from: IssueSpeeches.cursor.from,
                                to: IssueSpeeches.cursor.to,
                            },
                        },
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        updateQuery: (previousResult: any, {fetchMoreResult}: any) => {
                            return {
                                IssueSpeeches: {
                                    __typename: 'IssueSpeeches',
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
            }
        },
        options: ({issue, assembly, speech, category}: {issue: number; assembly: number; speech: string; category: string}) => {
            return {
                variables: {
                    issue,
                    assembly,
                    speech,
                    category,
                },
            };
        },
    })
)(AssemblyIssueSpeechesPanel);
