import React from 'react';
import {Link} from "react-router-dom";
import {Aside, Main} from "../../layouts/Container";
import Congressman from "../../components/Congressman";
import {Spinner} from "../../elements/Icons";
import {ServerFetchStatus, Congressman as CongressmanType} from "../../../../../@types";
import './index.scss';

interface Props {
    assembly: number;
    congressmen: ServerFetchStatus & {
        congressmen: CongressmanType[];
        substitutes: CongressmanType[];
    };
    onFilter: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

export default class AssemblyCongressmenPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Main>{this.props.children}</Main>
                <Aside>
                    <div className="assembly-congressman-page">
                        <section className="assembly-congressman-page__search">
                            <input onChange={this.props.onFilter} className="assembly-congressman-page__search-input" type="search" placeholder="Leita..."/>
                        </section>
                        {!this.props.congressmen.error && !this.props.congressmen.loading && (
                            <div className="assembly-congressman-page__list">
                                <div>
                                <h3 className="assembly-congressman-page__title">Þingmenn</h3>
                                <ul className="assembly-congressman-page__congressman-list">
                                    {this.props.congressmen.congressmen.map(congressman => (
                                        <li key={congressman.id} className="assembly-congressman-page__congressman-item">
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>
                                                <Congressman congressman={congressman} party={congressman.party} >
                                                    <h4 className="assembly-congressman-page__congressman-title">{congressman.party && congressman.party.name}</h4>
                                                    <h4 className="assembly-congressman-page__congressman-title">{congressman.constituency && congressman.constituency.name}</h4>
                                                    <ul>
                                                        {congressman.ministries && congressman.ministries.map(ministry => (
                                                            <li key={ministry.id}>{ministry.name}</li>
                                                        ))}
                                                    </ul>
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                                <div>
                                <h3 className="assembly-congressman-page__title">Varamenn</h3>
                                <ul className="assembly-congressman-page__congressman-list">
                                    {this.props.congressmen.substitutes.map(congressman => (
                                        <li key={congressman.id} className="assembly-congressman-page__congressman-item">
                                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>
                                                <Congressman congressman={congressman} party={congressman.party} >
                                                    <h4 className="assembly-congressman-page__congressman-title">{congressman.party && congressman.party.name}</h4>
                                                    <h4 className="assembly-congressman-page__congressman-title">{congressman.constituency && congressman.constituency.name}</h4>
                                                </Congressman>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        )}
                        {!this.props.congressmen.error && this.props.congressmen.loading && (
                            <div className="assembly-congressman-page__loader">
                                <Spinner />
                            </div>
                        )}
                        {this.props.congressmen.error &&  (
                            <div>Error...</div>
                        )}
                    </div>
                </Aside>
            </>
        )
    }
}
