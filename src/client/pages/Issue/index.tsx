import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import AssemblyIssueNavigation from '../../elements/AssemblyIssueNavigation';
import AssemblyHeader from '../../components/AssemblyHeader';
import IssueHeader from '../../components/IssueHeader';
import Helmet from 'react-helmet';

export default class Issue extends React.Component {
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
            <Fragment>
                <Helmet>
                    <title>{`Löggjafarþing ${this.props.assembly}`}</title>
                    <link rel="canonical" href={`/loggjafarthing/${this.props.assembly}`} />
                </Helmet>
                <AssemblyIssueNavigation assembly={this.props.assembly} issue={this.props.issue} />
                <AssemblyHeader assembly={this.props.assembly} />
                <IssueHeader assembly={this.props.assembly} issue={this.props.issue} />
                {this.props.children}
            </Fragment>
        )
    }
}
