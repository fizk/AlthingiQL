import React from 'react';
import {Link} from "react-router-dom";
import {Aside, Main} from "../../layouts/Container";
import {
    Assembly,
    CategoryCount, CongressmanValue,
    Inflation, IssueValue, PartyTime,
    ServerFetchStatus,
    StatusCount,
    TypeCount
} from "../../../../../@types";
import Congressman from '../../components/Congressman';

interface Props {
    assembly: number;
    assemblies: ServerFetchStatus & {
        assemblies: Assembly[];
    };
    issueStatistics: ServerFetchStatus & {
        bills: StatusCount[];
        governmentBills: StatusCount[];
        proposals: StatusCount[];
        types: TypeCount[];
        categories: CategoryCount[];
    };
    inflation: ServerFetchStatus & {
        inflation: Inflation[];
    };
    congressmenPerformance: ServerFetchStatus & {
        bills: CongressmanValue[];
        questions: CongressmanValue[];
        resolutions: CongressmanValue[];
        speeches: CongressmanValue[];
    };
    speechTimes: ServerFetchStatus & {
        parties: PartyTime[];
    };
    issueTimes: ServerFetchStatus & {
        issues: IssueValue[];
    };
}

export default class AssemblySummaryPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Main>
                    {!this.props.issueStatistics.error && this.props.issueStatistics.loading === false && (
                        <>
                            <h3>Government Bills</h3>
                            <table>
                                <tbody>
                                {this.props.issueStatistics.governmentBills.map((bill, i) => (
                                    <tr key={i}>
                                        <td>{bill.count}</td>
                                        <td>{bill.status}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <h3>Bills</h3>
                            <table>
                                <tbody>
                                {this.props.issueStatistics.bills.map((bill, i) => (
                                    <tr key={i}>
                                        <td>{bill.count}</td>
                                        <td>{bill.status}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <h3>Proposals</h3>
                            <table>
                                <tbody>
                                {this.props.issueStatistics.proposals.map((proposals, i) => (
                                    <tr key={i}>
                                        <td>{proposals.count}</td>
                                        <td>{proposals.status}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <h3>types</h3>
                            <table>
                                <tbody>
                                {this.props.issueStatistics.types.map((types, i) => (
                                    <tr key={i}>
                                        <td>{types.count}</td>
                                        <td>{types.type.type}</td>
                                        <td>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?tegund=${types.type.type}`}>
                                                {types.type.typeSubName || types.type.typeName}
                                            </Link>
                                        </td>
                                        <td>{}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <h3>categories</h3>
                            <table>
                                <tbody>
                                {this.props.issueStatistics.categories.map(category => (
                                    <tr key={category.category.id}>
                                        <td>{category.count}</td>
                                        <td>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?fmalalokkur=${category.category.id}`}>{category.category.title}</Link>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </>
                    )}
                    {!this.props.issueStatistics.error && this.props.issueStatistics.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.issueStatistics.error && (
                        <div>Error...</div>
                    )}

                    {!this.props.inflation.error && this.props.inflation.loading === false && (
                        <>
                            <h3>Inflation</h3>
                            <table>
                                <thead>
                                {this.props.inflation.inflation.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.date}</td>
                                        <td>{item.value}</td>
                                    </tr>
                                ))}
                                </thead>
                            </table>
                        </>
                    )}
                    {!this.props.inflation.error && this.props.inflation.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.inflation.error && (
                        <div>Error...</div>
                    )}

                    {!this.props.congressmenPerformance.error && this.props.congressmenPerformance.loading === false && (
                        <>
                            <h3>Congressman performance | Bills</h3>
                            <ul>
                                {this.props.congressmenPerformance.bills.map(congressman => (
                                    <li key={congressman.congressman.id}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.congressman.id}`}>
                                            <Congressman congressman={congressman.congressman} party={congressman.congressman.party} constituency={congressman.congressman.constituency} >
                                                {congressman.value}
                                            </Congressman>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <h3>Congressman performance | Questions</h3>
                            <ul>
                                {this.props.congressmenPerformance.questions.map(congressman => (
                                    <li key={congressman.congressman.id}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.congressman.id}`}>
                                            <Congressman congressman={congressman.congressman} party={congressman.congressman.party} constituency={congressman.congressman.constituency} >
                                                {congressman.value}
                                            </Congressman>
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                            <h3>Congressman performance | Resolutions</h3>
                            <ul>
                                {this.props.congressmenPerformance.resolutions.map(congressman => (
                                    <li key={congressman.congressman.id}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.congressman.id}`}>
                                            <Congressman congressman={congressman.congressman} party={congressman.congressman.party} constituency={congressman.congressman.constituency} >
                                                {congressman.value}
                                            </Congressman>
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                            <h3>Congressman performance | Speeches</h3>
                            <ul>
                                {this.props.congressmenPerformance.speeches.map(congressman => (
                                    <li key={congressman.congressman.id}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.congressman.id}`}>
                                            <Congressman congressman={congressman.congressman} party={congressman.congressman.party} constituency={congressman.congressman.constituency} >
                                                {congressman.value}
                                            </Congressman>
                                        </Link>
                                    </li>

                                ))}
                            </ul>
                        </>
                    )}
                    {!this.props.congressmenPerformance.error && this.props.congressmenPerformance.loading == true && (
                        <div>Loading...</div>
                    )}
                    {this.props.congressmenPerformance.error && (
                        <div>Error...</div>
                    )}

                    {!this.props.speechTimes.error && this.props.speechTimes.loading === false && (
                        <>
                            <h3>Party times</h3>
                            <ul>
                              {this.props.speechTimes.parties.map(party => (
                                  <li key={party.party.id}>
                                      {party.time} |
                                      <Link to={`/loggjafarthing/${this.props.assembly}/thingflokkar/${party.party.id}`}>{party.party.name}</Link>
                                  </li>
                              ))}
                            </ul>
                        </>
                    )}
                    {!this.props.speechTimes.error && this.props.speechTimes.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.speechTimes.error && (
                        <div>Error...</div>
                    )}

                    {!this.props.issueTimes.error && this.props.issueTimes.loading === false && (
                        <>
                            <h3>Issues speech time</h3>
                            <ul>
                                {this.props.issueTimes.issues.map(issue => (
                                    <li key={issue.issue.id}>
                                        {issue.value}
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmal/${issue.issue.type.category}/${issue.issue.id}`}>{issue.issue.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {!this.props.issueTimes.error && this.props.issueTimes.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.issueTimes.error && (
                        <div>Error...</div>
                    )}
                </Main>

                <Aside>
                    {!this.props.assemblies.error && this.props.assemblies.loading === false && (
                        <>
                            <h3>Assemblies</h3>
                            <ul>
                                {this.props.assemblies.assemblies.map(assembly => (
                                    <li key={assembly.id}>
                                        <Link to={`/loggjafarthing/${assembly.id}`}>
                                            {assembly.id} Loggjafarthing
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {!this.props.assemblies.error && this.props.assemblies.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.assemblies.error && (
                        <div>Error...</div>
                    )}
                </Aside>
            </>
        )
    }
}
