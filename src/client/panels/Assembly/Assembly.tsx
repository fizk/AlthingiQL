import React from 'react';
import {Link} from 'react-router-dom';
import PieChart from '../../charts/PieChart';
import Congressman from '../../elements/Congressman';
import IssueTypeSummary from '../../elements/IssueTypeSummary';
import PartySpeechSummary from '../../elements/PartySpeechSummary';
import InflationChart from '../../charts/InflationChart';
import {AssemblyNavigation} from '../../elements/AssemblyNavigation';
import AssemblyHeader from '../../components/AssemblyHeader/AssemblyHeader';
import IssueStatusPieChart from "../../charts/IssueStatusPieChart";
import Issue, {IssueGrid, IssueGridItem} from "../../elements/Issue";
import {
    Assembly as AssemblyType,
    Inflation as InflationType,
    Period,
    CongressmanValue,
    IssueValue,
    PartyTime,
    StatusCount,
    TypeCount,
    CategoryCount,
    ServerFetchStatus
} from '../../../../@types';
import './index.scss';

interface Props {
    assembly: number;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
        inflation: InflationType[];
    };
    issuesSummary: ServerFetchStatus & {
        bills: StatusCount[];
        governmentBills: StatusCount[];
        proposals: StatusCount[];
        types: TypeCount[];
        categories: CategoryCount[];
    };
    assemblySummary: ServerFetchStatus & {
        parties: PartyTime[];
        averageAge: number;
    };
    congressmenPerformance: ServerFetchStatus & {
        bills: CongressmanValue[];
        questions: CongressmanValue[];
        resolutions: CongressmanValue[];
        speeches: CongressmanValue[];
    };
    issues: ServerFetchStatus & {
        issues: IssueValue[],
    };
}

export default class Assembly extends React.Component<Props> {
    public static defaultProps = {
        assembly: undefined,
        assemblyProperties: {
            error: undefined,
            loading: false,
            assembly: {
                id: undefined,
                period: {
                    from: undefined,
                    to: undefined,
                },
                division: [],
                cabinet: {
                    title: undefined,
                    period: {from: undefined, to: undefined}
                }
            },
            inflation: [],
        },
        assemblySummary: {
            error: undefined,
            loading: false,
            parties: [],
            averageAge: 0
        },
        congressmenPerformance: {
            error: undefined,
            loading: false,
            bills: [],
            questions: [],
            resolutions: [],
            speeches: [],
        },
        issues: {
            error: undefined,
            loading: false,
            issues: [],
        },
        issuesSummary: {
            error: undefined,
            loading: false,
            bills: [],
            governmentBills: [],
            proposals: [],
            types: [],
            categories: [],
        }
    };

