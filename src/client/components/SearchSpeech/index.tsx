import * as React from 'react';
import {Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {OptionsWithKeyBinding} from '../../elements/Form';
import {SpeechSearchResult} from '../../elements/SearchResult';
import ApolloClient from 'apollo-client/ApolloClient';
import {searchIssueSpeeches} from './graphql';
import {throttle} from 'throttle-debounce';
import {Speech as SpeechType} from '../../../../@types';

interface Props {
    assembly?: number;
    issue?: number;
}

interface State {
    redirect: SpeechType | undefined;
    results: SpeechType[];
    isSearching: boolean;
    isError: boolean;
}

interface Context {
    client: ApolloClient<any>;
}

export default class SearchSpeech extends React.Component<Props, State, Context> {
    public static defaultProps = {
        assembly: undefined,
        issue: undefined,
    };

    public static contextTypes = {
        client: () => {},
    };

    public state = {
        redirect: undefined,
        results: [],
        isSearching: false,
        isError: false,
    };

    public constructor(props: Props, context: Context) {
        super(props, context);
        this.handleOnChange = throttle<(value: string) => void>(500, false, this.handleOnChange);
    }

    protected handleOnChange = (value: string): void => {
        if (value.trim() !== '') {
            this.setState({isSearching: true, isError: false});
            this.context.client.query({
                query: searchIssueSpeeches,
                fetchPolicy: 'no-cache',
                variables: {issue: this.props.issue, assembly: this.props.assembly, query: value},
            }).then((response: any) => response.data.SearchIssueSpeeches)
                .then((json: any) => this.setState({results: json, isSearching: false}))
                .catch((error: any) => {
                    this.setState({results: [], isError: error.message});
                });
        }
    };

    protected handleOnSelect = (value: SpeechType): void => {
        this.setState({results: [], redirect: value});
    };

    protected handleOnClear = (): void => {
        this.setState({results: [], isError: false, isSearching: false});
    };

    public render() {
        return (
            <Fragment>
                {this.state.redirect && (
                    <Redirect
                        push={true}
                        to={`/loggjafarthing/${
                            (this.state.redirect! as SpeechType).assembly.id
                        }/thingmal/${(this.state.redirect! as SpeechType).issue.id}/raedur/${(this.state.redirect! as SpeechType).id}`}
                    />
                )}
                <OptionsWithKeyBinding
                    isError={this.state.isError}
                    isSearching={this.state.isSearching}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}>
                    {(this.state.results as SpeechType[]).map(result => (
                        <SpeechSearchResult key={`speech-${result.id}`} value={result}/>
                    ))}
                </OptionsWithKeyBinding>
            </Fragment>
        );
    }
}
