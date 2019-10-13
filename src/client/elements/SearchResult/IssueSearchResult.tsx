import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import classVariations from '../../utils/classVariations';
import {Issue as IssueType, IssueA} from '../../../../@types';

interface Props {
    onSelect?: (...args: any[]) => any;
    isSelected?: boolean;
    variations?: any[];
    issue: IssueType;
}

export default class IssueSearchResult extends React.Component<Props> {
    public static defaultProps = {
        onSelect: () => {},
        issue: undefined,
        isSelected: false,
        variations: [],
    };

  public render() {
        const variations = this.props.isSelected
            ? (this.props.variations || []).concat(['active'])
            : this.props.variations;
        return (
            <div
                className={classVariations('options-list__item', variations)}
                onClick={() => this.props.onSelect && this.props.onSelect(this.props.issue)}>
                <h3>{this.props.issue.name}</h3>
                <h4>{(this.props.issue as IssueA).subName}</h4>
                <h5>{this.props.issue.type.typeName}</h5>
                <span>{(this.props.issue as IssueA).status}</span>
                <ReactMarkdown source={(this.props.issue as IssueA).goal || ''} />
                <ReactMarkdown source={(this.props.issue as IssueA).majorChanges || ''} />
                <ReactMarkdown source={(this.props.issue as IssueA).changesInLaw || ''} />
                <ReactMarkdown
                    source={(this.props.issue as IssueA).costsAndRevenues || ''}
                />
                <ReactMarkdown source={(this.props.issue as IssueA).deliveries || ''} />
                <ReactMarkdown
                    source={(this.props.issue as IssueA).additionalInformation || ''}
                />
            </div>
        );
    }
}
