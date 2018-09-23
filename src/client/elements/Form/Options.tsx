import * as React from 'react';
import Search from './Search';
import OptionsListContainer from './OptionsListContainer';
import OptionsList from './OptionsList';

interface Props {
    onSelect?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    value?: any;
    isSearching?: boolean;
    variations?: any[];
    placeholder?: string;
    index?: number;
}

export default class Options extends React.Component<Props, {}> {
    public static defaultProps = {
        onSelect: () => {},
        onFocus: () => {},
        onBlur: () => {},
        onClear: () => {},
        onChange: () => {},
        value: undefined,
        isSearching: false,
        variations: [],
        index: 0,
    };

    public inputElement: any = undefined; //@todo

    public dimensions = {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    };

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
    }

    private handleOnChange(event) {
        this.props.onChange(event.target.value);
    }

    private handleOnClear(event) {
        this.props.onClear(event);
    }

    private handleOnFocus(event) {
        this.props.onFocus(event);
    }

    public render() {
        return (
            <div style={{ position: 'relative' }}>
                <Search
                    placeholder={this.props.placeholder || undefined}
                    isSearching={this.props.isSearching}
                    variations={['md'].concat(this.props.variations)}
                    ref={element => (this.inputElement = element)}
                    value={this.props.value}
                    onClear={this.handleOnClear}
                    onFocus={this.handleOnFocus}
                    onChange={this.handleOnChange}
                />
                {React.Children.count(this.props.children) > 0 && (
                    <OptionsListContainer width={this.dimensions.width}>
                        <OptionsList
                            onSelect={this.props.onSelect}
                            index={this.props.index}
                        >
                            {this.props.children}
                        </OptionsList>
                    </OptionsListContainer>
                )}
            </div>
        );
    }
}
