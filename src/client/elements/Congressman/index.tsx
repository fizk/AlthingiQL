import * as React from 'react';
import Avatar from '../Avatar';
import classVariations from '../../utils/classVariations';
import {Person as PersonType, Party as PartyType, Constituency} from '../../../../@types';
import './index.scss';

interface Props {
    congressman: PersonType;
    party?: PartyType;
    constituency?: Constituency
    variations?: string[];
}

export default class Congressman extends React.Component<Props> {
    public static defaultProps = {
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined,
            },
        },
        party: undefined,
        constituency: undefined,
        variations: []
    };

    public render() {

        const size = (this.props.variations || []).reduce((previous, current) => {
            if (current === 'md') return 39;
            if (current === 'lg') return 61;
            return previous;
        }, 39);

        return (
            <article className={classVariations('congressman', this.props.variations)}>
                <header className="congressman__avatar">
                    <Avatar size={size}
                        src={(this.props.congressman.avatar.templateSrc || '').replace('{size}', `${size}x${size}`)}
                        title={`Ljósmynd af ${this.props.congressman.name}`}
                    />
                    {this.props.party && (
                        <div className="congressman__badge"
                             title={this.props.party.name}
                             style={{backgroundColor: `#${this.props.party.color}`}} />
                    )}
                </header>

                <div className="congressman__body">
                    <h3 className="congressman__title">
                        {this.props.congressman.name} {this.props.constituency && (<span className="congressman__constituency">{this.props.constituency.abbr_short}</span>)}
                    </h3>
                    {this.props.children}
                </div>
            </article>
        );
    }
}
