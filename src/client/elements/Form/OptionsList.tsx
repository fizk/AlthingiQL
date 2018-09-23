import classVariations from '../../utils/classVariations';
import * as React from 'react';
import {ReactElement} from 'react';

interface Props {
    onSelect?: (...args: any[]) => any;
    index?: number;
    variations?: any[];
}

export default class OptionsList extends React.Component<Props, {}> {
    public static defaultProps = {
        onSelect: () => {},
        index: undefined,
        variations: [],
    };

    public render() {
        return (
            <div className={classVariations('options-list', this.props.variations)}>
                {this.props.children &&
                React.Children.map(this.props.children, (element, i) => {
                    return React.cloneElement(element as ReactElement<{onSelect: any, isSelected: boolean}>, {
                        onSelect: this.props.onSelect,
                        isSelected: i === this.props.index,
                    });
                } )}
            </div>
        );
    }
}
