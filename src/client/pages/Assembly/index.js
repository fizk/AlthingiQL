import React from 'react';
import PropTypes from 'prop-types';
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import AssemblyHeader from '../../components/AssemblyHeader';

export default class Assembly extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
    };

    static defaultProps = {
        assembly: undefined,
    };

    render() {
        return (
            <div>
                <AssemblyNavigation assembly={this.props.assembly} />
                <AssemblyHeader assembly={this.props.assembly} />
                {this.props.children}
            </div>
        )
    }
}
