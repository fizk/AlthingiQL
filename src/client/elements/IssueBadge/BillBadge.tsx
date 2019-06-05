import * as React from 'react';
import {Link} from 'react-router-dom';
import {H3, H5} from '../Headline';
import SimpleBillProgress from '../SimpleBillProgress';
import Badge from '../Badge';
import {Congressman as CongressmanType, IssueA as IssueType} from '../../../../@types';

interface Props {
    issue: IssueType;
    congressman?: CongressmanType;
}

export default class BillBadge extends React.Component<Props, {}> {
    public static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            category: 'a',
            name: undefined,
            subName: undefined,
            status: undefined,
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

    private count(count: number) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }

    private url(url: string) {
        return (url || '').replace('{size}', '400x300');
    }

    public render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.category.toLowerCase()}/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--bill">
                    {this.props.congressman && (
                        <header
                            className="issue-badge__header"
                            style={{
                                backgroundImage: `url(${this.url(
                                    this.props.congressman.avatar.templateSrc,
                                )})`,
                            }}
                        >
                            <div className="issue-badge__congressman">
                                <div className="issue-badge__congressman-badge">
                                    <Badge
                                        title={this.props.congressman.party.name}
                                        color={this.props.congressman.party.color}
                                    />
                                </div>
                                <H3 variations={['ellipsis']}>
                                    {this.props.congressman.name}
                                </H3>
                                {this.count(this.props.issue.proponentsCount)}
                            </div>
                        </header>
                    )}
                    <aside className="issue-badge__body">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{' '}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </aside>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">
                            <SimpleBillProgress
                                status={this.props.issue.status}
                            />
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}
