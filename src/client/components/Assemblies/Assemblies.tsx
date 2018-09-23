import * as React from 'react';
import AssemblyBadge from '../../elements/AssemblyBadge';
import {ListSeparated, ListItem} from '../../elements/List';
import {AssemblyStatistics as AssemblyStatisticsType} from '../../../../@types';

interface Props {
    assemblies: AssemblyStatisticsType[];
    loading?: boolean;
}

export default class Index extends React.Component<Props, {}> {
    public static defaultProps = {
        assemblies: [],
        loading: false,
    };

    public render() {
        return (
            <ListSeparated>
                {this.props.assemblies.map(assembly => (
                    <ListItem key={`assembly-${assembly.id}`}>
                        <AssemblyBadge assembly={assembly} />
                    </ListItem>
                ))}
            </ListSeparated>
        );
    }
}
