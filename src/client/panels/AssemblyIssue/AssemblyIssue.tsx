import * as React from 'react';
import {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Row, Column } from '../../elements/Grid';
import Congressman from '../../elements/Congressman';
import Markdown from 'react-markdown';
import Paper from '../../elements/Paper';
import {
    Assembly as AssemblyType,
    Issue as IssueType,
    IssueA,
    Progress as ProgressType,
    ServerFetchStatus
} from '../../../../@types';
import './index.scss';

interface Props {
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    issue: IssueType;
    progress: ProgressType[];
}

export default class AssemblyIssue extends React.Component<Props, {}> {
    public static defaultProps = {
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
            speechRange: [],
        },
        progress: [],
    };

    public render() {
        return (
            <Fragment>
                <main role="main" className="assembly-issue-panel">
                    <section className="assembly-issue-panel__user">search and avatar</section>
                    <nav className="assembly-issue-panel__nav">
                        {/*<AssemblyIssueNavigation*/}
                            {/*assembly={this.props.issue.assembly.id}*/}
                            {/*issue={this.props.issue.id}*/}
                            {/*category={this.props.issue.category}*/}
                        {/*/>*/}
                    </nav>
                    <header className="assembly-issue-panel__header">
                        <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                        <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>

                        {/*<IssueHeader*/}
                            {/*assembly={this.props.issue.assembly.id}*/}
                            {/*issue={this.props.issue}*/}
                            {/*category={this.props.issue.category}*/}
                        {/*/>*/}
                    </header>
                    <section className="assembly-issue-panel__issues">
                        Mest abernadi malin
                    </section>
                    <section className="app_stats">
                        <p>Malategundir</p>
                        <p>rædutimar</p>
                        <p>flokkar a althingi</p>
                        <p>urslit kostninga</p>
                    </section>
                    <section className="assembly-issue-panel__congressmen">
                        Framistada tingmanna
                    </section>
                </main>

            <Row>
                <Column>
                    {(this.props.issue as IssueA).proponents && (
                        <Fragment>
                            <h2>Framsögumenn</h2>
                            <Paper>
                                <ul>
                                    {((this.props.issue as IssueA).proponents || []).map((congressman, i) => (
                                        <li key={`congressman-${congressman.id}-${i}`}>
                                            <Congressman
                                                party={congressman.party}
                                                congressman={congressman}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Fragment>
                    )}

                    <h2>Ræðumenn</h2>
                    <ul>
                        {this.props.issue.speakers.map((item, i) => (
                            <li key={`congressman-${item.congressman.id}-${i}`}>
                                <Congressman
                                    party={item.congressman.party}
                                    congressman={item.congressman}>
                                    <h4>{item.value} mínútur</h4>
                                </Congressman>
                            </li>
                        ))}
                    </ul>
                </Column>
                <Column>
                    <Markdown source={(this.props.issue as IssueA).goal || ''} />
                    <Markdown source={(this.props.issue as IssueA).majorChanges || ''} />
                    <Markdown source={(this.props.issue as IssueA).changesInLaw || ''} />
                    <Markdown
                        source={(this.props.issue as IssueA).costsAndRevenues || ''}
                    />
                    <Markdown source={(this.props.issue as IssueA).deliveries || ''} />
                    <Markdown
                        source={(this.props.issue as IssueA).additionalInformation || ''}
                    />
                    <Paper>
                        <ul>
                            {this.props.progress.map((progress, i) => (
                                <li key={`progress-${i}`}>
                                    {progress.document && progress.document.id && (
                                        <Link to={`/loggjafarthing/${progress.assembly.id}/thingmal/${progress.issue.category}/${progress.issue.id}/thingskjol`}>
                                            {progress.title}
                                        </Link>
                                    )}
                                    {progress.speech && progress.speech.id && (
                                        <Link to={`/loggjafarthing/${progress.assembly.id}/thingmal/${progress.issue.category}/${progress.issue.id}/raedur/${progress.speech.id}`}>
                                            umræda : {progress.title}
                                        </Link>
                                    )}
                                    {progress.committee && progress.committee.id && (
                                        <Link to={`/loggjafarthing/${progress.assembly.id}/thingmal/${progress.issue.category}/${progress.issue.id}/raedur/${progress.committee.id}`}>
                                            {progress.title}{' '}
                                            {progress.committee.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </Paper>
                </Column>
            </Row>
            </Fragment>
        );
    }
}
