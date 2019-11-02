import React from "react";
import {Congressman as CongressmanType, ServerFetchStatus} from "../../../../../@types";

interface Props {
    assembly: number;
    congressmen: ServerFetchStatus & {
        congressmen: CongressmanType[];
        substitutes: CongressmanType[];
    };
    onFilter: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

interface State {
    congressmen: ServerFetchStatus & {
        congressmen: CongressmanType[];
        substitutes: CongressmanType[];
    };
    filtering: boolean;
}

const filterComponent = (WrappedComponent: React.ComponentType<Props>): React.ComponentClass<Props, State> => {
    return class WithFilter extends React.Component<Props, State> {

        constructor(props: Props) {
            super(props);

            this.handleOnFilter = this.handleOnFilter.bind(this);
            this.state = {
                filtering: false,
                congressmen: {
                    loading:this.props.congressmen.loading,
                    error:this.props.congressmen.error,
                    congressmen: this.props.congressmen.congressmen,
                    substitutes: this.props.congressmen.substitutes
                }
            }
        }

        static getDerivedStateFromProps(props: Props, state: State): Partial<State> | null {
            if (!state.filtering) {
                return {
                    congressmen: {
                        congressmen: props.congressmen.congressmen,
                        substitutes: props.congressmen.substitutes,
                        loading: props.congressmen.loading,
                        error: props.congressmen.error,
                    }
                }
            }
            return {
                congressmen: {
                    congressmen: state.congressmen.congressmen,
                    substitutes: state.congressmen.substitutes,
                    loading: props.congressmen.loading,
                    error: props.congressmen.error,
                }
            }
        }

        handleOnFilter(event: React.SyntheticEvent<HTMLInputElement>): void {
            try {
                const regex = new RegExp((event.target as HTMLInputElement).value, 'iug');

                const filteredCongressmen = this.props.congressmen.congressmen.filter(congressmen => (
                    congressmen.name.match(regex)
                ));
                const filteredSubstitutes = this.props.congressmen.substitutes.filter(congressmen => (
                    congressmen.name.match(regex)
                ));
                this.setState({
                    filtering: true,
                    congressmen: {
                        loading: false,
                        error: undefined,
                        congressmen: filteredCongressmen,
                        substitutes: filteredSubstitutes,
                    }
                })
            } catch (e) {
                return void 0;
            }
        }

        render(): React.ReactNode {
            return <WrappedComponent {...this.props} congressmen={this.state.congressmen} onFilter={this.handleOnFilter} />;
        }
    }

};
export default filterComponent;
