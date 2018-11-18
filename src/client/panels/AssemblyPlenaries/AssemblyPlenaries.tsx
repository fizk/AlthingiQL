import * as React from 'react';
import {Plenary} from '../../../../@types';
import Section from '../../elements/Section';
import {Link} from 'react-router-dom';
import './index.scss';

interface Props {
    plenaries?: Plenary[];
    assembly: number;
}

export default class AssemblyPlenaries extends React.Component<Props, {}> {
    public static defaultProps = {
        plenaries: [],
    };

    public render() {
        return (
            <Section>
                <ul>
                    {this.props.plenaries.map(plenary => (
                        <li key={plenary.id}>
                            <Link to={`/loggjafarthing/${plenary.assembly.id}/thingfundir/${plenary.id}`}>
                                {plenary.name || '-'} {plenary.from}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Section>
        );
    }
}
