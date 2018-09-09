import * as React from 'react';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Column, Row, Grid } from "../../elements/Grid";
import { ISSUE_STATUS } from "../../utils/maps";
import DateAndCountChart from "../../elements/DateAndCountChart";
import PartyPieChart from "../../elements/PartyPieChart";
import StatusPieChart from "../../elements/StatusPieChart";
import SeatChart from "../../elements/SeatChart";
import PieChart from "../../elements/PieChart";
import Paper from "../../elements/Paper";
import Badge from "../../elements/Badge";
import Congressman from "../../elements/Congressman";
import {
    BillBadge,
    InquiryBadge,
    MeetingPostponementBadge,
    OpinionBadge,
    ParliamentaryResolutionBadge,
    ReportBadge,
    RequestForReportBadge,
    WrittenInquiryBadge
} from "../../elements/IssueBadge";
import { H2, H3 } from "../../elements/Headline";
import Section from "../../elements/Section";
import "./index.scss";

type AssemblyProps = {
    assembly?: {
        id?: number,
        period?: {
            from?: string,
            to?: string
        }
    },
    summary?: {
        parties?: {
            party?: {
                id?: number,
                name?: string,
                color?: string
            },
            time?: number
        }[],
        bills?: {
            count?: number,
            status?: string
        }[],
        governmentBills?: {
            count?: number,
            status?: string
        }[],
        types?: {
            count?: number,
            type?: string,
            typeName?: string,
            typeSubName?: string
        }[],
        votes?: {
            count?: number,
            date?: string
        }[],
        speeches?: {
            count?: number,
            date?: string
        }[],
        election?: {
            id?: number,
            date?: string,
            title?: string,
            description?: string
        },
        electionResults?: {
            party?: {
                id?: number,
                name?: string,
                color?: string
            },
            results?: {
                seats?: number,
                result?: number
            }
        }[]
    },
    speakMost?: {
        congressman?: {
            id?: number,
            name?: string,
            avatar?: {
                templateSrc?: string
            },
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        },
        value?: number
    }[],
    speakLeast?: {
        congressman?: {
            id?: number,
            name?: string,
            avatar?: {
                templateSrc?: string
            },
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        },
        value?: number
    }[],
    questioner?: {
        congressman?: {
            id?: number,
            name?: string,
            avatar?: {
                templateSrc?: string
            },
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        },
        value?: number
    }[],
    resolutionaries?: {
        congressman?: {
            id?: number,
            name?: string,
            avatar?: {
                templateSrc?: string
            },
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        },
        value?: number
    }[],
    bills?: {
        congressman?: {
            id?: number,
            name?: string,
            avatar?: {
                templateSrc?: string
            },
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        },
        value?: number
    }[],
    issues?: {
        issue?: {
            id?: number,
            assembly?: {
                id?: number
            },
            category?: string,
            name?: string,
            subName?: string,
            type?: string,
            typeName?: string,
            typeSubName?: string,
            status?: string,
            goal?: string,
            proponentsCount?: number,
            proponents?: {
                id?: number,
                name?: string,
                avatar?: {
                    templateSrc?: string
                },
                party?: {
                    id?: number,
                    name?: string,
                    color?: string
                }
            }[]
        },
        value?: number
    }[]
};

