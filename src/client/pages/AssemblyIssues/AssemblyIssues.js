import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default class AssemblyIssues extends React.Component {
    static propTypes = {
        issues: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            status: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string
                })
            }))
        })),
        loadMore: PropTypes.func
    };

    static defaultProps = {
        issues: [],
        loadMore: () => {}
    };

    render() {
        return (
            <div>
                <ul>
                    {this.props.issues.map(issue => (
                        <li key={`issue-${issue.id}`}>
                            <div>
                                <h3>
                                    <Link to={`/loggjafathing/${issue.assembly.id}/thingmal/${issue.id}`}>{issue.name}</Link>
                                </h3>
                                <h4>{issue.status}</h4>
                                <h5>{issue.typeName}</h5>
                                <ul>
                                    {issue.proponents.map(proponent => (
                                        <li key={`proponent-${proponent.id}`}>
                                            {proponent.name} - {proponent.party.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
                <span onClick={this.props.loadMore}>load more</span>
            </div>
        )
    }
}
