import React from 'react';
import PropTypes from 'prop-types';
import {NavTab, NavTabItem} from '../NavTab';

export class AssemblyNavigation extends React.Component {
    static propTypes = {
        assembly: PropTypes.number
    };

    static defaultProps = {
        assembly: undefined
    };

    render() {
        return (
            <nav>
                <NavTab>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}`}>Samantekt</NavTabItem>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal`}>Þingmál</NavTabItem>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingfundir`}>Þingfundir</NavTabItem>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmenn`}>Þingmenn</NavTabItem>
                </NavTab>
            </nav>
        )
    }
}
