import React from 'react';
import Markdown from 'react-markdown';
import {Link} from "react-router-dom";
import {CategoryType, ServerFetchStatus, Speech} from "../../../../../@types";

interface Props {
    assembly: number;
    issue: number;
    category: CategoryType;
    speeches: ServerFetchStatus & {
        speeches: Speech[];
        done: boolean;
    };
    pagination: () => void;
}

interface State {
}

export default class AssemblyIssueSpeechesPanel extends React.Component<Props, State> {
    render(): React.ReactNode {
        return (
            <>
                {!this.props.speeches.error && this.props.speeches.loading === false && (
                    <>
                        <ul>
                            {this.props.speeches.speeches.map(speech => (
                                <ul>
                                    <p>
                                        {speech.period.from} {speech.period.to}
                                    </p>
                                    <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${speech.congressman.id}`}>{speech.congressman.name}</Link>
                                    {speech.congressman.party.name} | {speech.congressman.constituency && speech.congressman.constituency.name} | {speech.congressmanType}
                                    <dl>
                                        <dt>iteration</dt>
                                        <dd>{speech.iteration}</dd>

                                        <dt>type</dt>
                                        <dd>{speech.type}</dd>

                                        <dt>position</dt>
                                        <dd>{speech.position}</dd>
                                    </dl>

                                    <Markdown
                                        source={speech.text || ''}
                                    />
                                </ul>
                            ))}
                        </ul>
                        {!this.props.speeches.done && (
                            <button onClick={this.props.pagination}>load more</button>
                        )}
                    </>
                )}
                {!this.props.speeches.error && this.props.speeches.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.speeches.error &&  (
                    <div>Error...</div>
                )}
            </>
        )
    }
}
