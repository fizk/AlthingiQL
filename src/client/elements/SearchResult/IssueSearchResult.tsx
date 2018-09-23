import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import classVariations from '../../utils/classVariations';
import {Issue as IssueType} from '../../../../@types';

interface Props {
    onSelect?: (...args: any[]) => any;
    isSelected?: boolean;
    variations?: any[];
    issue?: IssueType;
}

export default class IssueSearchResult extends React.Component<Props, {}> {
    public static defaultProps = {
        onSelect: () => {},
        issue: undefined,
        isSelected: false,
        variations: [],
    };

  public render() {
        const variations = this.props.isSelected
            ? this.props.variations.concat(['active'])
            : this.props.variations;
        return (
            <div
                className={classVariations('options-list__item', variations)}
                onClick={() => this.props.onSelect(this.props.issue)}>
                <h3>{this.props.issue.name}</h3>
                <h4>{this.props.issue.subName}</h4>
                <h5>{this.props.issue.typeName}</h5>
                <span>{this.props.issue.status}</span>
                <ReactMarkdown source={this.props.issue.goal || ''} />
                <ReactMarkdown source={this.props.issue.majorChanges || ''} />
                <ReactMarkdown source={this.props.issue.changesInLaw || ''} />
                <ReactMarkdown
                    source={this.props.issue.costsAndRevenues || ''}
                />
                <ReactMarkdown source={this.props.issue.deliveries || ''} />
                <ReactMarkdown
                    source={this.props.issue.additionalInformation || ''}
                />
            </div>
        );
    }
}
