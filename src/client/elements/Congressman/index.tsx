import * as React from 'react';
import Badge from '../Badge';
import Avatar from '../Avatar';
import classVariations from '../../utils/classVariations';
import {Person as PersonType, Party as PartyType} from '../../../../@types';
import './index.scss';

interface Props {
    congressman: PersonType;
    variations?: string[];
    party?: PartyType;
}

export default class Congressman extends React.Component<Props, {}> {
    public static defaultProps = {
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined,
            },
        },
        party: undefined,
        variations: []
    };

    public render() {
        return (
            <article className={classVariations('congressman', this.props.variations)}>
                <header className="congressman__avatar">
                    <Avatar variations={this.props.variations}
                        src={this.props.congressman.avatar.templateSrc}
                        title={`Ljósmynd af ${this.props.congressman.name}`}
                    />
                </header>
                {this.props.party && (
                    <div className="congressman__party">
                        <Badge variations={this.props.variations}
                            title={this.props.party.name}
                            color={this.props.party.color}
                        />
                    </div>
                )}
                <div className="congressman__body">
                    <h3 className="congressman__title">{this.props.congressman.name}</h3>
                    {this.props.children}
                </div>
            </article>
        );
    }
}
