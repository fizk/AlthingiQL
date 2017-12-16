import React from 'react';
import PropTypes from 'prop-types';
import {Badge} from '../Badge';
import {Avatar} from '../Avatar';
import {H3} from "../Headline/index";
import './_index.scss';

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

    url(id) {
        return __IMAGE_SERVER__ + `/unsafe/60x60/smart/http://www.althingi.is/myndir/mynd/thingmenn/${id}/org/mynd.jpg`;
    }

    render() {
        return (
            <div className="congressman">
                <div className="congressman__avatar">
                    <Avatar src={this.url(this.props.congressman.id)} />
                </div>
                {this.props.party && <div className="congressman__party">
                    <Badge title={this.props.party.name} color={this.props.party.color} />
                </div>}
                <div className="congressman__body">
                    <H3 variations={['ellipsis']}>{this.props.congressman.name}</H3>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
