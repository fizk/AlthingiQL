import React from 'react';
import PropTypes from 'prop-types';
import {NavTab, NavTabItem} from '../NavTab';

export default class AssemblyIssueNavigation extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        issue: PropTypes.number,
    };

    static defaultProps = {
        assembly: undefined,
        issue: undefined,
    };

    render() {
        return (
            <nav>
                <NavTab>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.issue}`}>Samantekt</NavTabItem>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.issue}/thingskjol`}>Þingskjöl</NavTabItem>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.issue}/raedur`}>Ræður</NavTabItem>
                </NavTab>
            </nav>
        )
    }
}
