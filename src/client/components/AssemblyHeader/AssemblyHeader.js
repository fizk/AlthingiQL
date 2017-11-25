import React from 'react';
import PropTypes from 'prop-types';
import {H1} from "../../elements/Headline/index";
import {Badge} from "../../elements/Badge/index";
import {Grid, Row, Column} from "../../elements/Grid/index";

export default class AssemblyHeader extends React.Component {
    static propTypes = {
        assembly: PropTypes.shape({
            id: PropTypes.number,
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            }),
            division: PropTypes.shape({
                majority: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })),
                minority: PropTypes.arrayOf(PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })),
            }),
        }),
        loading: PropTypes.bool,
    };

    static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined,
            },
            division: {
                majority: [],
                minority: []
            }
        },
        loading: false,
    };

    render() {
        return (
            <Grid>
                <Row>
                    <Column>
                        <H1>{this.props.assembly.id}</H1>
                        <time>
                            {this.props.assembly.period.from}
                            {this.props.assembly.period.to}
                        </time>
                    </Column>
                    <Column>
                        <Row>
                            {this.props.assembly.division.majority.map(party => (
                                <Column key={`party-${party.id}`}>
                                    <Badge title={party.name} color={party.color}/>
                                </Column>
                            ))}
                        </Row>
                        <Row>
                            {this.props.assembly.division.minority.map(party => (
                                <Column key={`party-${party.id}`}>
                                    <Badge title={party.name} color={party.color}/>
                                </Column>
                            ))}
                        </Row>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

