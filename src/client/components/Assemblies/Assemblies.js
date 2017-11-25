import React from 'react';
import PropTypes from 'prop-types';
import {AssemblyBadge} from '../../elements/AssemblyBadge';
import {ListSeparated, ListItem} from '../../elements/List';

export default class Index extends React.Component {
    static propTypes = {
        assemblies: PropTypes.arrayOf(PropTypes.shape({
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
        }))
    };

    static defaultProps = {
        assemblies: []
    };

    render() {
        return (
            <ListSeparated>
                {this.props.assemblies.map(assembly => (
                    <ListItem key={`assembly-${assembly.id}`} >
                        <AssemblyBadge assembly={assembly} />
                    </ListItem>
                ))}
            </ListSeparated>
        )
    }
}
