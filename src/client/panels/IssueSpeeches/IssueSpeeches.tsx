import * as React from 'react';
import Congressman from '../../elements/Congressman';
import SearchSpeech from '../../components/SearchSpeech';
import Blank from '../../elements/Blank/index';
import Loading from '../../elements/Loading/index';
import SpeechCard from '../../elements/SpeechCard';
import ScrollIntoView from '../../elements/ScrollIntoView';
import {
    Assembly as AssemblyType,
    Issue as IssueType,
    ServerFetchStatus,
    Speech as SpeechType
} from '../../../../@types';
import './index.scss';


interface Props extends ServerFetchStatus {
    assembly: number;
    issue: number;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    issueProperties: ServerFetchStatus & {
        issue: IssueType;
    };
    speech?: string;
    speeches?: SpeechType[];
    done?: boolean;
    loadMore?: (...args: any[]) => any;
}

export default class IssueSpeeches extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        assemblyProperties: {
            error: undefined,
            loading: false,
            assembly: {
                id: undefined,
                period: {
                    from: undefined,
                    to: undefined,
                },
                division: [],
                cabinet: {
                    title: undefined,
                    period: {from: undefined, to: undefined}
                }
            },
        },
        issue: undefined,
        issueProperties: {
            issue: {
                id: undefined,
                assembly: {id: undefined},
                name: undefined,
                type: {
                    type:  undefined,
                    category: undefined,
                    typeName: undefined,
                    typeSubName: undefined,
                },
                date: undefined,
            },
            loading: false,
            error: undefined,
        },
        speech: undefined,
        speeches: [],
        loadMore: () => {},
        done: true,
        loading: false,
    };

    public render() {
        return (
            <main className="assembly-issue-speeches-panel">
                <section className="assembly-issue-speeches-panel__user"></section>
                <nav className="assembly-issue-speeches-panel__nav"></nav>
                <header className="assembly-issue-speeches-panel__header"></header>
                <aside className="assembly-issue-speeches-panel__aside"></aside>
                <section className="assembly-issue-speeches-panel__items">
                    <ul>
                        {(this.props.speeches || []).map(speech => (
                            <li key={speech.id}
                                style={{backgroundColor: speech.id === this.props.speech ? 'pink' : 'transparent'}}>
                                <ScrollIntoView active={speech.id === this.props.speech}>
                                    <SpeechCard speech={speech}>
                                        <Congressman
                                            congressman={speech.congressman}
                                            party={speech.congressman.party}>
                                            <h4>{speech.congressmanType}</h4>
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
                </section>
                <section className="assembly-issue-speeches-panel_stats"></section>
            </main>
        );
    }
}
