import * as React from 'react';
import {default as AssemblyPanel} from '../../panels/Assembly';

interface Props {
    assembly: number;
}

export default class Assembly extends React.Component<Props> {
    public static defaultProps = {
        assembly: undefined,
    };

    public render() {
        return (
            <AssemblyPanel assembly={this.props.assembly} />
        );
    }
}
