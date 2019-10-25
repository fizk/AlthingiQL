import React from 'react';
import {Aside, Main} from "../../layouts/Container";
import {Plenary, ServerFetchStatus} from "../../../../../@types";
import {Link} from "react-router-dom";

interface Props {
    assembly: number;
    plenaries: ServerFetchStatus & {
        plenaries: Plenary[];
    };
}

export default class AssemblyPlenariesPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Main>{this.props.children}</Main>
                <Aside>
                    {!this.props.plenaries.error && this.props.plenaries.loading === false && (
                        <ul>
                            {this.props.plenaries.plenaries.map(plenary => (
                                <li key={plenary.id}>
                                    <div><Link to={`/loggjafarthing/${this.props.assembly}/thingfundir/${plenary.id}`}>{plenary.name}</Link></div>
                                    <time>{plenary.from} - {plenary.from}</time>
                                </li>
                            ))}
                        </ul>
                    )}
                    {!this.props.plenaries.error && this.props.plenaries.loading === true && (
                        <div>Loading...</div>
                    )}
                    {this.props.plenaries.error &&  (
                        <div>Error...</div>
                    )}
                </Aside>
            </>
        )
    }
}
