import React from 'react';
import PropTypes from 'prop-types';
import {Badge} from '../Badge';
import {Avatar} from '../Avatar';
import {H3} from "../Headline/index";

export class Congressman extends React.Component {
    static propTypes = {
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        }),
        party: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            color: PropTypes.string,
        }),
    };

    static defaultProps = {
        congressman: {
            id: undefined,
            name: undefined,
        },
        party: undefined,
    };

    render() {
        return (
            <div className="congressman">
                <div className="congressman__avatar">
                    <Avatar src={`http://www.althingi.is/myndir/thingmenn-cache/${this.props.congressman.id}/${this.props.congressman.id}-220.jpg`} />
                </div>
                {this.props.party && <div className="congressman__party">
                    <Badge title={this.props.party.name} color={this.props.party.color} />
                </div>}
                <div className="congressman__body">
                    <H3>{this.props.congressman.name}</H3>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
