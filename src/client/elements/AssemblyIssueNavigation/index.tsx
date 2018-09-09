import * as React from "react";
import { NavTab, NavTabItem } from "../NavTab";

type AssemblyIssueNavigationProps = {
    assembly?: number,
    issue?: number
};

export default class AssemblyIssueNavigation extends React.Component<AssemblyIssueNavigationProps, {}> {
    static defaultProps = {
        assembly: undefined,
        issue: undefined
    };
    render() {
        return (
            <nav>
                <NavTab>
                    <NavTabItem
                        to={`/loggjafarthing/${this.props.assembly}/thingmal/${
                            this.props.issue
                        }`}
                    >
                        Samantekt
                    </NavTabItem>
                    <NavTabItem
                        to={`/loggjafarthing/${this.props.assembly}/thingmal/${
                            this.props.issue
                        }/thingskjol`}
                    >
                        Þingskjöl
                    </NavTabItem>
                    <NavTabItem
                        to={`/loggjafarthing/${this.props.assembly}/thingmal/${
                            this.props.issue
                        }/raedur`}
                    >
                        Ræður
                    </NavTabItem>
                </NavTab>
            </nav>
        );
    }
}
