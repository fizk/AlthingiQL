import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {OptionsWithKeyBinding} from '../../elements/Form';
import {connect} from 'react-redux';
import {issueSearchAction, issueClearAction} from './redux';
import {IssueSearchResult} from '../../elements/SearchResult';

class SearchIssue extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        result: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({id: PropTypes.number}),
            category: PropTypes.string,
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
            status: PropTypes.string,
            question: PropTypes.string,
            goal: PropTypes.string,
            majorChanges: PropTypes.string,
            changesInLaw: PropTypes.string,
            costsAndRevenues: PropTypes.string,
            deliveries: PropTypes.string,
            additionalInformation: PropTypes.string,
            date: PropTypes.string,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
            }))
        })),
        isSearching: PropTypes.bool,
        onSearch: PropTypes.func,
        onClear: PropTypes.func,
    };

    static defaultProps = {
        assembly: undefined,
        issue: undefined,
        result: [],
        isSearching: false,
        onSearch: () => {},
        onClear: () => {},
    };

    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.state = {
            redirect: undefined
        }
    }

    handleOnChange(value) {
        if (value.trim() !== '') {
            this.props.onSearch(value);
        }
    }

    handleOnSelect(value) {
        this.props.onClear();
        this.setState({redirect: value});
    }

    handleOnClear() {
        this.props.onClear()
    }

    render() {
        return (
            <div>
                {this.state.redirect && <Redirect push={true} to={`/loggjafathing/${this.state.redirect.assembly.id}/thingmal/${this.state.redirect.id}`} />}
                <OptionsWithKeyBinding
                    isSearching={this.props.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}>
                    {this.props.result.map(result => (
                        <IssueSearchResult key={`search-result-${result.id}`} issue={result} />
                    ))}
                </OptionsWithKeyBinding>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.issueSearch.result,
        isSearching: state.issueSearch.loading,
    }
};

const mapDispatchToProps = () => {
    const throttleIssueSearchAction = issueSearchAction();
    return (dispatch, ownProps) => ({
        onSearch: query => dispatch(throttleIssueSearchAction(ownProps.assembly, ownProps.issue,  query)),
        onClear: () => dispatch(issueClearAction())
    })
};

const SearchIssueWithStore = connect(mapStateToProps, mapDispatchToProps())(SearchIssue);

export {SearchIssue, SearchIssueWithStore}
