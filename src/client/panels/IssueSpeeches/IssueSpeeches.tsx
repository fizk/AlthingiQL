import * as React from 'react';
import {Fragment} from 'react';
import Congressman from '../../elements/Congressman';
import SearchSpeech from '../../components/SearchSpeech';
import Blank from '../../elements/Blank/index';
import Loading from '../../elements/Loading/index';
import { H4 } from '../../elements/Headline';
import SpeechCard from '../../elements/SpeechCard';
import ScrollIntoView from '../../elements/ScrollIntoView';
import {Speech as SpeechType} from '../../../../@types';

interface Props {
    assembly: number;
    issue: number;
    speech?: string;
    speeches?: SpeechType[];
    done?: boolean;
    loadMore?: (...args: any[]) => any;
    loading?: boolean;
}

export default class IssueSpeeches extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        issue: undefined,
        speech: undefined,
        speeches: [],
        loadMore: () => {},
        done: true,
        loading: false,
    };

    public render() {
        return (
            <Fragment>
                <SearchSpeech
                    assembly={(this.props.speeches || []).length > 0 ? (this.props.speeches || [])[0].assembly.id : undefined}
                    issue={(this.props.speeches || []).length > 0 ? (this.props.speeches || [])[0].issue.id : undefined}
                />
                <ul>
                    {(this.props.speeches || []).map(speech => (
                        <li key={speech.id}
                            style={{backgroundColor: speech.id === this.props.speech ? 'pink' : 'transparent'}}>
                            <ScrollIntoView active={speech.id === this.props.speech}>
                                <SpeechCard speech={speech}>
                                    <Congressman
                                        congressman={speech.congressman}
                                        party={speech.congressman.party}>
                                        <H4>{speech.congressmanType}</H4>
                                    </Congressman>
                                </SpeechCard>
                            </ScrollIntoView>
                        </li>
                    ))}
                </ul>
                {this.props.loading === true && <Loading />}
                {this.props.loading === false && (this.props.speeches || []).length === 0 && <Blank />}
                {!this.props.done && (
                    <button onClick={this.props.loadMore}>[more]</button>
                )}
            </Fragment>
        );
    }
}
