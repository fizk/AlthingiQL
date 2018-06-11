import React from 'react';
import PropTypes from 'prop-types';
import Badge from '../Badge';
import Avatar from '../Avatar';
import {H3} from '../Headline';
import './_index.scss';

export default class Congressman extends React.Component {
    static propTypes = {
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
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
            avatar: {
                templateSrc: undefined,
            }
        },
        party: undefined,
    };

    render() {
        return (
            <article className="congressman">
                <header className="congressman__avatar">
                    <Avatar src={this.props.congressman.avatar.templateSrc}
                            title={`Ljósmynd af ${this.props.congressman.name}`}/>
                </header>
                {this.props.party && (
                    <div className="congressman__party">
                        <Badge title={this.props.party.name} color={this.props.party.color} />
                    </div>
                )}
                <div className="congressman__body">
                    <H3 variations={['ellipsis']}>{this.props.congressman.name}</H3>
                    {this.props.children}
                </div>
            </article>
        )
    }
}
