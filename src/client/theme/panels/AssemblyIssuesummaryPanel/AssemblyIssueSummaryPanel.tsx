import React from 'react';
import {CategoryType, Issue, IssueA, Progress, ServerFetchStatus} from "../../../../../@types";
import {Link} from "react-router-dom";
import Markdown from 'react-markdown';

interface Props extends ServerFetchStatus {
    assembly: number;
    issue: number;
    category: CategoryType;
    progress: Progress[];
    issueItem: Issue;
}

export default class AssemblyIssueSummaryPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                {!this.props.error && this.props.loading === false && (
                    <>

                        {this.props.issueItem.date}

                        <Markdown source={(this.props.issueItem as IssueA).goal || ''} />
                        <Markdown source={(this.props.issueItem as IssueA).majorChanges || ''} />
                        <Markdown source={(this.props.issueItem as IssueA).changesInLaw || ''} />
                        <Markdown
                            source={(this.props.issueItem as IssueA).costsAndRevenues || ''}
                        />
                        <Markdown source={(this.props.issueItem as IssueA).deliveries || ''} />
                        <Markdown
                            source={(this.props.issueItem as IssueA).additionalInformation || ''}
                        />

                        <h3>proponents</h3>
                        <ul>
                            {((this.props.issueItem as IssueA).proponents || []).map(congressman => (
                                <li key={congressman.id}>
                                    <Link to={`/loggjafarthing/${this.props.issueItem.assembly.id}/thingmenn/${congressman.id}`}>
                                        {congressman.name}
                                    </Link>
                                    {congressman.party.name}
                                    {congressman.constituency && congressman.constituency.name}
                                </li>
                            ))}
                        </ul>

                        <h3>Speakers</h3>
                        <ul>
                        {this.props.issueItem.speakers.map(congressman => (
                            <li key={congressman.congressman.id}>
                                {congressman.value}
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.congressman.id}`}>
                                    {congressman.congressman.name}
                                </Link>
                                {congressman.congressman.party.name}
                                {congressman.congressman.constituency && congressman.congressman.constituency.name}
                            </li>
                        ))}
                        </ul>
                        <h3>Progress</h3>
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
                    </>
                )}
                {!this.props.error && this.props.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.error && (
                    <div>Error...</div>
                )}
            </>
        )
    }
}
