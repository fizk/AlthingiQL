import * as React from 'react';
import {StatelessComponent} from 'react';
import { Link } from "react-router-dom";
import './index.scss';
import {H2} from "../Headline";

type Props = {
    assembly: {
        id?: number,
        period?: {
            from?: string,
            to?: string
        }
    },
    summary?: {
        parties?: {
            party?: {
                id?: number,
                name?: string,
                color?: string
            },
            time?: number
        }[],
        bills?: {
            count?: number,
            status?: string
        }[],
        governmentBills?: {
            count?: number,
            status?: string
        }[],
        types?: {
            count?: number,
            type?: string,
            typeName?: string,
            typeSubName?: string
        }[],
        votes?: {
            count?: number,
            date?: string
        }[],
        speeches?: {
            count?: number,
            date?: string
        }[],
        election?: {
            id?: number,
            date?: string,
            title?: string,
            description?: string
        },
        electionResults?: {
            party?: {
                id?: number,
                name?: string,
                color?: string
            },
            results?: {
                seats?: number,
                result?: number
            }
        }[]
    },
}

const Component: StatelessComponent<Props> = ({children, assembly, summary}) => (
    <table className="issue-type-summary">
        <caption className="issue-type-summary__caption">
            <H2>Málstegundir</H2>
        </caption>
        <thead className="issue-type-summary__head">
            <tr>
                <td>Fjöldi</td>
                {/*<td>Titill</td>*/}
                <td>Undirtitill</td>
            </tr>
        </thead>
        <tbody className="issue-type-summary__body">
            {summary.types.map(type => (
                <tr key={`type-${type.type}`}>
                    <td className="issue-type-summary__count">
                        {type.count}
                    </td>
                    {/*<td>{type.typeName}</td>*/}
                    <td className="issue-type-summary__title">
                        <Link to={`/loggjafarthing/${assembly.id}/thingmal?tegund=${type.type}`}>
                            {type.typeSubName}
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td className="issue-type-summary__count">{summary.types.reduce((prev, current) => prev + current.count, 0)}</td>
                <td className="issue-type-summary__title" >—</td>
            </tr>
        </tfoot>
    </table>
);

export default Component;
