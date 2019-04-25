/* tslint:disable:max-line-length */
import * as React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Column, Row} from '../../elements/Grid';
import DateAndCountChart from '../../elements/DateAndCountChart';
import PartyPieChart from '../../elements/PartyPieChart';
import SeatChart from '../../elements/SeatChart';
import PieChart from '../../elements/PieChart';
import Paper from '../../elements/Paper';
import Congressman from '../../elements/Congressman';
import {H2} from '../../elements/Headline';
import Section from '../../elements/Section';
import IssueTypeSummary from '../../elements/IssueTypeSummary';
import PartySpeechSummary from '../../elements/PartySpeechSummary';
import InflationChart from '../../elements/InflationChart';
import {billsPerformance, reduceBillsByStatus, mapBillStatusToKey} from '../../utils/bills';
import {
    BillBadge,
    InquiryBadge,
    MeetingPostponementBadge,
    OpinionBadge,
    ParliamentaryResolutionBadge,
    ReportBadge,
    RequestForReportBadge,
    WrittenInquiryBadge,
} from '../../elements/IssueBadge';
import {
    Assembly as AssemblyType,
    Congressman as CongressmanType,
    Issue as IssueType,
    AssemblySummary as AssemblySummaryType,
    Inflation as InflationType,
} from '../../../../@types';
import './index.scss';

interface Props {
    assembly: AssemblyType;
    inflation: InflationType[];
    summary: AssemblySummaryType;
    speakMost: Array<{
        congressman: CongressmanType;
        value: number;
    }>;
    speakLeast: Array<{
        congressman: CongressmanType;
        value: number;
    }>;
    questioner: Array<{
        congressman?: CongressmanType;
        value: number;
    }>;
    resolutionaries: Array<{
        congressman: CongressmanType;
        value: number;
    }>;
    bills: Array<{
        congressman: CongressmanType;
        value: number;
    }>;
    issues?: Array<{
        issue?: IssueType;
        value?: number;
    }>;
}

