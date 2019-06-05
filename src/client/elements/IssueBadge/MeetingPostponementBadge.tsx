import * as React from 'react';
import {Link} from 'react-router-dom';
import {H3, H5} from '../Headline';
import Congressman from '../Congressman';
import {Congressman as CongressmanType, IssueA as IssueType} from '../../../../@types';

interface Props {
    issue: IssueType;
    congressman?: CongressmanType;
}

export default class MeetingPostponementBadge extends React.Component<Props, {}> {
    public static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            category: 'a',
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0,
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined,
            },
        },
    };

    public render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.category.toLowerCase()}/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--meeting">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{' '}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    {this.props.congressman && (
                        <section className="issue-badge__body">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </section>
                    )}
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}
