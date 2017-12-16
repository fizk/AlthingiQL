import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import {Badge} from "../Badge/index";
import {ListHorizontal, ListItem} from '../List';
import './_index.scss';

class AssemblyBadge extends React.Component {
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
                }))
            })
        })
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
                minority: [],
            },
        }
    };

    render() {
        return (
            <NavLink to={`/loggjafathing/${this.props.assembly.id}`} className="assembly-badge" activeClassName="assembly-badge--active">
                <div style={{display: 'flex'}}>
                    <h3>{this.props.assembly.id}</h3>
                    <time>
                        {this.props.assembly.period.from ? new Date(this.props.assembly.period.from).getFullYear() : null} - {this.props.assembly.period.to ? new Date(this.props.assembly.period.to).getFullYear() : null}
                    </time>
                </div>

                <ListHorizontal>
                    {this.props.assembly.division.majority.map(party => (
                        <ListItem key={`party-${party.id}`}>
                            <Badge color={party.color} variations={['sm']} title={party.name}/>
                        </ListItem>
                    ))}
                </ListHorizontal>
            </NavLink>
        );
    }
}

export {AssemblyBadge}
