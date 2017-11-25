import React from 'react';
import PropTypes from 'prop-types';
import {Congressman} from "../../elements/Congressman/index";

export default class DocumentCongressmanVotes extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        issue: PropTypes.number,
        vote: PropTypes.number,
        votes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            voteId: PropTypes.number,
            vote: PropTypes.string,
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string
                }),
            }),
        })),
    };

    static defaultProps = {
        assembly: undefined,
        issue: undefined,
        vote: undefined,
        votes: [],
    };


    voteSort (a, b) {
        return b.vote.localeCompare(a.vote);
    }

    render() {
        console.log(this.props.votes);
        return (
            <ul>
                {this.props.votes.slice().sort(this.voteSort).map(vote => (
                    <li key={`${vote.id}`}>
                        <Congressman congressman={vote.congressman} party={vote.congressman.party}>
                            <p><strong>{vote.vote}</strong></p>
                        </Congressman>
                    </li>
                ))}
            </ul>
        )
    }
}
