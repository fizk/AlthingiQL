import * as React from 'react';
import {Link} from 'react-router-dom';
import Congressman from '../../elements/Congressman';
import {
    Assembly as AssemblyType,
    Cabinet,
    Congressman as CongressmanType,
    Division,
    Period,
    ServerFetchStatus
} from '../../../../@types';
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import './index.scss';

interface Props extends ServerFetchStatus {
    assembly: number;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    congressmen: CongressmanType[];
    substitutes: CongressmanType[];
    division: Division;
    cabinet: Cabinet;
    period: Period;
}

export default class AssemblyCongressmen extends React.Component<Props, {}> {
    public static defaultProps = {
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
        },
        congressmen: [],
        substitutes: [],
        loading: false,
        error: undefined,
    };

    public render() {
        return (
            <main className="assembly-congressmen-panel">
                <section className="assembly-congressmen-panel__user">search and avatar</section>
                <nav className="assembly-congressmen-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                </nav>
                <header className="assembly-congressmen-panel__header">
                    <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                    <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                </header>
                <aside />
                <section className="assembly-congressmen-panel__items">
                    <h3>Þingmenn</h3>
                    <ul>
                        {this.props.congressmen.map(congressman => (
                            <li key={`congressman-${congressman.id}`}>
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>
                                    <Congressman
                                        congressman={congressman}
                                        party={congressman.party}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <h3>Varamenn</h3>
                    <ul>
                        {this.props.substitutes.map(congressman => (
                            <li key={`congressman-${congressman.id}`}>
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>
                                    <Congressman
                                        congressman={congressman}
                                        party={congressman.party}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        );
    }
}
