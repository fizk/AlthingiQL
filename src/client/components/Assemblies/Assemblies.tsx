import * as React from "react";
import AssemblyBadge from "../../elements/AssemblyBadge";
import { ListSeparated, ListItem } from "../../elements/List";

type IndexProps = {
    assemblies: {
        id: number,
        period: {
            from?: string,
            to?: string
        },
        division: {
            majority?: {
                id?: number,
                name?: string,
                color?: string
            }[],
            minority: {
                id?: number,
                name?: string,
                color?: string
            }[]
        }
    }[]
    loading?: boolean
};

export default class Index extends React.Component<IndexProps, {}> {
    static defaultProps: IndexProps = {
        assemblies: [],
        loading: false
    };

    render() {
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
