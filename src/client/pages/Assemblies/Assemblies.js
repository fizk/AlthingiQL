import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export default class Index extends React.Component {
    static propTypes = {
        assemblies: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            })
        }))
    };

    static defaultProps = {
        assemblies: []
    };

    render() {
        return (
            <ul>
                {this.props.assemblies.map(assembly => (
                    <li key={`assembly-${assembly.id}`}>
                        <Link to={`/loggjafathing/${assembly.id}`}>{assembly.id}</Link>
                        {assembly.period.from} {assembly.period.to}
                    </li>
                ))}
            </ul>
        )
    }
}
