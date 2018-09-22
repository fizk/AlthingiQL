import * as React from 'react';
import {Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {OptionsWithKeyBinding} from '../../elements/Form';
import {SpeechSearchResult} from '../../elements/SearchResult';
import ApolloClient from 'apollo-client/ApolloClient';
import {searchIssueSpeeches} from './graphql';
import {throttle} from 'throttle-debounce';

interface Props {
    assembly?: number;
    issue?: number;
}

interface State {
    redirect: any | undefined;
    results: any[];
    isSearching: boolean;
    isError: boolean;
}

interface Context {
    client: ApolloClient;
}

export default class SearchSpeech extends React.Component<Props, State, Context> {
    public static defaultProps = {
        assembly: undefined,
        issue: undefined,
    };

    public static contextTypes = {
        client: {},
    };

    public state = {
        redirect: undefined,
        results: [],
        isSearching: false,
        isError: false,
    };

    public constructor(props, context) {
        super(props, context);
        this.handleOnChange = throttle(500, this.handleOnChange);
    }

    protected handleOnChange = (value) => {
        if (value.trim() !== '') {
            this.setState({isSearching: true, isError: false});
            this.context.client.query({
                query: searchIssueSpeeches,
                fetchPolicy: 'no-cache',
                variables: {issue: this.props.issue, assembly: this.props.assembly, query: value},
            }).then(response => response.data.SearchIssueSpeeches)
                .then(json => this.setState({results: json, isSearching: false}))
                .catch(error => {
                    this.setState({results: [], isError: error.message});
                });
        }
    };

    protected handleOnSelect = (value) => {
        this.setState({results: [], redirect: value});
    };

    protected handleOnClear = () => {
        this.setState({results: [], isError: false, isSearching: false});
    };

    public render() {
        return (
            <Fragment>
                {this.state.redirect && (
                    <Redirect
                        push={true}
                        to={`/loggjafarthing/${
                            this.state.redirect.assembly.id
                        }/thingmal/${this.state.redirect.issue.id}/raedur/${this.state.redirect.id}`}
                    />
                )}
                <OptionsWithKeyBinding
                    isError={this.state.isError}
                    isSearching={this.state.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}>
                    {this.state.results.map(result => (
                        <SpeechSearchResult key={`speech-${result.id}`} value={result}/>
                    ))}
                </OptionsWithKeyBinding>
            </Fragment>
        );
    }
}
