import * as React from 'react';
import {Assembly as AssemblyType, TypeCount} from '../../../../@types';
import {StatelessComponent} from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

interface Props {
    assembly: AssemblyType;
    summary: TypeCount[];
}

const Component: StatelessComponent<Props> = ({children, assembly, summary}) => (
    <table className="issue-type-summary">
        <caption className="issue-type-summary__caption">
            <h2>Málstegundir</h2>
        </caption>
        <thead className="issue-type-summary__head">
            <tr>
                <td>Fjöldi</td>
                {/*<td>Titill</td>*/}
                <td>Undirtitill</td>
            </tr>
        </thead>
        <tbody className="issue-type-summary__body">
            {summary.map(type => (
                <tr key={`type-${type.type.type}`}>
                    <td className="issue-type-summary__count">
                        {type.count}
                    </td>
                    {/*<td>{type.typeName}</td>*/}
                    <td className="issue-type-summary__title">
                        <Link to={`/loggjafarthing/${assembly.id}/thingmal?tegund=${type.type.type}`}>
                            {type.type.typeSubName || type.type.typeName}
                        </Link>
                    </td>
                </tr>
            ))}
        </tbody>
        <tfoot>
            <tr>
                <td className="issue-type-summary__count">
                    {summary.reduce((prev, current) => prev + current.count, 0)}
                </td>
                <td className="issue-type-summary__title" >—</td>
            </tr>
        </tfoot>
    </table>
);

export default Component;
