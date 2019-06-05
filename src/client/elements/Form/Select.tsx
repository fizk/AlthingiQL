import * as React from 'react';
import classVariations from '../../utils/classVariations';
import OptionsListContainer from './OptionsListContainer';
import OptionsList from './OptionsList';

interface Props {
    onSelect?: (...args: any[]) => any;
    onFocus?: (...args: any[]) => any;
    onBlur?: (...args: any[]) => any;
    onChange?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
    value?: any;
    index?: number;
    variations?: any[];
}

export default class Select extends React.Component<Props> {
    public static defaultProps = {
        onSelect: () => {},
        onFocus: () => {},
        onBlur: () => {},
        onClear: () => {},
        onChange: () => {},
        value: '&nbsp;',
        variations: [],
    };

    private dimensions = {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    };

    constructor(props: Props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.handleOnFocus = this.handleOnFocus.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    private handleOnChange(event: any) { //@todo
        this.props.onChange && this.props.onChange(event.target.value);
    }

    private handleOnClear(event: any) { //@todo
        this.props.onClear && this.props.onClear(event);
    }

    private handleOnFocus(event: any) { //@todo
        this.props.onFocus && this.props.onFocus(event);
    }

    private handleOnSelect(event: any) { //@todo
        this.props.onSelect && this.props.onSelect(event);
    }

    public render() {
        return (
            <div style={{ position: 'relative' }}>
                <div className={classVariations(
                        'select__input',
                        (this.props.variations || []).length
                            ? this.props.variations
                            : ['md'],
                    )}
                    onClick={this.handleOnFocus}>
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
