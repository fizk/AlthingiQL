import * as React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Column, Row} from '../../elements/Grid';
import Congressman from '../../elements/Congressman';
import {H2} from '../../elements/Headline';
import HorizontalChart from '../../elements/HorizontalChart';
import SessionChart from '../../elements/SessionChart';
import VoteResultPieChart from '../../elements/VoteResultPieChart';
import {
    Person as PersonType,
    Session as SessionType,
    Issue as IssueType,
    IssueA,
    VoteSummary as VoteSummaryType, IssueCount, CategorySpeechTime,
} from '../../../../@types';

interface Props {
    assembly: number;
    congressman: number;
    person?: PersonType;
    sessions?: SessionType[];
    votes?: VoteSummaryType[];
    promotedIssues?: IssueType[];
    issueCount?: IssueCount[];
    categorySpeechTimes?: CategorySpeechTime[];
}

export default class AssemblyCongressman extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        congressman: undefined,
        person: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined,
            },
        },
        sessions: [],
        votes: [],
        promotedIssues: [],
        issueCount: [],
        categorySpeechTimes: [],
    };

    private chartPersentage(data: VoteSummaryType[]) {
        const yesNo = data.filter(
            item => item.vote === 'já' || item.vote === 'nei',
        );
        const impartial = data.filter(
            item => item.vote === 'greiðir ekki atkvæði',
        );
        const notPresent = data.filter(
            item =>
                item.vote === 'fjarverandi' ||
                item.vote === 'f: óþekktur kóði' ||
                item.vote === 'boðaði fjarvist',
        );
        return [
            {
                vote: 'tók afstöðu',
                value: yesNo.reduce((a, b) => a + b.count, 0),
            },
            {
                vote: 'greiðir ekki atkvæði',
                value: impartial.reduce((a, b) => a + b.count, 0),
            },
            {
                vote: 'fjarverandi',
                value: notPresent.reduce((a, b) => a + b.count, 0),
            },
        ];
    }

    public render() {
        return (
            <Fragment>
                <Row>
                    <Column>
                        <Congressman congressman={this.props.person!} />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        {(this.props.sessions || []).map(session => session.constituency.name)
                            .reduce((total: any[], item: string) => {
                                if (total.indexOf(item) < 0) {
                                    total.push(item);
                                }
                                return total;
                            }, [])
                            .join(', ')}
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <SessionChart source={this.props.sessions || []} />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <VoteResultPieChart
                            source={(this.props.votes || []).map(vote => ({
                                value: vote.count,
                                vote: vote.vote,
                            }))}
                        />
                    </Column>
                    <Column>
                        <VoteResultPieChart
                            source={this.chartPersentage(this.props.votes || [])}
                            formatValue={(value, total) =>
                                ` ${((value / total) * 100).toFixed(2)}%`
                            }
                        />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <H2>Fyrsti flutingsmadur</H2>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>name</td>
                                    <td>sub name</td>
                                    <td>status</td>
                                </tr>
                            </thead>
                            <tbody>
                                {(this.props.promotedIssues || []).map(issue => (
                                    <tr key={`issue-${issue.id}`}>
                                        <td>
                                            <Link
                                                to={`/loggjafarthing/${
                                                    issue.assembly.id
                                                }/thingmal/${issue.id}`}
                                            >
                                                {issue.name}
                                            </Link>
                                        </td>
                                        <td>{issue.typeName}</td>
                                        <td>{(issue as IssueA).typeSubName}</td>
                                        <td>{(issue as IssueA).status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <H2>Med-flutingsmadur</H2>
                        <table>
                            <thead>
                                <tr>
                                    <td>order</td>
                                    <td>type</td>
                                    <td>typeName</td>
                                    <td>typeSubName</td>
                                    <td>documentType</td>
                                    <td>count</td>
                                </tr>
                            </thead>
                            <tbody>
                                {(this.props.issueCount || []).map(issue => (
                                    <tr
                                        key={`issue-${issue.order}-${
                                            issue.type
                                        }`}
                                    >
                                        <td>{issue.order}</td>
                                        <td>{issue.type}</td>
                                        <td>{issue.typeName}</td>
                                        <td>{issue.typeSubName}</td>
                                        <td>{issue.documentType}</td>
                                        <td>{issue.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <H2>Rædutimi a málaflokka</H2>
                        <HorizontalChart
                            source={(this.props.categorySpeechTimes || []).map(
                                item => ({
                                    label: item.title,
                                    value: item.time,
                                }),
                            )}
                        />
                    </Column>
                </Row>
            </Fragment>
        );
    }
}
