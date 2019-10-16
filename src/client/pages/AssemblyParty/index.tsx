import * as React from 'react';
import {default as AssemblyPartyPanel} from '../../panels/AssemblyParty';

interface Props {
    assembly: number;
    party: number;
}

export default class AssemblyParty extends React.Component<Props> {
    public static defaultProps = {
        assembly: undefined,
        party: undefined,
    };

    public render() {
        return (
            <AssemblyPartyPanel assembly={this.props.assembly} party={this.props.party} />
        );
    }
}
