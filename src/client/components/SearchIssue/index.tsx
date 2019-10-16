import * as React from 'react';
import { Fragment } from 'react';
// import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { OptionsWithKeyBinding } from '../../elements/Form';
// import { issueSearchAction, issueClearAction } from './redux';
import { IssueSearchResult } from '../../elements/SearchResult';
import { Issue as IssueType } from '../../../../@types';

interface Props {
    assembly: number;
    result?: IssueType[];
    isSearching?: boolean;
    onSearch?: (...args: any[]) => any;
    onClear?: (...args: any[]) => any;
}

interface State {
    redirect: any | undefined;
}

export default class SearchIssue extends React.Component<Props, State> {
    public static defaultProps = {
        assembly: undefined,
        issue: undefined,
        result: [],
        isSearching: false,
        onSearch: () => {},
        onClear: () => {},
    };

  constructor(props: Props) {
        super(props);
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSelect = this.handleOnSelect.bind(this);
        this.handleOnClear = this.handleOnClear.bind(this);
        this.state = {
            redirect: undefined,
        };
    }

  public handleOnChange(value: string) {
        if (value.trim() !== '') {
            this.props.onSearch && this.props.onSearch(value);
        }
    }

  public handleOnSelect(value: any | undefined) {
      this.props.onClear && this.props.onClear();
        this.setState({ redirect: value });
    }

  public handleOnClear() {
      this.props.onClear && this.props.onClear();
    }

  public render() {
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
                    isSearching={this.props.isSearching || false}
                    onClear={this.handleOnClear}
                    onChange={this.handleOnChange}
                    onSelect={this.handleOnSelect}
                >
                    {(this.props.result || []).map(result => (
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
// const mapStateToProps = state => {
//     return {
//         result: state.issueSearch.result,
//         isSearching: state.issueSearch.loading,
//     };
// };
// const mapDispatchToProps = () => {
//     const throttleIssueSearchAction = issueSearchAction();
//
//     return (dispatch, ownProps) => ({
//         onSearch: query =>
//             dispatch(
//                 throttleIssueSearchAction(
//                     ownProps.assembly,
//                     ownProps.issue,
//                     query,
//                 ),
//             ),
//         onClear: () => dispatch(issueClearAction()),
//     });
// };
// const SearchIssueWithStore = connect(
//     mapStateToProps,
//     mapDispatchToProps(),
// )(SearchIssue);
// export { SearchIssueWithStore };
