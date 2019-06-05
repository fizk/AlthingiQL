import * as React from 'react';
import { H2, H3 } from '../../elements/Headline';
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
            name: undefined,
            typeName: undefined,
            status: undefined,
            date: undefined,
        },
        loading: false,
    };

    public render() {
        return (
            <header className="issue-header">
                <div className="issue-header__title">
                    <H2>{this.props.issue.id}. {this.props.issue.name}</H2>
                    <H3>{(this.props.issue as IssueA).subName}</H3>
                </div>
                <div className="issue-header__state">
                    <H3>{this.props.issue.typeName}</H3>
                    <H3>{(this.props.issue as IssueA).status}</H3>
                    <time>{this.props.issue.date}</time>
                </div>
            </header>
        );
    }
}
