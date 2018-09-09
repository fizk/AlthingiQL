import * as React from "react";
import Congressman from "../../elements/Congressman";

interface Picture {
    templateSrc: string
}

interface Party {
    id: number
    name: string
    color: string
}
type DocumentVote = {
    id: number
    voteId: number
    vote: string
    congressman: {
        id: number
        name: string
        avatar: Picture
        party: Party
    }
}

type DocumentCongressmanVotesProps = {
    assembly?: number,
    issue?: number,
    vote?: number,
    votes?: DocumentVote[]
};

export default class DocumentCongressmanVotes extends React.Component<DocumentCongressmanVotesProps, {}> {
    static defaultProps: DocumentCongressmanVotesProps = {
        assembly: undefined,
        issue: undefined,
        vote: undefined,
        votes: []
    };

    voteSort(a: {vote: string}, b: {vote: string}) {
        return b.vote.localeCompare(a.vote);
    }

    render() {
        return (
            <ul>
                {this.props.votes
                    .slice()
                    .sort(this.voteSort)
                    .map(vote => (
                        <li key={`${vote.id}`}>
                            <Congressman
                                congressman={vote.congressman}
                                party={vote.congressman.party}
                            >
                                <p>
                                    <strong>{vote.vote}</strong>
                                </p>
                            </Congressman>
                        </li>
                    ))}
            </ul>
        );
    }
}