    public render() {
        return (
            <main className="assembly-panel">
                <section className="assembly-panel__user">search and avatar</section>
                <nav className="assembly-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                </nav>
                <header className="assembly-panel__header">
                    <AssemblyHeader assembly={this.props.assemblyProperties.assembly} loading={false} />
                    <article>
                        {this.props.issuesSummary.loading === false && !this.props.issuesSummary.error && (
                            <>
                                <h2>Stjórnarfrumvörp</h2>
                                <IssueStatusPieChart source={this.props.issuesSummary.governmentBills}/>
                                <table>
                                    <tbody>
                                        {this.props.issuesSummary.governmentBills.map((bill, i) => (
                                            <tr key={`government-bills-${i}`}>
                                                <td>{bill.count}</td>
                                                <td>{bill.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <h2>Frumvörp</h2>
                                <IssueStatusPieChart source={this.props.issuesSummary.bills}/>
                                <table>
                                    <tbody>
                                        {this.props.issuesSummary.bills.map((bill, i) => (
                                            <tr key={`bills-${i}`}>
                                                <td>{bill.count}</td>
                                                <td>{bill.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <h2>Thingsalyktunartillogur</h2>
                                <IssueStatusPieChart source={this.props.issuesSummary.proposals}/>
                                <table>
                                    <tbody>
                                        {this.props.issuesSummary.proposals.map((bill, i) => (
                                            <tr key={`proposals-${i}`}>
                                                <td>{bill.count}</td>
                                                <td>{bill.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <p>Medalaldur: {this.props.assemblySummary.averageAge} </p>
                            </>
                        )}
                    </article>
                    {this.props.assemblyProperties.inflation.length !== 0 && (
                        <InflationChart inflation={this.props.assemblyProperties.inflation} period={this.props.assemblyProperties.assembly.period as Period} />
                    )}
                </header>
                <section className="assembly-panel__issues">
                    <IssueGrid variations={['md']}>
                        {this.props.issues.issues.map(issue => (
                            <IssueGridItem type={issue.issue.type.type} key={`${issue.issue.assembly.id}${issue.issue.id}${issue.issue.type.category}`}>
                                <Link to={`/loggjafarthing/${issue.issue.assembly.id}/thingmal/${issue.issue.type.category}/${issue.issue.id}`}>
                                    <Issue issue={issue.issue}/>
                                </Link>
                            </IssueGridItem>
                        ))}
                    </IssueGrid>
                </section>
                <section className="assembly-panel_stats">
                    <article>
                        <IssueTypeSummary assembly={this.props.assemblyProperties.assembly} summary={this.props.issuesSummary.types} />
                    </article>
                    <article>
                        <table>
                            <tbody>
                                {this.props.issuesSummary.categories.map((category, i) => (
                                    <tr key={`categories-${i}`}>
                                        <td>{category.count}</td>
                                        <td>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?flokkur=${category.category.id}`}>
                                                {category.category.title}
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </article>
                    <article>
                        {this.props.assemblySummary.loading === false && !this.props.assemblySummary.error && (
                            <>
                                <h2>Ræðutímar</h2>
                                <PieChart source={this.props.assemblySummary.parties.map(party => ({
                                    value: party.time,
                                    key: party.party.name,
                                    label: party.party.name,
                                    color: `#${party.party.color}`,
                                }))}
                                          formatValue={(label, value, total) => `${label} (${Math.round(value / total * 100)}%)`}
                                />
                                <PartySpeechSummary assembly={this.props.assembly} parties={this.props.assemblySummary.parties} />
                            </>
                        )}

                    </article>
                </section>
                <section className="assembly-panel__congressmen">
                    {this.props.congressmenPerformance.loading === false && !this.props.congressmenPerformance.error && (
                        <>
                            <article>
                                <h2>Tillögur til þingsályktana</h2>
                                <ul>
                                    {this.props.congressmenPerformance.resolutions.map(data => (
                                        <li key={`congressman-resolutionaries-${data.congressman.id}`}>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${data.congressman.id}`}>
                                                <Congressman congressman={data.congressman} party={data.congressman.party}>
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            <article>
                                <h2>Frumvörp til laga</h2>
                                <ul>
                                    {this.props.congressmenPerformance.bills.map(data => (
                                        <li key={`congressman-bills-${data.congressman.id}`}>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${data.congressman.id}`}>
                                                <Congressman congressman={data.congressman} party={data.congressman.party}>
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            <article>
                                <h2>Þessi töludu mest</h2>
                                <ul>
                                    {this.props.congressmenPerformance.speeches.map(data => (
                                        <li key={`congressman-speak-${data.congressman.id}`}>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${data.congressman.id}`}>
                                                <Congressman congressman={data.congressman} party={data.congressman.party}>
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                            <article>
                                <h2>Þessi spurðu mest</h2>
                                <ul>
                                    {this.props.congressmenPerformance.questions.map(data => (
                                        <li key={`congressman-questioner-${data && data.congressman && data.congressman.id}`}>
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${data && data.congressman && data.congressman.id}`}>
                                                <Congressman congressman={data.congressman!} party={data && data.congressman && data.congressman.party}>
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        </>
                    )}

                </section>
                {/*<section>*/}
                    {/*<article>*/}
                        {/*<h2>Úrslit kosninga</h2>*/}
                        {/*<PartyPieChart formatValue={v => ` ${v}%`}*/}
                            {/*source={this.props.summary.electionResults.map(*/}
                                {/*item => ({*/}
                                    {/*party: item.party,*/}
                                    {/*value: item.results.result,*/}
                                {/*}),*/}
                            {/*)}*/}
                        {/*/>*/}
                        {/*<div>{this.props.summary.election && this.props.summary.election.title}</div>*/}
                        {/*<div>{this.props.summary.election && this.props.summary.election.date}</div>*/}
                        {/*<div>{this.props.summary.election && this.props.summary.election.description}</div>*/}
                    {/*</article>*/}
                    {/*<article>*/}
                        {/*<h2>Sætaskipan</h2>*/}
                        {/*<SeatChart source={this.props.summary.electionResults.map(item => ({*/}
                                {/*party: item.party,*/}
                                {/*value: item.results.seats,*/}
                            {/*}))}*/}
                        {/*/>*/}
                    {/*</article>*/}
                {/*</section>*/}
                {/*<Section>*/}
                    {/*<Paper>*/}
                        {/*<Row>*/}
                            {/*<Column>*/}
                                {/*<h2>Votes</h2>*/}
                                {/*<DateAndCountChart source={this.props.summary.votes}/>*/}
                            {/*</Column>*/}
                            {/*<Column>*/}
                                {/*<h2>Speeches</h2>*/}
                                {/*<DateAndCountChart source={this.props.summary.speeches}/>*/}
                            {/*</Column>*/}
                        {/*</Row>*/}
                    {/*</Paper>*/}
                {/*</Section>*/}
            </main>
        );
    }
}