export default class Assembly extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined,
            },
        },
        inflation: [],
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
            electionResults: [],
        },
        speakMost: [],
        speakLeast: [],
        questioner: [],
        resolutionaries: [],
        bills: [],
        issues: [],
    };

    public render() {
        return (
            <Fragment>
                {this.props.inflation.length !== 0 && (
                    <div style={{maxWidth: 1024, margin: 'auto'}}>
                        <InflationChart inflation={this.props.inflation} period={this.props.assembly.period} />
                    </div>
                )}
                <section className="assembly-page-grid">
                    <article className="assembly-page-grid__header">
                        <Paper>
                            <Row>
                                <Column>
                                    <div>
                                        <h2>Frumvörp</h2>
                                        <PieChart source={Object.entries(reduceBillsByStatus(this.props.summary.bills)).map(([key, value]) => ({
                                                value: Number(value),
                                                key: String(key),
                                            }))}
                                        />
                                        <h2>
                                            {billsPerformance(reduceBillsByStatus(this.props.summary.bills))}%
                                        </h2>
                                        <h4>Frumvörp samþykkt</h4>
                                    </div>
                                </Column>
                                <Column>
                                    <h2>Staða frumvarpa</h2>
                                    <PieChart formatValue={(label, value, total) => `${label} (${Math.round(value / total * 100)}%)`}
                                              source={this.props.summary.bills.map(mapBillStatusToKey).map(bill => ({
                                                  value: Number(bill.count),
                                                  key: String(bill.key),
                                                  label: bill.label,
                                              }))}
                                    />
                                </Column>
                                <Column>
                                    <div>
                                        <h2>Stjórnarfrumvörp</h2>
                                        <PieChart source={Object.entries(reduceBillsByStatus(this.props.summary.governmentBills)).map(([key, value]) => ({
                                                value: Number(value),
                                                key: String(key),
                                            }))}
                                        />
                                        <h2>
                                            {billsPerformance(reduceBillsByStatus(this.props.summary.governmentBills))}%
                                        </h2>
                                        <h4>
                                            Stjórnarfrumvörp samþykkt
                                        </h4>
                                    </div>
                                </Column>

                                <Column>
                                    <p>Medalaldur </p>
                                    <p>kynjahlutfall </p>
                                </Column>
                            </Row>
                        </Paper>
                    </article>
                    <article className="assembly-page-grid__popular">
                        <ul className="assembly-issues-panel__list">
                            {this.props.issues.map(issue => ({
                                a: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <ParliamentaryResolutionBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </ParliamentaryResolutionBadge>
                                    </li>
                                ),
                                b: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <RequestForReportBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </RequestForReportBadge>
                                    </li>
                                ),
                                f: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <MeetingPostponementBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </MeetingPostponementBadge>
                                    </li>
                                ),
                                l: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--lg">
                                        <BillBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </BillBadge>
                                    </li>
                                ),
                                m: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <InquiryBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </InquiryBadge>
                                    </li>
                                ),
                                n: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <OpinionBadge issue={issue.issue}>
                                            {issue.value}
                                        </OpinionBadge>
                                    </li>
                                ),
                                q: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <WrittenInquiryBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </WrittenInquiryBadge>
                                    </li>
                                ),
                                s: (
                                    <li key={`issue-${issue.issue.id}`}
                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm">
                                        <ReportBadge issue={issue.issue}
                                            congressman={issue.issue.proponents.reduce((a, b) => b, undefined)}>
                                            {issue.value}
                                        </ReportBadge>
                                    </li>
                                ),
                            }[issue.issue.type]),
                            )}
                        </ul>
                    </article>
                    <article className="assembly-page-grid__types">
                        <IssueTypeSummary assembly={this.props.assembly} summary={this.props.summary} />
                    </article>
                    <article className="assembly-page-grid__speeches">
                        <H2>Ræðutímar</H2>
                        <PieChart source={this.props.summary.parties.map(party => ({
                                value: party.time,
                                key: party.party.name,
                                label: party.party.name,
                                color: `#${party.party.color}`,
                            }))}
                            formatValue={(label, value, total) => `${label} (${Math.round(value / total * 100)}%)`}
                        />
                        <PartySpeechSummary parties={this.props.summary.parties} />
                    </article>
                    <article className="assembly-page-grid__talk-max">
                        <H2>Þessi töludu mest</H2>
                        <ul>
                            {this.props.speakMost.map(data => (
                                <li key={`congressman-speak-${data.congressman.id}`}>
                                    <Link to={`/loggjafarthing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="assembly-page-grid__talk-min">
                        <H2>Þessi töludu minnst</H2>
                        <ul>
                            {this.props.speakLeast.map(data => (
                                <li key={`congressman-speak-${data.congressman.id}`}>
                                    <Link to={`/loggjafarthing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="assembly-page-grid__questions">
                        <H2>Þessi spurðu mest</H2>
                        <ul>
                            {this.props.questioner.map(data => (
                                <li key={`congressman-questioner-${data.congressman.id}`}>
                                    <Link to={`/loggjafarthing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="assembly-page-grid__resolution">
                        <H2>Tillögur til þingsályktana</H2>
                        <ul>
                            {this.props.resolutionaries.map(data => (
                                <li key={`congressman-resolutionaries-${data.congressman.id}`}>
                                    <Link to={`/loggjafarthing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="assembly-page-grid__law">
                        <H2>Frumvörp til laga</H2>
                        <ul>
                            {this.props.bills.map(data => (
                                <li key={`congressman-bills-${data.congressman.id}`}>
                                    <Link to={`/loggjafarthing/${this.props.assembly.id}/thingmenn/${data.congressman.id}`}>
                                        <Congressman congressman={data.congressman} party={data.congressman.party}>
                                            {data.value}
                                        </Congressman>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className="assembly-page-grid__election">
                        <H2>Úrslit kosninga</H2>
                        <PartyPieChart formatValue={v => ` ${v}%`}
                            source={this.props.summary.electionResults.map(
                                item => ({
                                    party: item.party,
                                    value: item.results.result,
                                }),
                            )}
                        />
                        <div>{this.props.summary.election && this.props.summary.election.title}</div>
                        <div>{this.props.summary.election && this.props.summary.election.date}</div>
                        <div>{this.props.summary.election && this.props.summary.election.description}</div>
                    </article>
                    <article className="assembly-page-grid__seating">
                        <H2>Sætaskipan</H2>
                        <SeatChart source={this.props.summary.electionResults.map(item => ({
                                party: item.party,
                                value: item.results.seats,
                            }))}
                        />
                    </article>
                </section>
                <Section>
                    <Paper>
                        <Row>
                            <Column>
                                <h2>Votes</h2>
                                <DateAndCountChart source={this.props.summary.votes}/>
                            </Column>
                            <Column>
                                <h2>Speeches</h2>
                                <DateAndCountChart source={this.props.summary.speeches}/>
                            </Column>
                        </Row>
                    </Paper>
                </Section>
            </Fragment>
        );
    }
}
