import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Column} from '../../elements/Grid';
import {Congressman} from "../../elements/Congressman/index";
import {VoteResultPieChart} from "../../elements/VoteResultPieChart/index";
import DocumentCongressmanVotes from "../../components/DocumentCongressmanVotes";

export default class IssueDocuments extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        issue: PropTypes.number,
        documents: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            url: PropTypes.string,
            date: PropTypes.string,
            type: PropTypes.string,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            })),
            votes: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                type: PropTypes.string,
                outcome: PropTypes.string,
                yes: PropTypes.number,
                no: PropTypes.number,
                inaction: PropTypes.number,
                committee: PropTypes.string,
            })),
        })),
    };

    static defaultProps = {
        assembly: undefined,
        issue: undefined,
        documents: [],
    };

    formatVoteResults (vote) {
        const value = [];

        if (vote.yes) {
            value.push({
                vote: 'já',
                value: vote.yes,
            })
        }

        if (vote.no) {
            value.push({
                vote: 'nei',
                value: vote.no,
            })
        }

        if (vote.inaction) {
            value.push({
                vote: 'greiðir ekki atkvæði',
                value: vote.inaction,
            })
        }

        return value;
    }

    render() {
        return (
            <div>
                <Row>
                    <Column>
                        <ul>
                            {this.props.documents.map(document => (
                                <li key={document.id}>
                                    <a href={document.url} target="_blank"> {document.type}</a>
                                    <time>{document.date}</time>
                                    <ul>
                                        {document.proponents.map(congressman => (
                                            <Congressman key={`proponents-${document.id}-${congressman.id}`}
                                                         congressman={congressman}
                                                         party={congressman.party}>
                                            </Congressman>
                                        ))}
                                    </ul>
                                    <table>
                                        <thead>
                                        <tr>
                                            <td>type</td>
                                            <td>result</td>
                                            <td>outcome</td>
                                            <td>committee</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {document.votes.map(vote => (
                                                <tr key={`vote-${vote.id}`}>
                                                    <td>{vote.type}</td>
                                                    <td><VoteResultPieChart source={this.formatVoteResults(vote)} formatValue={value => ` ${value}`}/></td>
                                                    <td>{vote.outcome}</td>
                                                    <td>{vote.committee}</td>
                                                    <td>
                                                        <DocumentCongressmanVotes assembly={this.props.assembly} issue={this.props.issue} vote={vote.id} />
                                                    </td>

                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <hr />
                                </li>
                            ))}
                        </ul>
                        <h2>{this.props.issue.name}</h2>
                    </Column>
                </Row>
            </div>
        )
    }
}
