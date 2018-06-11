import React from 'react';
import PropTypes from 'prop-types';
import {H1, H2, H3} from '../../elements/Headline';
import {Row, Column} from '../../elements/Grid';

export default class IssueHeader extends React.Component {
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            typeName: PropTypes.string,
            status: PropTypes.string,
            date: PropTypes.string,
        }),
        loading: PropTypes.bool,
    };

    static defaultProps = {
        issue: {
            id: undefined,
            name: undefined,
            typeName: undefined,
            status: undefined,
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

