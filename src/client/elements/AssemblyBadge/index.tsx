import * as React from "react";
import { NavLink } from "react-router-dom";
import Badge from "../Badge";
import { ListHorizontal, ListItem } from "../List";
import './index.scss';

type AssemblyBadgeProps = {
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
    }
};

export default class AssemblyBadge extends React.Component<AssemblyBadgeProps, {}> {
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
        }
    };

    render() {
        return (
            <NavLink
                to={`/loggjafarthing/${this.props.assembly.id}`}
                className="assembly-badge"
                activeClassName="assembly-badge--active"
            >
                <div style={{ display: "flex" }}>
                    <h3>{this.props.assembly.id}</h3>
                    <time>
                        {this.props.assembly.period.from
                            ? new Date(
                                  this.props.assembly.period.from
                              ).getFullYear()
                            : null}{" "}
                        -{" "}
                        {this.props.assembly.period.to
                            ? new Date(
                                  this.props.assembly.period.to
                              ).getFullYear()
                            : null}
                    </time>
                </div>

                <ListHorizontal>
                    {this.props.assembly.division.majority.map(party => (
                        <ListItem key={`party-${party.id}`}>
                            <Badge
                                color={party.color}
                                variations={["sm"]}
                                title={party.name}
                            />
                        </ListItem>
                    ))}
                </ListHorizontal>
            </NavLink>
        );
    }
}
