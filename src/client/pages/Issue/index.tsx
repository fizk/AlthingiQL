import * as React from 'react';
import { Fragment } from "react";
import AssemblyIssueNavigation from "../../elements/AssemblyIssueNavigation";
import AssemblyHeader from "../../components/AssemblyHeader";
import IssueHeader from "../../components/IssueHeader";
import Helmet from "react-helmet";
import Section from "../../elements/Section";

type IssueProps = {
    assembly?: number,
    issue?: number
};

export default class Issue extends React.Component<IssueProps, {}> {
    static defaultProps = {
        assembly: undefined,
        issue: undefined
    };
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Löggjafarþing ${this.props.assembly}`}</title>
                    <link
                        rel="canonical"
                        href={`/loggjafarthing/${this.props.assembly}`}
                    />
                </Helmet>
                <AssemblyIssueNavigation
                    assembly={this.props.assembly}
                    issue={this.props.issue}
                />
                <Section>
                    <AssemblyHeader assembly={this.props.assembly} />
                    <IssueHeader
                        assembly={this.props.assembly}
                        issue={this.props.issue}
                    />
                    {this.props.children}
                </Section>

            </Fragment>
        );
    }
}
