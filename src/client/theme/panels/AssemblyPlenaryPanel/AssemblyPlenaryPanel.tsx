import React from 'react';
import {PlenaryItem, ServerFetchStatus} from "../../../../../@types";
import {Link} from "react-router-dom";

interface Props {
    assembly: number;
    plenary: number;
    agenda: ServerFetchStatus & {
        items: PlenaryItem[];
    };
}

export default class AssemblyPlenaryPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                {!this.props.agenda.error && this.props.agenda.loading === false && (
                    <>
                        <ul>
                            {this.props.agenda.items.map(item => (
                                <li key={item.id}>
                                    <h3>Issue</h3>
                                    <Link to={`/loggjafarthing/${item.assembly.id}/thingmal/${item.issue.type.category}/${item.issue.id}`}>
                                        {item.issue.id} | {item.issue.name}
                                    </Link>
                                    {item.posedCongressman && (
                                        <>
                                            <h3>posed</h3>
                                            <Link to={`/loggjafarthing/${item.assembly.id}/thingmenn/${item.posedCongressman.id}`}>{item.posedCongressman.name}</Link>
                                            {item.posedCongressman.party.name} | {item.posedCongressman.constituency && item.posedCongressman.constituency.name}
                                        </>
                                    )}
                                    {item.instigatorCongressman && (
                                        <>
                                            <h3>instigator</h3>
                                            <Link to={`/loggjafarthing/${item.assembly.id}/thingmenn/${item.instigatorCongressman.id}`}>{item.instigatorCongressman.name}</Link>
                                            {item.instigatorCongressman.party.name} | {item.instigatorCongressman.constituency && item.instigatorCongressman.constituency.name}

                                        </>
                                    )}
                                    {item.answererCongressman && (
                                        <>
                                            <h3>answerer</h3>
                                            <Link to={`/loggjafarthing/${item.assembly.id}/thingmenn/${item.answererCongressman.id}`}>{item.answererCongressman.name}</Link>
                                            {item.answererCongressman.party.name} | {item.answererCongressman.constituency && item.answererCongressman.constituency.name}
                                        </>
                                    )}
                                    {item.counterAnswererCongressman && (
                                        <>
                                            <h3>Counter Answerer</h3>
                                            <Link to={`/loggjafarthing/${item.assembly.id}/thingmenn/${item.counterAnswererCongressman.id}`}>{item.counterAnswererCongressman.name}</Link>
                                            {item.counterAnswererCongressman.party.name} | {item.counterAnswererCongressman.constituency && item.counterAnswererCongressman.constituency.name}
                                        </>
                                    )}

                                    <dl>
                                        <dt>iterationComment</dt>
                                        <dd>{item.iterationComment}</dd>
                                        <dt>iterationContinue</dt>
                                        <dd>{item.iterationContinue}</dd>
                                        <dt>iterationType</dt>
                                        <dd>{item.iterationType}</dd>
                                    </dl>
                                    <dl>
                                        <dt>comment</dt>
                                        <dd>{item.comment}</dd>
                                        <dt>commentType</dt>
                                        <dd>{item.commentType}</dd>
                                    </dl>

                                </li>
                            ))}
                        </ul>
                    </>
                )}
                {!this.props.agenda.error && this.props.agenda.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.agenda.error && (
                    <div>Error...</div>
                )}
            </>
        )
    }
}
