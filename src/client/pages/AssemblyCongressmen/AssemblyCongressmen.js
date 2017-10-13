import React from 'react';
import PropTypes from 'prop-types';

export default class AssemblyCongressmen extends React.Component {
    static propTypes = {
        congressmen: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })),
        substitutes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })),
    };

    static defaultProps = {
        congressmen: [],
        substitutes: []
    };

    render() {
        return (
            <div>
                <h3>Thingmenn</h3>
                <ul>
                    {this.props.congressmen.map(congressman => (
                        <li key={`congressman-${congressman.id}`}>{congressman.name}</li>
                    ))}
                </ul>
                <h3>Varamenn</h3>
                <ul>
                    {this.props.substitutes.map(congressman => (
                        <li key={`congressman-${congressman.id}`}>{congressman.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
