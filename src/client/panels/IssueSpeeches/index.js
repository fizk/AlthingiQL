import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import IssueSpeeches from './IssueSpeeches';

const issueSpeechesQuery = gql`
    query ($assembly: Int! $issue: Int! $speech: String $cursor: CursorInput) {
        IssueSpeeches(issue: $issue assembly: $assembly speech: $speech cursor: $cursor) {
            cursor {from to}
            done
            speeches {
                id
                assembly {id}
                issue {id}
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

export default compose(
    graphql(issueSpeechesQuery, {
        props: all => {
            return {
                speeches: all.data.loading === false ? all.data.IssueSpeeches.speeches : undefined,
                done: all.data.loading === false ? all.data.IssueSpeeches.done : true,
                loading: all.data.loading,
                loadMore: () => {
                    return all.data.fetchMore({
                        query: issueSpeechesQuery,
                        variables: {
                            issue: all.ownProps.issue,
                            assembly: all.ownProps.assembly,
                            cursor: {
                                from: all.data.IssueSpeeches.cursor.from,
                                to: all.data.IssueSpeeches.cursor.to,
                            },
                        },
                        updateQuery: (previousResult, {fetchMoreResult}) => {
                            return {
                                IssueSpeeches: {
                                    cursor: fetchMoreResult.IssueSpeeches.cursor,
                                    done: fetchMoreResult.IssueSpeeches.done,
                                    speeches: [
                                        ...previousResult.IssueSpeeches.speeches,
                                        ...fetchMoreResult.IssueSpeeches.speeches
                                    ],
                                }
                            }
                        }
                    })
                }
            }
        },
        options: ({issue, assembly, speech}) => {
            return {
                variables: {
                    issue: issue,
                    assembly: assembly,
                    speech: speech,
                }
            }
        }
    })
)(IssueSpeeches)