export default class Assembly extends React.Component<AssemblyProps, {}> {
    static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined
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
                description: undefined
            },
            electionResults: []
        },
        speakMost: [],
        speakLeast: [],
        questioner: [],
        resolutionaries: [],
        bills: [],
        issues: []
    };
    reduceBills(bills) {
        return bills.reduce((accumulator, currentValue) => {
            if (!accumulator.hasOwnProperty("unapproved")) {
                accumulator.unapproved = 0;
            }
            if (currentValue.status === "Samþykkt sem lög frá Alþingi") {
                accumulator.approved = currentValue.count;
            } else {
                accumulator.unapproved =
                    accumulator.unapproved + currentValue.count;
            }
            return accumulator;
        }, {});
    }
    billsPerformance(value) {
        return Math.round(
            (value.approved / (value.unapproved + value.approved)) * 100
        );
    }
    render() {
        return (
            <Fragment>
                <Section>
                    <Paper>
                        <Grid>
                            <Row>
                                <Column sm={2}>
                                    <h2>{this.props.assembly.id}</h2>
                                    <time>
                                        {this.props.assembly.period.from}
                                    </time>
                                    <time>{this.props.assembly.period.to}</time>
                                </Column>
                                <Column sm={10}>
                                    <Row>
                                        <Column>
                                            <div>
                                                <h2>Frumvörp</h2>
                                                <PieChart
                                                    source={Object.entries(
                                                        this.reduceBills(this.props.summary.bills)
                                                    ).map(item => ({
                                                        value: Number(item[1]),
                                                        key: String(item[0]),
                                                    }))}
                                                />

                                                <h2>
                                                    {this.billsPerformance(
                                                        this.reduceBills(
                                                            this.props.summary
                                                                .bills
                                                        )
                                                    )}%
                                                </h2>
                                                <h4>Frumvörp samþykkt</h4>
                                            </div>
                                        </Column>
                                        <Column>
                                            <div>
                                                <h2>Stjórnarfrumvörp</h2>
                                                <PieChart
                                                    source={Object.entries(
                                                        this.reduceBills(this.props.summary.governmentBills)
                                                    ).map(item => ({
                                                        value: Number(item[1]),
                                                        key: String(item[0])
                                                    }))}
                                                />
                                                <h2>
                                                    {this.billsPerformance(
                                                        this.reduceBills(
                                                            this.props.summary
                                                                .governmentBills
                                                        )
                                                    )}%
                                                </h2>
                                                <h4>
                                                    Stjórnarfrumvörp samþykkt
                                                </h4>
                                            </div>
                                        </Column>
                                    </Row>
                                    <Row>
                                        <Column>
                                            <table>
                                                <caption>
                                                    <h2>Issues by type</h2>
                                                </caption>
                                                <thead>
                                                    <tr>
                                                        <td>Fjöldi</td>
                                                        <td>Titill</td>
                                                        <td>Undirtitill</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.summary.types.map(
                                                        type => (
                                                            <tr
                                                                key={`type-${
                                                                    type.type
                                                                }`}
                                                            >
                                                                <td>
                                                                    {type.count}
                                                                </td>
                                                                <td>
                                                                    {
                                                                        type.typeName
                                                                    }
                                                                </td>
                                                                <td>
                                                                    <Link
                                                                        to={`/loggjafarthing/${
                                                                            this
                                                                                .props
                                                                                .assembly
                                                                                .id
                                                                        }/thingmal?tegund=${
                                                                            type.type
                                                                        }`}
                                                                    >
                                                                        {
                                                                            type.typeSubName
                                                                        }
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </Column>
                                    </Row>
                                </Column>
                            </Row>
                        </Grid>
                    </Paper>
                </Section>
                <Section>
                    <Grid>
                        <Row>
                            <Column sm={4}>
                                <Row>
                                    <Column>
                                        <H2>Ræðutímar þingflokka</H2>
                                        <PartyPieChart
                                            formatValue={v =>
                                                ` ${Math.floor(v / 60)} min`
                                            }
                                            source={this.props.summary.parties.map(
                                                item => ({
                                                    party: item.party,
                                                    value: item.time
                                                })
                                            )}
                                        />
                                    </Column>
                                </Row>
                                <Row>
                                    <Column>
                                        <table>
                                            <caption>
                                                Ræðutími þingflokka i mínútum
                                            </caption>
                                            <thead>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td>party</td>
                                                    <td>time</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.summary.parties.map(
                                                    (obj, i) => (
                                                        <tr
                                                            key={`party-${
                                                                obj.party.id
                                                            }`}
                                                        >
                                                            <td>
                                                                <Badge
                                                                    color={
                                                                        obj
                                                                            .party
                                                                            .color
                                                                    }
                                                                    title={
                                                                        obj
                                                                            .party
                                                                            .name
                                                                    }
                                                                    variations={[
                                                                        "sm"
                                                                    ]}
                                                                />
                                                            </td>
                                                            <td>
                                                                {obj.party.name}
                                                            </td>
                                                            <td>
                                                                {Math.floor(
                                                                    obj.time /
                                                                        60
                                                                )}{" "}
                                                                mínútur
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </Column>
                                </Row>
                            </Column>
                            <Column sm={8}>
                                <H2>Þessi mál voru mest rædd</H2>
                                <ul className="assembly-issues-panel__list">
                                    {this.props.issues.map(
                                        issue =>
                                            ({
                                                a: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <ParliamentaryResolutionBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </ParliamentaryResolutionBadge>
                                                    </li>
                                                ),
                                                b: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <RequestForReportBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </RequestForReportBadge>
                                                    </li>
                                                ),
                                                f: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <MeetingPostponementBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </MeetingPostponementBadge>
                                                    </li>
                                                ),
                                                l: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--lg"
                                                    >
                                                        <BillBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </BillBadge>
                                                    </li>
                                                ),
                                                m: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <InquiryBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </InquiryBadge>
                                                    </li>
                                                ),
                                                n: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <OpinionBadge
                                                            issue={issue.issue}
                                                        >
                                                            {issue.value}
                                                        </OpinionBadge>
                                                    </li>
                                                ),
                                                q: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <WrittenInquiryBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </WrittenInquiryBadge>
                                                    </li>
                                                ),
                                                s: (
                                                    <li
                                                        key={`issue-${
                                                            issue.issue.id
                                                        }`}
                                                        className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                                    >
                                                        <ReportBadge
                                                            issue={issue.issue}
                                                            congressman={issue.issue.proponents.reduce(
                                                                (a, b) => b,
                                                                undefined
                                                            )}
                                                        >
                                                            {issue.value}
                                                        </ReportBadge>
                                                    </li>
                                                )
                                            }[issue.issue.type])
                                    )}
                                </ul>
                            </Column>
                        </Row>
                    </Grid>
                </Section>

                <Section>
                    <Grid>
                        <Row>
                            <Column>
                                <Row>
                                    <Column>annad stuff</Column>
                                    <Column>
                                        <H2>Þessi töludu mest</H2>
                                        <ul>
                                            {this.props.speakMost.map(data => (
                                                <li
                                                    key={`congressman-speak-${
                                                        data.congressman.id
                                                    }`}
                                                >
                                                    <Link
                                                        to={`/loggjafarthing/${
                                                            this.props.assembly
                                                                .id
                                                        }/thingmenn/${
                                                            data.congressman.id
                                                        }`}
                                                    >
                                                        <Congressman
                                                            congressman={
                                                                data.congressman
                                                            }
                                                            party={
                                                                data.congressman
                                                                    .party
                                                            }
                                                        >
                                                            {data.value}
                                                        </Congressman>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </Column>
                                    <Column>
                                        <H2>Þessi töludu minnst</H2>
                                        <ul>
                                            {this.props.speakLeast.map(data => (
                                                <li
                                                    key={`congressman-speak-${
                                                        data.congressman.id
                                                    }`}
                                                >
                                                    <Link
                                                        to={`/loggjafarthing/${
                                                            this.props.assembly
                                                                .id
                                                        }/thingmenn/${
                                                            data.congressman.id
                                                        }`}
                                                    >
                                                        <Congressman
                                                            congressman={
                                                                data.congressman
                                                            }
                                                            party={
                                                                data.congressman
                                                                    .party
                                                            }
                                                        >
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
                    </Grid>
                </Section>

                <Section>
                    <Grid>
                        <Row>
                            <Column>
                                <H2>Þessi spurðu mest</H2>
                                <ul>
                                    {this.props.questioner.map(data => (
                                        <li
                                            key={`congressman-questioner-${
                                                data.congressman.id
                                            }`}
                                        >
                                            <Link
                                                to={`/loggjafarthing/${
                                                    this.props.assembly.id
                                                }/thingmenn/${
                                                    data.congressman.id
                                                }`}
                                            >
                                                <Congressman
                                                    congressman={
                                                        data.congressman
                                                    }
                                                    party={
                                                        data.congressman.party
                                                    }
                                                >
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Column>
                            <Column>
                                <H2>
                                    Þessi lögdu fram flestar tillögur til
                                    þingsályktana
                                </H2>
                                <ul>
                                    {this.props.resolutionaries.map(data => (
                                        <li
                                            key={`congressman-resolutionaries-${
                                                data.congressman.id
                                            }`}
                                        >
                                            <Link
                                                to={`/loggjafarthing/${
                                                    this.props.assembly.id
                                                }/thingmenn/${
                                                    data.congressman.id
                                                }`}
                                            >
                                                <Congressman
                                                    congressman={
                                                        data.congressman
                                                    }
                                                    party={
                                                        data.congressman.party
                                                    }
                                                >
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Column>
                            <Column>
                                <H2>
                                    Þessi lögdu fram flest frumvörp til laga
                                </H2>
                                <ul>
                                    {this.props.bills.map(data => (
                                        <li
                                            key={`congressman-bills-${
                                                data.congressman.id
                                            }`}
                                        >
                                            <Link
                                                to={`/loggjafarthing/${
                                                    this.props.assembly.id
                                                }/thingmenn/${
                                                    data.congressman.id
                                                }`}
                                            >
                                                <Congressman
                                                    congressman={
                                                        data.congressman
                                                    }
                                                    party={
                                                        data.congressman.party
                                                    }
                                                >
                                                    {data.value}
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Column>
                        </Row>
                    </Grid>
                </Section>

                <Section>
                    <Grid>
                        <Row>
                            <Column>
                                <div>
                                    {this.props.summary.election &&
                                        this.props.summary.election.title}
                                </div>
                                <div>
                                    {this.props.summary.election &&
                                        this.props.summary.election.date}
                                </div>
                                <div>
                                    {this.props.summary.election &&
                                        this.props.summary.election.description}
                                </div>
                            </Column>
                            <Column>
                                <Row>
                                    <Column>
                                        <H2>Úrslit kosninga</H2>
                                        <PartyPieChart
                                            formatValue={v => ` ${v}%`}
                                            source={this.props.summary.electionResults.map(
                                                item => ({
                                                    party: item.party,
                                                    value: item.results.result
                                                })
                                            )}
                                        />
                                    </Column>
                                    <Row />
                                    <Column>
                                        <H2>Sætaskipan</H2>
                                        <SeatChart
                                            source={this.props.summary.electionResults.map(
                                                item => ({
                                                    party: item.party,
                                                    value: item.results.seats
                                                })
                                            )}
                                        />
                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </Grid>
                </Section>

                <Section>
                    <Grid>
                        <Row>
                            <Column>
                                <Paper>
                                    <Row>
                                        <Column>
                                            <h2>Votes</h2>
                                            <DateAndCountChart
                                                source={
                                                    this.props.summary.votes
                                                }
                                            />
                                        </Column>
                                        <Column>
                                            <h2>Speeches</h2>
                                            <DateAndCountChart
                                                source={
                                                    this.props.summary.speeches
                                                }
                                            />
                                        </Column>
                                    </Row>
                                </Paper>
                            </Column>
                        </Row>
                    </Grid>
                </Section>
            </Fragment>
        );
    }
}
