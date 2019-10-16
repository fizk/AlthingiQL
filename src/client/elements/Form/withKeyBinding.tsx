import * as React from 'react';
import {ComponentClass} from "react";
import {PropsWithChildren} from "react";

interface Props {
    onSelect: (value: any) => void;
    onClear: () => void;
    onChange: (value: any) => void;
    isSearching: boolean;
    isError: boolean;
}

interface State {
    index: number | undefined;
}

export default  (Component: ComponentClass<{index: number | undefined}>) => {
    return class extends React.Component<Props, State> {
        constructor(props: Props) {
            super(props);
            this.handleKeyListening = this.handleKeyListening.bind(this);
            this.state = {
                index: undefined,
            };
        }

        private handleKeyListening(event: any) { //@todo
            let index;
            const keyCode = event.code || event.key || event.keyIdentifier; //Chrome || IE || Safari
            switch (keyCode) {
                case 'ArrowDown':
                case 'Down':
                    index =
                        this.state.index === undefined
                            ? 0
                            : this.state.index + 1;
                    this.setState({
                        index:
                            index > React.Children.count(this.props.children) - 1
                                ? React.Children.count(this.props.children) - 1
                                : index,
                    });
                    break;
                case 'ArrowUp':
                case 'Up':
                    index =
                        this.state.index === undefined
                            ? 0
                            : this.state.index - 1;
                    this.setState({
                        index: index < 0 ? 0 : index,
                    });
                    break;
                case 'Enter':
                    index = this.state.index;
                    // @ts-ignore //@todo
                    this.props.onSelect(this.props.children[index].props.value);
                    this.setState({ index: undefined });
                    break;
                case 'Escape':
                    this.props.onClear();
                    this.setState({ index: undefined });
                    break;
            }
        }

        public componentWillReceiveProps(nextProps: PropsWithChildren<Props>) {
            if (
                (React.Children.toArray(nextProps.children) || []).length > 0 &&
                this.state.index === undefined
            ) {
                this.setState({ index: 0 });
            }
            if (
                React.Children.count(this.props.children) === 0 &&
                React.Children.count(nextProps.children) > 0
            ) {
                document.body.addEventListener(
                    'keydown',
                    this.handleKeyListening,
                );
            } else if (
                React.Children.count(this.props.children) > 0 &&
                React.Children.count(nextProps.children) === 0
            ) {
                document.body.removeEventListener(
                    'keydown',
                    this.handleKeyListening,
                );
            }
        }

        public render() {
            return <Component {...this.props} index={this.state.index} />;
        }
    };
};
