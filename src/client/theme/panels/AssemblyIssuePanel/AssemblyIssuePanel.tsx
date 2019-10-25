import React from 'react';
import {CategoryType, Issue, ServerFetchStatus} from "../../../../../@types";
import Menu, {MenuItem} from "../../elements/Menu";

interface Props {
    assembly: number;
    issue: number;
    category: CategoryType;
    issueProperties: ServerFetchStatus & {
        issue: Issue;
    };
}

export default class AssemblyIssuePanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>

                {!this.props.issueProperties.error && this.props.issueProperties.loading == false && (
                    <>
                        {this.props.issueProperties.issue.name}
                    </>
                )}
                {!this.props.issueProperties.error && this.props.issueProperties.loading == true && (
                    <div>Loading...</div>
                )}
                {this.props.issueProperties.error && (
                    <div>Error...</div>
                )}
                <Menu>
                    <MenuItem exact to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.category}/${this.props.issue}`}>Samantekt</MenuItem>
                    <MenuItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.category}/${this.props.issue}/thingskjol`}>Þingskjöl</MenuItem>
                    <MenuItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.category}/${this.props.issue}/raedur`}>Ræður</MenuItem>
                </Menu>
                {this.props.children}
            </>
        )
    }
}
