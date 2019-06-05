import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import DocumentCongressmanVotes from './DocumentCongressmanVotes';
import {Vote as VoteType} from '../../../../@types';

const documentVotesQuery = gql`
    query documentVotes($assembly: Int! $issue: Int! $vote: Int!) {
        DocumentVotes(assembly: $assembly issue: $issue vote: $vote) {
            id
            voteId
            vote
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
        }
    }
`;

type Response = {
    DocumentVotes: VoteType[];
};

type InputProps = {
    assembly: number,
    issue: number,
    vote: number
};

type Variables = {
    assembly: number,
    issue: number,
    vote: number
};

interface Props {
    // loading?: any;
    // error?: any;
    votes: VoteType[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(documentVotesQuery, {
        props: ({data: {loading, DocumentVotes}}: any) => ({ //@todo
            votes: loading === false ? DocumentVotes : undefined,
            loading: loading,
        }),
        options: ({assembly, issue, vote}) => ({
            variables: {
                assembly,
                issue,
                vote,
            },
        }),
    }),
)(DocumentCongressmanVotes);
