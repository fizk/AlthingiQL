import * as React from 'react';
import {Issue as IssueType, IssueA} from '../../../../@types';
import './index.scss';

interface Props {
    issue: IssueType;
    loading: boolean;
}

export default class IssueHeader extends React.Component<Props, {}> {
    public static defaultProps = {
        issue: {
            id: undefined,
            type: {
                typeName: undefined,
            },
            name: undefined,
            status: undefined,
            date: undefined,
        },
        loading: false,
    };

    public render() {
        return (
            <header className="issue-header">
                <div className="issue-header__title">
                    <h2>{this.props.issue.id}. {this.props.issue.name}</h2>
                    <h3>{(this.props.issue as IssueA).subName}</h3>
                </div>
                <div className="issue-header__state">
                    <h3>{this.props.issue.type.typeName}</h3>
                    <h3>{(this.props.issue as IssueA).status}</h3>
                    <time>{this.props.issue.date}</time>
                </div>
            </header>
        );
    }
}
