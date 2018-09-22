import * as React from "react";
import classVariations from "../../utils/classVariations";
import './index.scss';
import {ReactElement} from "react";

type InputProps = {
    variations?: any[],
    isError?: boolean
};

export class Input extends React.Component<InputProps & React.HTMLProps<HTMLInputElement>, {}> {
    static defaultProps = {
        variations: [],
        isError: false
    };
    render() {
        let props = { ...this.props };
        delete props.variations;
        delete props.isError;
        return (
            <input
                {...props}
                className={classVariations(
                    "input",
                    this.props.variations.concat(
                        this.props.isError ? ["error"] : []
                    )
                )}
            />
        );
    }
}

type SearchProps = {
    variations?: any[],
    onClear?: (...args: any[]) => any,
    onChange?: (...args: any[]) => any,
    onFocus?: (...args: any[]) => any,
    isError?: boolean,
    isSearching?: boolean
};

export class Search extends React.Component<SearchProps & React.HTMLProps<HTMLInputElement>, {}> {
    static defaultProps = {
        variations: [],
        onFocus: () => {},
        onClear: () => {},
        onChange: () => {},
        isError: false,
        isSearching: false
    };
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    handleChange(event) {
        if (event.target.value.trim() === "") {
            this.props.onClear(event);
        }
        this.props.onChange(event);
    }
    handleFocus(event) {
        this.props.onFocus(event);
    }
    render() {
        const {
            variations,
            onClear,
            onChange,
            onFocus,
            isError,
            isSearching,
            ...rest
        } = this.props;
        variations.push("search");
        if (isError) {
            variations.push("error");
        }
        if (isSearching) {
            variations.push("is-searching");
        }
        return (
            <input
                {...rest}
                type="search"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                className={classVariations("input", variations)}
            />
        );
    }
}

type OptionsProps = {
    onSelect?: (...args: any[]) => any,
    onFocus?: (...args: any[]) => any,
    onBlur?: (...args: any[]) => any,
    onChange?: (...args: any[]) => any,
    onClear?: (...args: any[]) => any,
    value?: any,
    isSearching?: boolean,
    variations?: any[],
    placeholder?: string,
    index?: number
};

