import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classVariations from '../../utils/classVariations';

export default class IssueSearchResult extends React.Component {

    static propTypes = {
        onSelect: PropTypes.func,
        isSelected: PropTypes.bool,
        variations: PropTypes.array,
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number
            }),
            category: PropTypes.string,
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
            status: PropTypes.string,
            question: PropTypes.string,
            goal: PropTypes.string,
            majorChanges: PropTypes.string,
            changesInLaw: PropTypes.string,
            costsAndRevenues: PropTypes.string,
            deliveries: PropTypes.string,
            additionalInformation: PropTypes.string,
            date: PropTypes.string,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
            }))
        }),
    };

    static defaultProps = {
        onSelect: () => {},
        issue: undefined,
        isSelected: false,
        variations: []
    };

    render() {
        const variations = this.props.isSelected
            ? this.props.variations.concat(['active'])
            : this.props.variations;

        return (
            <div className={classVariations('options-list__item', variations)}
                 onClick={() => this.props.onSelect(this.props.issue)}>
                <h3>{this.props.issue.name}</h3>
                <h4>{this.props.issue.subName}</h4>
                <h5>{this.props.issue.typeName}</h5>
                <span>{this.props.issue.status}</span>
                <ReactMarkdown source={this.props.issue.goal || ''} />
                <ReactMarkdown source={this.props.issue.majorChanges || ''} />
                <ReactMarkdown source={this.props.issue.changesInLaw || ''} />
                <ReactMarkdown source={this.props.issue.costsAndRevenues || ''} />
                <ReactMarkdown source={this.props.issue.deliveries || ''} />
                <ReactMarkdown source={this.props.issue.additionalInformation || ''} />
            </div>
        );
    }
}
