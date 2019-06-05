import classVariations from '../../utils/classVariations';
import * as React from 'react';

interface Props {
    variations?: any[];
    onClear?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    isError?: boolean;
    isSearching?: boolean;
}

export default class Search extends React.Component<Props & React.HTMLProps<HTMLInputElement>, {}> {
    public static defaultProps = {
        variations: [],
        onFocus: () => {},
        onClear: () => {},
        onChange: () => {},
        isError: false,
        isSearching: false,
    };

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }

    private handleChange(event: any) { //@todo
        if (event.target.value.trim() === '') {
            this.props.onClear && this.props.onClear(event);
        }
        this.props.onChange && this.props.onChange(event);
    }

    private handleFocus(event: any) { //@todo
        this.props.onFocus && this.props.onFocus(event);
    }

    public render() {
        const {variations, onClear, onChange, onFocus, isError, isSearching, ...rest} = this.props;

        (variations || []).push('search');
        if (isError) {
            (variations || []).push('error');
        }
        if (isSearching) {
            (variations || []).push('is-searching');
        }
        return (
            <input
                {...rest}
                type="search"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                className={classVariations('input', variations)}
            />
        );
    }
}
