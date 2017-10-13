import React from 'react';
import PropTypes from 'prop-types';

export default class IssueDocuments extends React.Component {
    static propTypes = {
        documents: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            url: PropTypes.string,
            date: PropTypes.string,
            type: PropTypes.string,
        })),
    };

    static defaultProps = {
        documents: [],
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.documents.map(document => (
                        <li key={document.id}>{document.type}</li>
                    ))}
                </ul>
                <h2>{this.props.issue.name}</h2>
            </div>
        )
    }
}
