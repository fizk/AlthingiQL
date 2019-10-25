import React from 'react';
import {Main} from "../../layouts/Container";

interface Props {
    assembly: number;
}

interface State {
}

export default class AssemblyPlenariesPanel extends React.Component<Props, State> {
    render(): React.ReactNode {
        return (
            <>
                <h3>Coming soon</h3>
                many plenaries
            </>
        )
    }
}
