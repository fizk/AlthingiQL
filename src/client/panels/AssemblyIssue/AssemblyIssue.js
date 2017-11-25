import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Column} from '../../elements/Grid';
import {Congressman} from '../../elements/Congressman';
import {DateAndCountChart} from '../../elements/DateAndCountChart';
import Markdown from 'react-markdown';
import {H2, H4} from '../../elements/Headline';
import {Paper} from "../../elements/Paper";

export default class AssemblyIssue extends React.Component {
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            status: PropTypes.string,
            goal: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
            question: PropTypes.string,
            majorChanges: PropTypes.string,
            changesInLaw: PropTypes.string,
            costsAndRevenues: PropTypes.string,
            deliveries: PropTypes.string,
            additionalInformation: PropTypes.string,
            date: PropTypes.string,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            })),
            speakers: PropTypes.arrayOf(PropTypes.shape({
                congressman: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    party: PropTypes.shape({
                        id: PropTypes.number,
                        name: PropTypes.string,
                        color: PropTypes.string,
                    })
                }),
                duration: PropTypes.number,
            })),
            voteRange: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                date: PropTypes.string,
            })),
            speechRange: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                date: PropTypes.string,
            })),
        }),
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            name: undefined,
            status: undefined,
            goal: undefined,
            subName: undefined,
            type: undefined,
            typeName: undefined,
            typeSubName: undefined,
            question: undefined,
            majorChanges: undefined,
            changesInLaw: undefined,
            costsAndRevenues: undefined,
            deliveries: undefined,
            additionalInformation: undefined,
            date: undefined,
            proponents: [],
            speakers: [],
            voteRange: [],
            speechRange: []
        },
    };

    render() {
        return (
            <div>
                <Row>
                    <Column>
                        <H2>Framsögumenn</H2>
                        <Paper>
                            <ul>
                                {this.props.issue.proponents.map((congressman, i) => (
                                    <li key={`congressman-${congressman.id}-${i}`}>
                                        <Congressman party={congressman.party}
                                                     congressman={congressman} />
                                    </li>
                                ))}
                            </ul>
                        </Paper>
                        <H2>Ræðumenn</H2>
                        <ul>
                            {this.props.issue.speakers.map((item, i) => (
                                <li key={`congressman-${item.congressman.id}-${i}`}>
                                    <Congressman party={item.congressman.party}
                                                 congressman={item.congressman}>
                                        <H4>{item.duration} mínútur</H4>
                                    </Congressman>
                                </li>
                            ))}
                        </ul>
                    </Column>
                    <Column>
                        <Markdown source={this.props.issue.goal || ''} />
                        <Markdown source={this.props.issue.majorChanges || ''} />
                        <Markdown source={this.props.issue.changesInLaw || ''} />
                        <Markdown source={this.props.issue.costsAndRevenues || ''} />
                        <Markdown source={this.props.issue.deliveries || ''} />
                        <Markdown source={this.props.issue.additionalInformation || ''} />

                        <h4>Vote</h4>
                        <DateAndCountChart source={this.props.issue.voteRange} />

                        <h4>Speeches</h4>
                        <DateAndCountChart source={this.props.issue.speechRange} />

                    </Column>
                </Row>
            </div>
        )
    }
}
