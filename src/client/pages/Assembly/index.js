import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {AssemblyNavigation} from '../../elements/AssemblyNavigation';
import AssemblyHeader from '../../components/AssemblyHeader';
import {Helmet} from 'react-helmet';

export default class Assembly extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
    };

    static defaultProps = {
        assembly: undefined,
    };

    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Löggjafarþing ${this.props.assembly}`}</title>
                    <link rel="canonical" href={`/loggjafarthing/${this.props.assembly}`} />
                </Helmet>
                <AssemblyNavigation assembly={this.props.assembly} />
                <AssemblyHeader assembly={this.props.assembly} />
                {this.props.children}
            </Fragment>
        )
    }
}
