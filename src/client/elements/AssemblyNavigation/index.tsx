import * as React from 'react';
import { NavTab, NavTabItem } from '../NavTab';

interface Props {
    assembly?: number;
}

export class AssemblyNavigation extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
    };

    public render() {
        return (
            <nav>
                <NavTab>
                    <NavTabItem to={`/loggjafarthing/${this.props.assembly}`}>
                        Samantekt
                    </NavTabItem>
                    <NavTabItem
                        to={`/loggjafarthing/${this.props.assembly}/thingmal`}
                    >
                        Þingmál
                    </NavTabItem>
                    <NavTabItem
                        to={`/loggjafarthing/${
                            this.props.assembly
                        }/thingfundir`}
                    >
                        Þingfundir
                    </NavTabItem>
                    <NavTabItem
                        to={`/loggjafarthing/${this.props.assembly}/thingmenn`}
                    >
                        Þingmenn
                    </NavTabItem>
                </NavTab>
            </nav>
        );
    }
}
