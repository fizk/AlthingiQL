import * as React from 'react';
import {Link} from 'react-router-dom';
import Congressman from '../../elements/Congressman';
import HorizontalChart from '../../charts/HorizontalChart';
import SessionChart from '../../charts/SessionChart';
import VoteResultPieChart from '../../charts/VoteResultPieChart';
import {
    Person as PersonType,
    Session as SessionType,
    Issue as IssueType,
    VoteSummary as VoteSummaryType,
    IssueCount,
    SuperCategorySpeechTime,
    Division,
    Cabinet,
    Period,
    ServerFetchStatus,
    Assembly as AssemblyType, Inflation as InflationType,
} from '../../../../@types';
import Issue, {IssueGrid, IssueGridItem} from "../../elements/Issue";
import './index.scss';
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";

interface Props {
    assembly: number;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    congressman: number;
    person?: PersonType;
    sessions?: SessionType[];
    votes?: VoteSummaryType[];
    promotedIssues?: IssueType[];
    issueCount?: IssueCount[];
    categorySpeechTimes?: SuperCategorySpeechTime[];
    division: Division;
    cabinet: Cabinet;
    period: Period;
}

export default class AssemblyCongressman extends React.Component<Props, {}> {
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
        },
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
        division: {
            majority: [],
            minority: [],
        },
        cabinet: {
            id: undefined,
            title: undefined,
            description: undefined,
            period: {
                from: undefined,
                to: undefined,
            },
            assemblies: [],
        },
        period: {
            from: undefined,
            to: undefined,
        },
    };

    public render() {
        return (
            <main className="assembly-congressman-panel">
                <section className="assembly-congressman-panel__user">search and avatar</section>
                <nav className="assembly-congressman-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                </nav>
                <header className="assembly-congressman-panel__header">
                    <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                    <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                    <Congressman congressman={this.props.person!} />
                    {(this.props.sessions || []).map(session => session.constituency.name)
                        .reduce((total: any[], item: string) => {
                            if (total.indexOf(item) < 0) {
                                total.push(item);
                            }
                            return total;
                        }, [])
                        .join(', ')}
                </header>
                <aside className="assembly-congressman-panel__aside">
                    <SessionChart source={this.props.sessions || []} />
                    <VoteResultPieChart
                        source={(this.props.votes || []).map(vote => ({
                            value: vote.count,
                            vote: vote.vote,
                        }))}
                    />

                </aside>
                <section className="assembly-congressman-panel__items">
                    <h2>Fyrsti flutingsmadur</h2>
                    <IssueGrid>
                        {(this.props.promotedIssues || []).map(issue => (
                            <IssueGridItem type={issue.type.type}>
                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.type.category}/${issue.id}`}>
                                    <Issue issue={issue}/>
                                </Link>
                            </IssueGridItem>
                        ))}
                    </IssueGrid>
                </section>
                <section className="assembly-congressman-panel_stats">
                    <h2>Flutningsmadur eftir flokkum</h2>
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

                    <h2>Rædutimi a málaflokka</h2>
                    <HorizontalChart
                        source={(this.props.categorySpeechTimes || []).map(
                            item => ({
                                label: item.superCategory.title,
                                value: item.time,
                            }),
                        )}
                    />
                </section>
            </main>
        );
    }
}
