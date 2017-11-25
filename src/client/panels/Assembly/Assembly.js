import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Grid, Column, Row} from '../../elements/Grid';
import {DateAndCountChart} from "../../elements/DateAndCountChart/index";
import {PartyPieChart} from "../../elements/PartyPieChart";
import {StatusPieChart} from "../../elements/StatusPieChart";
import {SeatChart} from "../../elements/SeatChart/index";
import {ISSUE_STATUS} from '../../utils/maps';
import {Paper} from "../../elements/Paper/index";
import {Badge} from "../../elements/Badge/index";

export default class Assembly extends React.Component {
    static propTypes = {
        assembly: PropTypes.shape({
            id: PropTypes.number,
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            })
        }),
        summary: PropTypes.shape({
            parties: PropTypes.arrayOf(PropTypes.shape({
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
                time: PropTypes.number,
            })),
            bills: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                status: PropTypes.string,
            })),
            governmentBills: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                status: PropTypes.string,
            })),
            types: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                type: PropTypes.string,
                typeName: PropTypes.string,
                typeSubName: PropTypes.string,
            })),
            votes: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                date: PropTypes.string,
            })),
            speeches: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                date: PropTypes.string,
            })),
            election: PropTypes.shape({
                id: PropTypes.number,
                date: PropTypes.string,
                title: PropTypes.string,
                description: PropTypes.string,
            }),
            electionResults: PropTypes.arrayOf(PropTypes.shape({
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
                results: PropTypes.shape({
                    seats: PropTypes.number,
                    result: PropTypes.number,
                }),
            })),
        }),
    };

    static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined,
            }
        },
        summary: {
            categories: [],
            parties: [],
            bills: [],
            governmentBills: [],
            types: [],
            votes: [],
            speeches: [],
            election: {
                id: undefined,
                date: undefined,
                title: undefined,
                description: undefined,
            },
            electionResults: []
        },
    };

    render() {
        return (
            <div>
                <Row>
                    <Column>
                        <div>{this.props.summary.election && this.props.summary.election.title}</div>
                        <div>{this.props.summary.election && this.props.summary.election.date}</div>
                        <div>{this.props.summary.election && this.props.summary.election.description}</div>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Paper>
                            <Row>
                                <Column>
                                    <h2>Election results</h2>
                                    <PartyPieChart formatValue={v => ` ${v}%`} source={this.props.summary.electionResults.map(item => (
                                        {party: item.party, value: item.results.result}
                                    ))}/>
                                </Column>
                                <Column>
                                    <h2>Seats</h2>
                                    <SeatChart source={this.props.summary.electionResults.map(item => ({
                                        party: item.party,
                                        value: item.results.seats
                                    }))}/>
                                </Column>
                            </Row>
                        </Paper>
                    </Column>
                </Row>
                <Row>
                    <Column>

                            <Row>
                                <Column>
                                    <h2>Party speech time</h2>
                                    <PartyPieChart formatValue={v => ` ${Math.floor(v/60)} min`} source={this.props.summary.parties.map(item => (
                                        {party: item.party, value: item.time}
                                    ))}/>
                                </Column>
                                <Column>
                                    <table>
                                        <caption>
                                            <h2>Party speech time</h2>
                                        </caption>
                                        <thead>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>party</td>
                                            <td>time</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.summary.parties.map((obj, i) => (
                                            <tr key={`party-${obj.party.id}`}>
                                                <td>
                                                    <Badge color={obj.party.color} title={obj.party.name} variations={['sm']}/>
                                                </td>
                                                <td>{obj.party.name}</td>
                                                <td>{Math.floor(obj.time/ 60)} mínútur</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </Column>
                            </Row>

                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Paper>
                            <Row>
                                <Column>
                                    <table>
                                        <caption>
                                            <h2>Issues by type</h2>
                                        </caption>
                                        <thead>
                                        <tr>
                                            <td>count</td>
                                            <td>name</td>
                                            <td>sub name</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.summary.types.map(type => (
                                            <tr key={`type-${type.type}`}>
                                                <td>{type.count}</td>
                                                <td>{type.typeName}</td>
                                                <td>
                                                    <Link to={`/loggjafathing/${this.props.assembly.id}/thingmal?tegund=${type.type}`}>{type.typeSubName}</Link>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </Column>
                            </Row>
                            <Row>
                                <Column>
                                    <h2>Bills</h2>
                                    <StatusPieChart source={this.props.summary.bills.map(bill => ({
                                        bill: {status: bill.status},
                                        value: bill.count,
                                    }))} />
                                </Column>
                                <Column>
                                    <table>
                                        <caption>Bills</caption>
                                        <thead>
                                        <tr>
                                            <td>count</td>
                                            <td>status</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.summary.bills.map(bill => (
                                            <tr key={`bill-${bill.status}`}>
                                                <td style={{backgroundColor: `#${ISSUE_STATUS[bill.status]}`}}>{bill.count}</td>
                                                <td>{bill.status}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </Column>
                                <Column>
                                    <h2>Government Bills</h2>
                                    <StatusPieChart source={this.props.summary.governmentBills.map(bill => ({
                                        bill: {status: bill.status},
                                        value: bill.count,
                                    }))} />
                                </Column>
                                <Column>
                                    <table>
                                        <caption>Government Bills</caption>
                                        <thead>
                                        <tr>
                                            <td>count</td>
                                            <td>status</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {this.props.summary.governmentBills.map(bill => (
                                            <tr key={`bill-${bill.status}`}>
                                                <td style={{backgroundColor: `#${ISSUE_STATUS[bill.status]}`}}>{bill.count}</td>
                                                <td>{bill.status}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </Column>
                            </Row>
                        </Paper>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <Paper>
                            <Row>
                                <Column>
                                    <h2>Votes</h2>
                                    <DateAndCountChart source={this.props.summary.votes} />
                                </Column>
                                <Column>
                                    <h2>Speeches</h2>
                                    <DateAndCountChart source={this.props.summary.speeches} />
                                </Column>
                            </Row>
                        </Paper>
                    </Column>
                </Row>
            </div>
        )
    }
}
