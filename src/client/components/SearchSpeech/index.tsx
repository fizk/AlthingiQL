import * as React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { OptionsWithKeyBinding } from "../../elements/Form";
import { speechSearchAction, speechSearchClearAction } from "./redux";
import { SpeechSearchResult } from "../../elements/SearchResult";

type SearchSpeechProps = {
    assembly?: number,
    issue?: number,
    result?: {
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
    }[],
    isSearching?: boolean,
    onSearch?: (...args: any[]) => any,
    onClear?: (...args: any[]) => any
};

type SearchSpeechState = {
    redirect: any | undefined
};

export default class SearchSpeech extends React.Component<SearchSpeechProps, SearchSpeechState> {
    static defaultProps = {
        assembly: undefined,
        issue: undefined,
        result: [],
        isSearching: false,
        onSearch: () => {},
        onClear: () => {}
    };
    constructor(props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.state = {
            redirect: undefined
        };
    }
    handleOnChange(value) {
        if (value.trim() !== "") {
            this.props.onSearch(value);
        }
    }
    handleOnSelect(value) {
        this.props.onClear();
        this.setState({ redirect: value });
    }
    handleOnClear() {
        this.props.onClear();
    }
    render() {
        return (
            <Fragment>
                {this.state.redirect && (
                    <Redirect
                        push={true}
                        to={`/loggjafarthing/${
                            this.state.redirect.assembly.id
                        }/thingmal/${this.state.redirect.issue.id}/raedur/${
                            this.state.redirect.id
                        }`}
                    />
                )}
                <OptionsWithKeyBinding
                    isSearching={this.props.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}
                >
                    {this.props.result.map(result => (
                        <SpeechSearchResult
                            key={`speech-${result.id}`}
                            value={result}
                        />
                    ))}
                </OptionsWithKeyBinding>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        result: state.speechSearch.result,
        isSearching: state.speechSearch.loading
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: query =>
            dispatch(
                speechSearchAction(ownProps.assembly, ownProps.issue, query)
            ),
        onClear: () => dispatch(speechSearchClearAction())
    };
};
const SearchSpeechWithStore = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchSpeech);
export { SearchSpeechWithStore };
