import * as React from 'react';
import { NavTab, NavTabItem } from '../NavTab';

interface Props {
    assembly: number;
}

export class AssemblyNavigation extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
    };

    public render() {
        return (
            <NavTab>
                <NavTabItem to={`/loggjafarthing/${this.props.assembly}`} exact={true}>
                    Samantekt
                </NavTabItem>
                <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmal`} exact={false}>
                    Þingmál
                </NavTabItem>
                <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingfundir`} exact={false}>
                    Þingfundir
                </NavTabItem>
                <NavTabItem to={`/loggjafarthing/${this.props.assembly}/thingmenn`} exact={false}>
                    Þingmenn
                </NavTabItem>
            </NavTab>
        );
    }
}
