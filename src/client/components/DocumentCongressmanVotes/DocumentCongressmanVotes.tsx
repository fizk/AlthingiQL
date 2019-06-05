import * as React from 'react';
import Congressman from '../../elements/Congressman';
import {Vote as VoteType} from '../../../../@types';

interface Props {
    assembly: number;
    issue: number;
    vote: number;
    votes: VoteType[];
}

export default class DocumentCongressmanVotes extends React.Component<Props, {}> {
    public static defaultProps = {
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
                            <Congressman congressman={vote.congressman}
                                party={vote.congressman.party}>
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
