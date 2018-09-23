import classVariations from '../../utils/classVariations';
import * as React from 'react';

interface Props {
    onSelect?: (...args: any[]) => any;
    value?: any;
    isSelected?: boolean;
    variations?: any[];
}

export default class OptionsItem extends React.Component<Props, {}> {
    public static defaultProps = {
        onSelect: () => {},
        value: undefined,
        isSelected: false,
        variations: [],
    };

    public render() {
        const variations = this.props.isSelected
            ? this.props.variations.concat(['active'])
            : this.props.variations;
        return (
            <div
                className={classVariations('options-list__item', variations)}
                onClick={() => this.props.onSelect(this.props.value)}
            >
                {this.props.children}
            </div>
        );
    }
}
