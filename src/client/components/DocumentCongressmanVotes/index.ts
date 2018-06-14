import {graphql, compose, gql} from 'react-apollo';
import DocumentCongressmanVotes from './DocumentCongressmanVotes';

type Picture = {
    templateSrc: string
}

type Party = {
    id: number
    name: string
    color: string
}

type Congressman = {
    id: number
    name: string
    avatar: Picture
    party: Party
}

type DocumentVote = {
    id: number
    voteId: number
    vote: string
    congressman: Congressman
}

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

export default compose<any>( //@todo `any`
    graphql(documentVotesQuery, {
        props: (all: {data?: {loading: boolean, DocumentVotes: DocumentVote}}) => ({
            votes: all.data.loading === false ? all.data.DocumentVotes : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly, issue, vote}: {assembly: number, issue: number, vote: number}) => ({
            variables: {
                assembly: assembly,
                issue: issue,
                vote: vote,
            }
        })
    })
)(DocumentCongressmanVotes);

