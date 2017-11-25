import React from 'react';
import PropTypes from 'prop-types';
import {AssemblyIssueNavigation} from "../../elements/AssemblyIssueNavigation";
import AssemblyHeader from "../../components/AssemblyHeader";
import IssueHeader from "../../components/IssueHeader";

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
            <div>
                <AssemblyIssueNavigation assembly={this.props.assembly} issue={this.props.issue} />
                <AssemblyHeader assembly={this.props.assembly} />
                <IssueHeader assembly={this.props.assembly} issue={this.props.issue} />
                {this.props.children}
            </div>
        )
    }
}
