import * as React from 'react';
import { NavTab, NavTabItem } from '../NavTab';

interface Props {
    assembly: number;
    issue: number;
    category: string;
}

export default class AssemblyIssueNavigation extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        issue: undefined,
        category: undefined,
    };

  public render() {
        return (
            <nav>
                <NavTab>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.category}/${this.props.issue}`}>
                        Samantekt
                    </NavTabItem>
                    {this.props.category.toLowerCase() === 'a' && (
                        <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.category}/${this.props.issue}/thingskjol`}>
                            Þingskjöl
                        </NavTabItem>
                    )}
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal/${this.props.category}/${this.props.issue}/raedur`}>
                        Ræður
                    </NavTabItem>
                </NavTab>
            </nav>
        );
    }
}
