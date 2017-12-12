import React from 'react';
import PropTypes from 'prop-types';
import {H1, H2, H3} from "../../elements/Headline/index";
import {Row, Column} from "../../elements/Grid/index";

export default class AssemblyHeader extends React.Component {
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            category: PropTypes.string,
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
            status: PropTypes.string,
            question: PropTypes.string,
            goal: PropTypes.string,
            date: PropTypes.string,
        }),
        loading: PropTypes.bool,
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            category: undefined,
            name: undefined,
            subName: undefined,
            type: undefined,
            typeName: undefined,
            typeSubName: undefined,
            status: undefined,
            question: undefined,
            goal: undefined,
            date: undefined,
        },
        loading: false,
    };

    render() {
        return (
            <Row>
                <Column>
                    <H1>{this.props.issue.id} {this.props.issue.name}</H1>
                    <H3>{this.props.issue.typeName}</H3>
                    <H2>{this.props.issue.status}</H2>
                    <time>
                        {this.props.issue.date}
                    </time>
                </Column>
            </Row>
        )
    }
}

