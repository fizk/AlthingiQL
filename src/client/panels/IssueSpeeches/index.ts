import {graphql, compose} from 'react-apollo';
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

type Response = {
    IssueSpeeches: any[];
};

type InputProps = {
    issue: number;
    assembly: number;
    speech: string;
    category: string;
};

type Variables = {
    issue: number;
    assembly: number;
    speech: string;
    category: string;
};

interface Props {
    // loading?: any;
    // error?: any;
    speeches: any[];
    done: boolean;
}


export default compose(
    graphql<InputProps, Response, Variables, Props>(issueSpeechesQuery, {
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
        options: ({issue, assembly, speech, category}) => {
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
