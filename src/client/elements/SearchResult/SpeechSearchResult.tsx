import * as React from 'react';
import classVariations from "../../utils/classVariations";
import SpeechCard from "../SpeechCard";
import Congressman from "../Congressman";
import { H4 } from "../Headline";

type IssueSearchResultProps = {
    onSelect?: (...args: any[]) => any,
    isSelected?: boolean,
    variations?: any[],
    value?: {
        id?: string,
        assembly?: {
            id?: number
        },
        issue?: {
            id?: number
        },
        text?: string,
        period?: {
            from?: string,
            to?: string
        },
        iteration?: string,
        type?: string,
        congressmanType?: string,
        congressman?: {
            id?: number,
            name?: string,
            avatar?: {
                templateSrc?: string
            },
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        }
    }
};

export default class IssueSearchResult extends React.Component<IssueSearchResultProps, {}> {
    static defaultProps = {
        onSelect: () => {},
        value: undefined,
        isSelected: false,
        variations: []
    };
    render() {
        const variations = this.props.isSelected
            ? this.props.variations.concat(["active"])
            : this.props.variations;
        return (
            <div
                className={classVariations("options-list__item", variations)}
                onClick={() => this.props.onSelect(this.props.value)}
            >
                <SpeechCard speech={this.props.value}>
                    <Congressman
                        congressman={this.props.value.congressman}
                        party={this.props.value.congressman.party}
                    >
                        <H4>{this.props.value.congressmanType}</H4>
                    </Congressman>
                </SpeechCard>
            </div>
        );
    }
}
