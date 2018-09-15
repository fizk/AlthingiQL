import * as React from "react";
import { Link } from "react-router-dom";
import { Column, Row } from "../../elements/Grid";
import Congressman from "../../elements/Congressman";
import {
    Congressman as CongressmanType,
    Assembly as AssemblyType
} from '../../../../@types';

type AssemblyCongressmenProps = {
    assembly?: number,
    congressmen: CongressmanType[],
    substitutes: (CongressmanType & {assembly: AssemblyType})[]
};
export default class AssemblyCongressmen extends React.Component<
    AssemblyCongressmenProps,
    {}
> {
    static defaultProps = {
        assembly: undefined,
        congressmen: [],
        substitutes: []
    };
    render() {
        return (
            <Row>
                <Column>
                    <h3>Thingmenn</h3>
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
        );
    }
}
