import * as React from 'react';
import Badge from '../../elements/Badge';
import {Link} from 'react-router-dom';
import {Assembly as AssemblyType} from '../../../../@types';
import './index.scss';

interface Props {
    assembly: AssemblyType;
    loading: boolean;
}

export default class AssemblyHeader extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined,
            },
            division: {
                majority: [],
                minority: [],
            },
            cabinet: {
                title: undefined,
                period: {
                    from: undefined,
                    to: undefined,
                },
            },
        },
        loading: false,
    };

    public render() {
        return (
            <div className="assembly-header">
                <div className="assembly-header__headline">
                    <h1>
                        <Link to={`/loggjafarthing/${this.props.assembly.id}`}>
                            {this.props.assembly.id}
                        </Link>. Löggjafarþing
                    </h1>
                    <time>
                        {this.props.assembly.period && this.props.assembly.period!.from}
                        {this.props.assembly.period && this.props.assembly.period!.to}
                    </time>
                    {this.props.assembly.cabinet && (
                        <h3>
                            <Link to={`/raduneyti/${this.props.assembly.cabinet.id}`}>
                                {this.props.assembly.cabinet.title}
                            </Link>
                            <time>{this.props.assembly.cabinet.period.from}</time> -
                            <time>{this.props.assembly.cabinet.period.to}</time>
                        </h3>
                    )}
                </div>
                <div className="assembly-header__parties">
                    <ul className="assembly-header__party-list">
                        {((this.props.assembly.division && this.props.assembly.division.majority) || []).map((party, i) => (
                            <li key={`party-${i}-majority`}
                                className="assembly-header__party-list-item">
                                <Badge title={party.name} color={party.color} />
                            </li>
                        ))}
                    </ul>
                    <ul className="assembly-header__party-list">
                        {((this.props.assembly.division && this.props.assembly.division.minority) || []).map((party, i) => (
                            <li key={`party-${i}-minority`}
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
