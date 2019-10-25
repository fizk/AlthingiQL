import React from 'react';

interface Props {
    assembly: number;
}

export default class AssemblyPartiesPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <h3>Coming soon</h3>
                <p>Assembly parties summary</p>
            </>
        )
    }
}
