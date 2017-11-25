import {graphql, compose, gql} from 'react-apollo';
import DocumentCongressmanVotes from './DocumentCongressmanVotes';

const documentVotesQuery = gql`
    query documentVotes($assembly: Int! $issue: Int! $vote: Int!) {
        DocumentVotes(assembly: $assembly issue: $issue vote: $vote) {
            id
            voteId
            vote
            congressman {
                id
                name
                party {
                    id
                    name
                    color
                }
            }
        }
    }
`;

export default compose(
    graphql(documentVotesQuery, {
        props: all => ({
            votes: all.data.loading === false ? all.data.DocumentVotes : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly, issue, vote}) => ({
            variables: {
                assembly: assembly,
                issue: issue,
                vote: vote,
            }
        })
    })
)(DocumentCongressmanVotes);

