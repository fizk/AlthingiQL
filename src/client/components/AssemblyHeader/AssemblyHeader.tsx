import React from 'react';
import PropTypes from 'prop-types';
import {H1} from '../../elements/Headline';
import Badge from '../../elements/Badge';
import './_index.scss';

export default class AssemblyHeader extends React.Component {
    static propTypes = {
        assembly: PropTypes.shape({
            id: PropTypes.number,
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            }),
            division: PropTypes.shape({
                majority: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })),
                minority: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })),
            }),
        }),
        loading: PropTypes.bool,
    };

    static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined,
            },
            division: {
                majority: [],
                minority: []
            }
        },
        loading: false,
    };

    render() {
        return (
            <div className="assembly-header">
                <div className="assembly-header__headline">
                    <H1>{this.props.assembly.id}. Löggjafarþing</H1>
                    <time>
                        {this.props.assembly.period.from}
                        {this.props.assembly.period.to}
                    </time>
                </div>
                <div className="assembly-header__parties">
                    <ul className="assembly-header__party-list">
                        {this.props.assembly.division.majority.map(party => (
                            <li key={`party-${party.id}`} className="assembly-header__party-list-item">
                            <Badge title={party.name} color={party.color}/>
                            </li>
                        ))}
                    </ul>
                    <ul className="assembly-header__party-list">
                        {this.props.assembly.division.minority.map(party => (
                            <li key={`party-${party.id}`} className="assembly-header__party-list-item">
                                <Badge title={party.name} color={party.color}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

