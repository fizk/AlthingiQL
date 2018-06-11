import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Column, Row} from '../../elements/Grid';
import Congressman from '../../elements/Congressman';

export default class AssemblyCongressmen extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        congressmen: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            }),
            assembly: PropTypes.shape({
                id: PropTypes.number,
            })
        })),
        substitutes: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            }),
            assembly: PropTypes.shape({
                id: PropTypes.number,
            })
        })),
    };

    static defaultProps = {
        assembly: undefined,
        congressmen: [],
        substitutes: []
    };

    render() {
        return (
            <Row>
                <Column>
                    <h3>Thingmenn</h3>
                    <ul>
                        {this.props.congressmen.map(congressman => (
                            <li key={`congressman-${congressman.id}`} >
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>
                                    <Congressman congressman={congressman} party={congressman.party} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Column>
                <Column>
                    <h3>Varamenn</h3>
                    <ul>
                        {this.props.substitutes.map(congressman => (
                            <li key={`congressman-${congressman.id}`}>
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>
                                    <Congressman congressman={congressman} party={congressman.party} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Column>
            </Row>
        )
    }
}
