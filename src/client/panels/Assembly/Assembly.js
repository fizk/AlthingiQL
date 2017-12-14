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
import {Congressman} from "../../elements/Congressman/index";
import {IssueBadge} from "../../elements/IssueBadge/index";

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
        speakMost: PropTypes.arrayOf(PropTypes.shape({
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),
            value: PropTypes.number,
        })),
        speakLeast: PropTypes.arrayOf(PropTypes.shape({
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),
            value: PropTypes.number,
        })),
        questioner: PropTypes.arrayOf(PropTypes.shape({
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),
            value: PropTypes.number,
        })),
        resolutionaries: PropTypes.arrayOf(PropTypes.shape({
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),
            value: PropTypes.number,
        })),
        bills: PropTypes.arrayOf(PropTypes.shape({
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),
            value: PropTypes.number,
        })),
        issues: PropTypes.arrayOf(PropTypes.shape({
            issue: PropTypes.shape({
                id: PropTypes.number,
                assembly: PropTypes.shape({id: PropTypes.number}),
                category: PropTypes.string,
                name: PropTypes.string,
                subName: PropTypes.string,
                type: PropTypes.string,
                typeName: PropTypes.string,
                typeSubName: PropTypes.string,
                status: PropTypes.string,
                goal: PropTypes.string,
                proponentsCount: PropTypes.number,
                proponents: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    party: PropTypes.shape({
                        id: PropTypes.number,
                        name: PropTypes.string,
                        color: PropTypes.string
                    })
                }))
            }),
            value: PropTypes.number
        })),
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
        speakMost: [],
        speakLeast: [],
        questioner: [],
        resolutionaries: [],
        bills: [],
        issues: [],
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
                            <Row>
                                <Column>
                                    Tessi toludu mest
                                    <ul>
                                        {this.props.speakMost.map(data => (
                                            <li key={`congressman-speak-${data.congressman.id}`}>
                                                <Link to={`/loggjafathing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                                    <Congressman congressman={data.congressman} party={data.congressman.party}>
                                                        {data.value}
                                                    </Congressman>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Column>
                                <Column>
                                    Tessi toludu minnst
                                    <ul>
                                        {this.props.speakLeast.map(data => (
                                            <li key={`congressman-speak-${data.congressman.id}`}>
                                                <Link to={`/loggjafathing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                                    <Congressman congressman={data.congressman} party={data.congressman.party}>
                                                        {data.value}
                                                    </Congressman>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Column>
                            </Row>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        Tessi spurdu mest
                        <ul>
                            {this.props.questioner.map(data => (
                                <li key={`congressman-questioner-${data.congressman.id}`}>
                                    <Link to={`/loggjafathing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Column>
                    <Column>
                        Tessi logdu fram flestar Tillögur til þingsályktana.
                        <ul>
                            {this.props.resolutionaries.map(data => (
                                <li key={`congressman-resolutionaries-${data.congressman.id}`}>
                                    <Link to={`/loggjafathing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Column>
                    <Column>
                        Tessi logdu fram flest Frumvarp til laga
                        <ul>
                            {this.props.bills.map(data => (
                                <li key={`congressman-bills-${data.congressman.id}`}>
                                    <Link to={`/loggjafathing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        Tessi mal voru mest rædd.
                        <ul className="issue-badge-grid">
                            {this.props.issues.map(issue => (
                                <li key={`issue-${issue.issue.id}`} className="issue-badge-grid__item">
                                    <IssueBadge issue={issue.issue} congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                        {parseInt(issue.value / 60)} minutur
                                    </IssueBadge>
                                </li>
                            ))}
                        </ul>
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
