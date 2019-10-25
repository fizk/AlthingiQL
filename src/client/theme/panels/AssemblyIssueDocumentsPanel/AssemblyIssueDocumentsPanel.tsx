import React from 'react';
import {Document, ServerFetchStatus} from "../../../../../@types";
import {Link} from "react-router-dom";


interface Props {
    assembly: number;
    issue: number;
    documents: ServerFetchStatus & {
        documents: Document[];
    };
}

interface State {
}

export default class AssemblyIssueDocumentsPanel extends React.Component<Props, State> {
    render(): React.ReactNode {
        return (
            <>
                {!this.props.documents.error && this.props.documents.loading === false && (
                    <ul>
                        {this.props.documents.documents.map(document => (
                            <li>

                                {document.date} <Link to={`/loggjafarthing/${this.props.assembly}/thingmal/a/${this.props.issue}/thingskjol/${document.id}`}>{document.type}</Link>
                                 - <a href={document.url} rel="noopener" target="_blank">URL</a>
                                <ul>
                                {document.proponents.map(congressman => (
                                    <li>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>{congressman.name}</Link>
                                        {congressman.party.name} | {congressman.constituency && congressman.constituency.name}
                                    </li>
                                ))}
                                </ul>
                                <ul>
                                {document.votes.map(vote => (
                                    <li>
                                        {vote.type} - {vote.date} - {vote.method} - <em>{vote.outcome}</em>
                                        <dl>
                                            <dt>yes</dt>
                                            <dd>{vote.yes}</dd>
                                            <dt>no</dt>
                                            <dd>{vote.no}</dd>
                                            <dt>inaction</dt>
                                            <dd>{vote.inaction}</dd>
                                            <dt>not present</dt>
                                            <dd>{63 - (vote.yes + vote.no + vote.inaction)}</dd>
                                        </dl>
                                        {vote.committee}
                                    </li>
                                ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}
                {!this.props.documents.error && this.props.documents.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.documents.error &&  (
                    <div>Error...</div>
                )}
            </>
        )
    }
}
