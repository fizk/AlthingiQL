import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {OptionsWithKeyBinding} from '../../elements/Form';
import {speechSearchAction, speechSearchClearAction} from './redux';
import {SpeechSearchResult} from '../../elements/SearchResult';

export default class SearchSpeech extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        issue: PropTypes.number,
        result: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            issue: PropTypes.shape({
                id: PropTypes.number,
            }),
            text: PropTypes.string,
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            }),
            iteration: PropTypes.string,
            type: PropTypes.string,
            congressmanType: PropTypes.string,
            congressman: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                avatar: PropTypes.shape({
                    templateSrc: PropTypes.string,
                }),
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),
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
            <Fragment>
                {this.state.redirect && <Redirect push={true} to={`/loggjafarthing/${this.state.redirect.assembly.id}/thingmal/${this.state.redirect.issue.id}/raedur/${this.state.redirect.id}`} />}
                <OptionsWithKeyBinding
                    isSearching={this.props.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}>
                    {this.props.result.map(result => (
                        <SpeechSearchResult key={`speech-${result.id}`} value={result} />
                    ))}
                </OptionsWithKeyBinding>
            </Fragment>
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

export {SearchSpeechWithStore}
