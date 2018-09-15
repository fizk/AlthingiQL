import * as React from 'react';
import { Link } from "react-router-dom";
import { Row, Column } from "../../elements/Grid";
import Congressman from "../../elements/Congressman";
import DateAndCountChart from "../../elements/DateAndCountChart";
import * as Markdown from "react-markdown";
import { H2, H4 } from "../../elements/Headline";
import Paper from "../../elements/Paper";
import {
    Congressman as CongressmanType,
    Assembly as AssemblyType
} from '../../../../@types';

type AssemblyIssueProps = {
    issue?: {
        id?: number,
        assembly: AssemblyType,
        name?: string,
        status?: string,
        goal?: string,
        subName?: string,
        type?: string,
        typeName?: string,
        typeSubName?: string,
        question?: string,
        majorChanges?: string,
        changesInLaw?: string,
        costsAndRevenues?: string,
        deliveries?: string,
        additionalInformation?: string,
        date?: string,
        proponents: CongressmanType[],
        speakers?: {
            congressman: CongressmanType,
            value?: number
        }[],
        voteRange?: {
            count?: number,
            date?: string
        }[],
        speechRange?: {
            count?: number,
            date?: string
        }[]
    },
    progress?: {
        issue?: {
            id?: number
        },
        assembly?: {
            id?: number
        },
        committee?: {
            id?: number
            name?: string
        },
        speech?: {
            id?: string
        },
        document?: {
            id?: number
        },
        date?: string,
        title?: string,
        type?: string,
        completed?: boolean
    }[]
};

export default class AssemblyIssue extends React.Component<AssemblyIssueProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
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
        progress: []
    };
    render() {
        return (
            <Row>
                <Column>
                    <H2>Framsögumenn</H2>
                    <Paper>
                        <ul>
                            {this.props.issue.proponents.map(
                                (congressman, i) => (
                                    <li
                                        key={`congressman-${
                                            congressman.id
                                        }-${i}`}
                                    >
                                        <Congressman
                                            party={congressman.party}
                                            congressman={congressman}
                                        />
                                    </li>
                                )
                            )}
                        </ul>
                    </Paper>
                    <H2>Ræðumenn</H2>
                    <ul>
                        {this.props.issue.speakers.map((item, i) => (
                            <li key={`congressman-${item.congressman.id}-${i}`}>
                                <Congressman
                                    party={item.congressman.party}
                                    congressman={item.congressman}
                                >
                                    <H4>{item.value} mínútur</H4>
                                </Congressman>
                            </li>
                        ))}
                    </ul>
                </Column>
                <Column>
                    <Markdown source={this.props.issue.goal || ""} />
                    <Markdown source={this.props.issue.majorChanges || ""} />
                    <Markdown source={this.props.issue.changesInLaw || ""} />
                    <Markdown
                        source={this.props.issue.costsAndRevenues || ""}
                    />
                    <Markdown source={this.props.issue.deliveries || ""} />
                    <Markdown
                        source={this.props.issue.additionalInformation || ""}
                    />

                    <h4>Vote</h4>
                    <DateAndCountChart source={this.props.issue.voteRange} />

                    <h4>Speeches</h4>
                    <DateAndCountChart source={this.props.issue.speechRange} />
                    <Paper>
                        <ul>
                            {this.props.progress.map((progress, i) => (
                                <li key={`progress-${i}`}>
                                    {progress.document &&
                                        progress.document.id && (
                                            <Link
                                                to={`/loggjafarthing/${
                                                    progress.assembly.id
                                                }/thingmal/${
                                                    progress.issue.id
                                                }/thingskjol`}
                                            >
                                                {progress.title}
                                            </Link>
                                        )}
                                    {progress.speech &&
                                        progress.speech.id && (
                                            <Link
                                                to={`/loggjafarthing/${
                                                    progress.assembly.id
                                                }/thingmal/${
                                                    progress.issue.id
                                                }/raedur/${progress.speech.id}`}
                                            >
                                                umræda : {progress.title}
                                            </Link>
                                        )}
                                    {progress.committee &&
                                        progress.committee.id && (
                                            <Link
                                                to={`/loggjafarthing/${
                                                    progress.assembly.id
                                                }/thingmal/${
                                                    progress.issue.id
                                                }/raedur/${
                                                    progress.committee.id
                                                }`}
                                            >
                                                {progress.title}{" "}
                                                {progress.committee.name}
                                            </Link>
                                        )}
                                </li>
                            ))}
                        </ul>
                    </Paper>
                </Column>
            </Row>
        );
    }
}
