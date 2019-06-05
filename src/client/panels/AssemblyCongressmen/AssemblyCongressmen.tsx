import * as React from 'react';
import {Link} from 'react-router-dom';
import Section from '../../elements/Section';
import {Column, Row} from '../../elements/Grid';
import Congressman from '../../elements/Congressman';
import {Congressman as CongressmanType} from '../../../../@types';

interface Props {
    assembly?: number;
    congressmen: CongressmanType[];
    substitutes: CongressmanType[];
}

export default class AssemblyCongressmen extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        congressmen: [],
        substitutes: [],
    };

    public render() {
        return (
            <Section>
                <Row>
                    <Column>
                        <h3>Þingmenn</h3>
                        <ul>
                            {this.props.congressmen.map(congressman => (
                                <li key={`congressman-${congressman.id}`}>
                                    <Link
                                        to={`/loggjafarthing/${
                                            this.props.assembly
                                        }/thingmenn/${congressman.id}`}
                                    >
                                        <Congressman
                                            congressman={congressman}
                                            party={congressman.party}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Column>
                    <Column>
                        <h3>Varamenn</h3>
                        <ul>
                            {this.props.substitutes.map(congressman => (
                                <li key={`congressman-${congressman.id}`}>
                                    <Link
                                        to={`/loggjafarthing/${
                                            this.props.assembly
                                        }/thingmenn/${congressman.id}`}
                                    >
                                        <Congressman
                                            congressman={congressman}
                                            party={congressman.party}
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Column>
                </Row>
            </Section>
        );
    }
}
