import * as React from 'react';
import {Cabinet as CabinetType} from '../../../../@types';
import {Link} from 'react-router-dom';

interface Props {
    cabinet: CabinetType;
}

export default class Cabinet extends React.Component<Props, {}> {
    public static defaultProps = {
        cabinet: {
            id: undefined,
            title: undefined,
            description: undefined,
            period: {from: undefined, to: undefined},
            assemblies: [],
        },
    };

    public render() {
        return (
            <div>
                <h2>{this.props.cabinet.title}</h2>
                <time>{this.props.cabinet.period.from}</time>
                <time>{this.props.cabinet.period.to}</time>
                <ul>
                    {this.props.cabinet.assemblies.map(assembly => (
                        <li key={`${this.props.cabinet}-${assembly.id}`}>
                            <Link to={`/loggjafarthing/${assembly.id}`}>{assembly.id}</Link>
                            <time>{assembly.period.from}</time>
                            <time>{assembly.period.to}</time>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
