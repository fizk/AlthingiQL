import * as React from "react";
import Badge from "../Badge";
import Avatar from "../Avatar";
import { H3 } from "../Headline";
import {Person as PersonType, Party as PartyType} from '../../../../@types'
import './index.scss';

type CongressmanProps = {
    congressman: PersonType,
    party?: PartyType
};

export default class Congressman extends React.Component<CongressmanProps, {}> {
    static defaultProps = {
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            }
        },
        party: undefined
    };
    render() {
        return (
            <article className="congressman">
                <header className="congressman__avatar">
                    <Avatar
                        src={this.props.congressman.avatar.templateSrc}
                        title={`Ljósmynd af ${this.props.congressman.name}`}
                    />
                </header>
                {this.props.party && (
                    <div className="congressman__party">
                        <Badge
                            title={this.props.party.name}
                            color={this.props.party.color}
                        />
                    </div>
                )}
                <div className="congressman__body">
                    <H3 variations={["ellipsis"]}>
                        {this.props.congressman.name}
                    </H3>
                    {this.props.children}
                </div>
            </article>
        );
    }
}
