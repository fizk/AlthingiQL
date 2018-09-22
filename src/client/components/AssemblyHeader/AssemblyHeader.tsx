import * as React from "react";
import { H1 } from "../../elements/Headline";
import Badge from "../../elements/Badge";
import './index.scss';
import {Link} from "react-router-dom";

type AssemblyHeaderProps = {
    assembly?: {
        id?: number,
        period?: {
            from?: string,
            to?: string
        },
        division?: {
            majority?: {
                id?: number,
                name?: string,
                color?: string
            }[],
            minority?: {
                id?: number,
                name?: string,
                color?: string
            }[]
        }
    },
    loading?: boolean
};

export default class AssemblyHeader extends React.Component<AssemblyHeaderProps, {}> {
    static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined
            },
            division: {
                majority: [],
                minority: []
            }
        },
        loading: false
    };

    render() {
        return (
            <div className="assembly-header">
                <div className="assembly-header__headline">
                    <H1>
                        <Link to={`/loggjafarthing/${this.props.assembly.id}`}>
                            {this.props.assembly.id}
                        </Link>. Löggjafarþing
                    </H1>
                    <time>
                        {this.props.assembly.period.from}
                        {this.props.assembly.period.to}
                    </time>
                </div>
                <div className="assembly-header__parties">
                    <ul className="assembly-header__party-list">
                        {this.props.assembly.division.majority.map(party => (
                            <li key={`party-${party.id}`}
                                className="assembly-header__party-list-item">
                                <Badge title={party.name} color={party.color} />
                            </li>
                        ))}
                    </ul>
                    <ul className="assembly-header__party-list">
                        {this.props.assembly.division.minority.map(party => (
                            <li key={`party-${party.id}`}
                                className="assembly-header__party-list-item">
                                <Badge title={party.name} color={party.color} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
