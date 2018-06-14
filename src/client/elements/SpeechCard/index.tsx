import * as React from 'react';
import Markdown from "react-markdown";
import './index.scss';

type SpeechCardProps = {
    speech?: {
        id?: string,
        assembly?: {
            id?: number
        },
        issue?: {
            id?: number
        },
        text?: string,
        period?: {
            from?: string,
            to?: string
        },
        iteration?: string,
        type?: string,
        congressmanType?: string,
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
        }
    }
};

export default class SpeechCard extends React.Component<SpeechCardProps, {}> {
    static defaultProps = {
        speech: {
            id: undefined,
            assembly: {
                id: undefined
            },
            issue: {
                id: undefined
            },
            text: undefined,
            period: {
                from: undefined,
                to: undefined
            },
            iteration: undefined,
            type: undefined,
            congressmanType: undefined,
            congressman: {
                id: undefined,
                name: undefined,
                avatar: {
                    templateSrc: undefined
                },
                party: {
                    id: undefined,
                    name: undefined,
                    color: undefined
                }
            }
        }
    };
    render() {
        const fromOptions = {
            year: "numeric",
            month: "short",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };
        const toOptions = {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        };
        return (
            <div className="speech-card">
                {this.props.children}
                <div className="speech-card__meta">
                    <span className="speech-card__type">
                        {this.props.speech.type}
                    </span>
                    <span className="speech-card__iteration">
                        {this.props.speech.iteration}
                    </span>
                    <time className="speech-card__date">
                        {new Intl.DateTimeFormat(undefined, fromOptions).format(
                            new Date(this.props.speech.period.from)
                        )}
                    </time>
                    <time className="speech-card__date">
                        {new Intl.DateTimeFormat(undefined, toOptions).format(
                            new Date(this.props.speech.period.to)
                        )}
                    </time>
                </div>
                <Markdown
                    className="speech-card__text"
                    source={this.props.speech.text || ""}
                />
            </div>
        );
    }
}
