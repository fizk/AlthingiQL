import React from 'react';
import PropTypes from 'prop-types';

export default class IssueSpeeches extends React.Component {
    static propTypes = {
        speeches: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            from: PropTypes.string,
            to: PropTypes.string,
            congressmanType: PropTypes.string,
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),

        })),
    };

    static defaultProps = {
        speeches: [],
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.speeches.map(speech => (
                        <li key={speech.id}>
                            {speech.congressmanType}
                            <div>{speech.text}</div>
                        </li>
                    ))}
                </ul>
                <h2>{this.props.issue.name}</h2>
            </div>
        )
    }
}
