import React from 'react';

interface Props {
    assembly: number;
    party: number;
}

export default class AssemblyPartyPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <h3>Coming soon</h3>
                Party no {this.props.party}
            </>
        )
    }
}
