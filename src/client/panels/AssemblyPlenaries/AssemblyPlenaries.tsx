import * as React from 'react';
import {Link} from 'react-router-dom';
import {
    Assembly as AssemblyType,
    Inflation as InflationType,
    Plenary as PlenaryType,
    ServerFetchStatus
} from '../../../../@types';
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import './index.scss';

interface Props extends ServerFetchStatus {
    assembly: number;
    plenaries: PlenaryType[];
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
        inflation: InflationType[];
    };
}

export default class AssemblyPlenaries extends React.Component<Props, {}> {
    public static defaultProps = {
        plenaries: [],
        error: undefined,
        loading: false,
        assembly: undefined,
        assemblyProperties: {
            error: undefined,
            loading: false,
            assembly: {
                id: undefined,
                period: {
                    from: undefined,
                    to: undefined,
                },
                division: [],
                cabinet: {
                    title: undefined,
                    period: {from: undefined, to: undefined}
                }
            },
            inflation: [],
        },
    };

    public render() {
        return (
            <main className="assembly-plenaries-panel">
                <section className="assembly-plenaries-panel__user">search and avatar</section>
                <nav className="assembly-plenaries-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                </nav>
                <header className="assembly-plenaries-panel__header">
                    <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                    <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                </header>
                <aside />
                <section className="assembly-plenaries-panel__items">
                    <ul className="assembly-plenaries-panel__items-list">
                        {(this.props.plenaries || []).map(plenary => (
                            <li key={plenary.id}>
                                <Link to={`/loggjafarthing/${plenary.assembly.id}/thingfundir/${plenary.id}`}>
                                    {plenary.name || '-'} {plenary.from}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        );
    }
}
