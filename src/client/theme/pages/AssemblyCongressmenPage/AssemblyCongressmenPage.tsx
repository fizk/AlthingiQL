import React from 'react';
import {Aside, Main} from "../../layouts/Container";
import {Link} from "react-router-dom";
import {ServerFetchStatus, Congressman as CongressmanType} from "../../../../../@types";

interface Props {
    assembly: number;
    congressmen: ServerFetchStatus & {
        congressmen: CongressmanType[];
        substitutes: CongressmanType[];
    };
}

export default class AssemblyCongressmenPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Main>{this.props.children}</Main>
                <Aside>
                    {!this.props.congressmen.error && this.props.congressmen.loading === false && (
                        <>
                            <h3>Congressmen</h3>
                            <ul>
                                {this.props.congressmen.congressmen.map(congressman => (
                                    <li key={congressman.id}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>{congressman.name}</Link>
                                        {congressman.party.name} | {congressman.constituency && congressman.constituency.name}
                                    </li>
                                ))}
                            </ul>
                            <h3>Substitutes</h3>
                            <ul>
                                {this.props.congressmen.substitutes.map(congressman => (
                                    <li key={congressman.id}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmenn/${congressman.id}`}>{congressman.name}</Link>
                                        {congressman.party.name} | {congressman.constituency && congressman.constituency.name}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    {!this.props.congressmen.error && this.props.congressmen.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.congressmen.error &&  (
                        <div>Error...</div>
                    )}
                </Aside>
            </>
        )
    }
}
