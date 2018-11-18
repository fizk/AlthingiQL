import * as React from 'react';
import {Link} from 'react-router-dom';
import {H3, H5} from '../Headline';
import Congressman from '../Congressman';
import {Congressman as CongressmanType, Issue as IssueType} from '../../../../@types';

interface Props {
    issue: IssueType;
}

export default class PlenaryItem extends React.Component<Props, {}> {
    public static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0,
        },
    };

    public render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--inquiry">
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
                    <section className="issue-badge__body">
                        {this.props.children}
                    </section>
                    {/*<aside>{this.props.children}</aside>*/}
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status" />
                    </footer>
                </article>
            </Link>
        );
    }
}
