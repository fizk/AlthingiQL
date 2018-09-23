import * as React from 'react';
import Congressman from '../../elements/Congressman';

interface Picture {
    templateSrc: string;
}

interface Party {
    id: number;
    name: string;
    color: string;
}
interface DocumentVote {
    id: number;
    voteId: number;
    vote: string;
    congressman: {
        id: number
        name: string
        avatar: Picture
        party: Party,
    };
}

interface DocumentCongressmanVotesProps {
    assembly?: number;
    issue?: number;
    vote?: number;
    votes?: DocumentVote[];
}

export default class DocumentCongressmanVotes extends React.Component<DocumentCongressmanVotesProps, {}> {
    public static defaultProps: DocumentCongressmanVotesProps = {
        assembly: undefined,
        issue: undefined,
        vote: undefined,
        votes: [],
    };

    private voteSort(a: {vote: string}, b: {vote: string}) {
        return b.vote.localeCompare(a.vote);
    }

    public render() {
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
