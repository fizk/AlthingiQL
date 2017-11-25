import React from 'react';
import PropTypes from 'prop-types';
import {OptionsWithKeyBinding} from '../../elements/Form';
import {connect} from 'react-redux';
import {speechSearchAction, speechSearchClearAction} from './redux';
import {Redirect} from 'react-router-dom'
import {SpeechSearchResult} from '../../elements/SearchResult';

class SearchSpeech extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        issue: PropTypes.number,
        result: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            text: PropTypes.string,
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
            })
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
        this.setState({redirect: value})
    }

    handleOnClear() {
        this.props.onClear()
    }

    render() {
        return (
            <div>
                {this.state.redirect && <Redirect push={true} to={`/loggjafathing/${this.state.redirect.assembly.id}/thingmal/${this.state.redirect.issue.id}/raedur/${this.state.redirect.id}`} />}
                <OptionsWithKeyBinding
                    isSearching={this.props.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}>
                    {this.props.result.map(result => (
                        <SpeechSearchResult key={`speech-${result.id}`} value={result} />
                    ))}
                </OptionsWithKeyBinding>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        result: state.speechSearch.result,
        isSearching: state.speechSearch.loading,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSearch: query => dispatch(speechSearchAction(ownProps.assembly, ownProps.issue,  query)),
        onClear: () => dispatch(speechSearchClearAction())
    }
};

const SearchSpeechWithStore = connect(mapStateToProps, mapDispatchToProps)(SearchSpeech);

export {SearchSpeech, SearchSpeechWithStore}