export class Options extends React.Component<OptionsProps, {}> {
    static defaultProps = {
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

    inputElement: any = undefined; //@todo

    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
    }
    dimensions = {
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
    handleOnChange(event) {
        this.props.onChange(event.target.value);
    }
    handleOnClear(event) {
        this.props.onClear(event);
    }
    handleOnFocus(event) {
        this.props.onFocus(event);
    }
    render() {
        return (
            <div style={{ position: "relative" }}>
                <Search
                    placeholder={this.props.placeholder || undefined}
                    isSearching={this.props.isSearching}
                    variations={["md"].concat(this.props.variations)}
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

type OptionsListProps = {
    onSelect?: (...args: any[]) => any,
    index?: number,
    variations?: any[]
};

class OptionsList extends React.Component<OptionsListProps, {}> {
    static defaultProps = {
        onSelect: () => {},
        index: undefined,
        variations: []
    };
    render() {
        return (
            <div
                className={classVariations(
                    "options-list",
                    this.props.variations
                )}
            >
                {this.props.children &&
                    React.Children.map(this.props.children, (element, i) => {
                        return React.cloneElement(element as ReactElement<{onSelect: any, isSelected: boolean}>, {
                            onSelect: this.props.onSelect,
                            isSelected: i === this.props.index
                        });
                    } )}
            </div>
        );
    }
}

type OptionsListContainerProps = {
    width?: number
};

class OptionsListContainer extends React.Component<OptionsListContainerProps, {}> {
    static defaultProps = {
        width: 0
    };
    render() {
        const style = {
            // width: this.props.width,
            position: "absolute" as "absolute",
            zIndex: 1
        };
        return (
            <div style={style} className="options-list__container">
                {this.props.children}
            </div>
        );
    }
}

type OptionsItemProps = {
    onSelect?: (...args: any[]) => any,
    value?: any,
    isSelected?: boolean,
    variations?: any[]
};

export class OptionsItem extends React.Component<OptionsItemProps, {}> {
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
                {this.props.children}
            </div>
        );
    }
}

type SelectProps = {
    onSelect?: (...args: any[]) => any,
    onFocus?: (...args: any[]) => any,
    onBlur?: (...args: any[]) => any,
    onChange?: (...args: any[]) => any,
    onClear?: (...args: any[]) => any,
    value?: any,
    index?: number,
    variations?: any[]
};

export class Select extends React.Component<SelectProps, {}> {
    static defaultProps = {
        onSelect: () => {},
        onFocus: () => {},
        onBlur: () => {},
        onClear: () => {},
        onChange: () => {},
        value: "&nbsp;",
        variations: []
    };
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }
    dimensions = {
        top: 0,
        left: 0,
        width: 0,
        height: 0
    };
    handleOnChange(event) {
        this.props.onChange(event.target.value);
    }
    handleOnClear(event) {
        this.props.onClear(event);
    }
    handleOnFocus(event) {
        this.props.onFocus(event);
    }
    handleOnSelect(event) {
        this.props.onSelect(event);
    }
    render() {
        return (
            <div style={{ position: "relative" }}>
                <div
                    className={classVariations(
                        "select__input",
                        this.props.variations.length
                            ? this.props.variations
                            : ["md"]
                    )}
                    onClick={this.handleOnFocus}
                >
                    {this.props.value}
                </div>
                {React.Children.count(this.props.children) > 0 && (
                    <OptionsListContainer width={this.dimensions.width}>
                        <OptionsList
                            onSelect={this.handleOnSelect}
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

const withKeyBinding = Component => {
    return class extends React.Component<{onSelect: (value: any) => void, onClear: () => void, onChange: (value: any) => void, isSearching: boolean, isError: boolean}, {index: number}> {
        constructor(props) {
            super(props);
            this.handleKeyListening = this.handleKeyListening.bind(this);
            this.state = {
                index: undefined
            };
        }
        componentWillReceiveProps(nextProps) {
            if (
                (nextProps.children || []).length > 0 &&
                this.state.index === undefined
            ) {
                this.setState({ index: 0 });
            }
            if (
                React.Children.count(this.props.children) === 0 &&
                React.Children.count(nextProps.children) > 0
            ) {
                document.body.addEventListener(
                    "keydown",
                    this.handleKeyListening
                );
            } else if (
                React.Children.count(this.props.children) > 0 &&
                React.Children.count(nextProps.children) === 0
            ) {
                document.body.removeEventListener(
                    "keydown",
                    this.handleKeyListening
                );
            }
        }
        handleKeyListening(event) {
            let index = undefined;
            let keyCode = event.code || event.key || event.keyIdentifier; //Chrome || IE || Safari
            switch (keyCode) {
                case "ArrowDown":
                case "Down":
                    index =
                        this.state.index === undefined
                            ? 0
                            : this.state.index + 1;
                    this.setState({
                        index:
                            index > React.Children.count(this.props.children) - 1
                                ? React.Children.count(this.props.children)- 1
                                : index
                    });
                    break;
                case "ArrowUp":
                case "Up":
                    index =
                        this.state.index === undefined
                            ? 0
                            : this.state.index - 1;
                    this.setState({
                        index: index < 0 ? 0 : index
                    });
                    break;
                case "Enter":
                    index = this.state.index;
                    this.props.onSelect(this.props.children[index].props.value);
                    this.setState({ index: undefined });
                    break;
                case "Escape":
                    this.props.onClear();
                    this.setState({ index: undefined });
                    break;
            }
        }
        render() {
            return <Component {...this.props} index={this.state.index} />;
        }
    };
};

export const OptionsWithKeyBinding = withKeyBinding(Options);

export const SelectWithKeyBinding = withKeyBinding(Select);
