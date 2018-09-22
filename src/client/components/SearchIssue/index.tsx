import * as React from "react";
import { Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { OptionsWithKeyBinding } from "../../elements/Form";
import { issueSearchAction, issueClearAction } from "./redux";
import { IssueSearchResult } from "../../elements/SearchResult";

type SearchIssueProps = {
    assembly?: number,
    result?: {
        id?: number,
        assembly?: {
            id?: number
        },
        category?: string,
        name?: string,
        subName?: string,
        type?: string,
        typeName?: string,
        typeSubName?: string,
        status?: string,
        question?: string,
        goal?: string,
        majorChanges?: string,
        changesInLaw?: string,
        costsAndRevenues?: string,
        deliveries?: string,
        additionalInformation?: string,
        date?: string,
        proponents?: {
            id?: number,
            name?: string,
            party?: {
                id?: number,
                name?: string,
                color?: string
            }
        }[]
    }[],
    isSearching?: boolean,
    onSearch?: (...args: any[]) => any,
    onClear?: (...args: any[]) => any
};

type SearchIssueState = {
    redirect: any | undefined
};

export default class SearchIssue extends React.Component<SearchIssueProps, SearchIssueState> {
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
                        }/thingmal/${this.state.redirect.id}`}
                    />
                )}
                <OptionsWithKeyBinding
                    isError={false}
                    isSearching={this.props.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}
                >
                    {this.props.result.map(result => (
                        <IssueSearchResult
                            key={`search-result-${result.id}`}
                            issue={result}
                        />
                    ))}
                </OptionsWithKeyBinding>
            </Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        result: state.issueSearch.result,
        isSearching: state.issueSearch.loading
    };
};
const mapDispatchToProps = () => {
    const throttleIssueSearchAction = issueSearchAction();
    return (dispatch, ownProps) => ({
        onSearch: query =>
            dispatch(
                throttleIssueSearchAction(
                    ownProps.assembly,
                    ownProps.issue,
                    query
                )
            ),
        onClear: () => dispatch(issueClearAction())
    });
};
const SearchIssueWithStore = connect(
    mapStateToProps,
    mapDispatchToProps()
)(SearchIssue);
export { SearchIssueWithStore };
