import React from 'react';
import {Aside, Main} from "../../layouts/Container";
import {Link} from "react-router-dom";
import {Party, ServerFetchStatus} from "../../../../../@types";

interface Props {
    assembly: number;
    parties: ServerFetchStatus & {
        parties: {party: Party}[];
    };
}

export default class AssemblyPartiesPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Main>{this.props.children}</Main>
                <Aside>
                    {!this.props.parties.error && this.props.parties.loading === false && (
                        <ul>
                            {this.props.parties.parties.map(party => (
                                <li key={party.party.idw}>
                                    <Link to={`/loggjafarthing/${this.props.assembly}/thingflokkar/${party.party.id}`}>
                                        {party.party.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {!this.props.parties.error && this.props.parties.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.parties.error  && (
                        <div>Error...</div>
                    )}
                </Aside>
            </>
        )
    }
}
