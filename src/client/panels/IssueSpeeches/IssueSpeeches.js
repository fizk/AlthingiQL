import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Column} from '../../elements/Grid';
import {Congressman} from '../../elements/Congressman';
import {SearchSpeechWithStore} from '../../components/SearchSpeech';
import {Blank} from "../../elements/Blank/index";
import {Loading} from "../../elements/Loading/index";
import {H4} from "../../elements/Headline";
import SpeechCard from "../../elements/SpeechCard/index";
import ScrollIntoView from "../../elements/ScrollIntoView/index";

export default class IssueSpeeches extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        issue: PropTypes.number,
        speech: PropTypes.string,
        speeches: PropTypes.arrayOf(PropTypes.shape({
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
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            }),

        })),
        done: PropTypes.bool,
        loadMore: PropTypes.func,
        loading: PropTypes.bool,
    };

    static defaultProps = {
        assembly: undefined,
        issue: undefined,
        speech: undefined,
        speeches: [],
        loadMore: () => {},
        done: true,
        loading: false,
    };

    render() {
        return (
            <div>
                <Row>
                    <Column>
                        <SearchSpeechWithStore
                            assembly={this.props.speeches.length > 0 ? this.props.speeches[0].assembly.id : undefined}
                            issue={this.props.speeches.length > 0 ?  this.props.speeches[0].issue.id : undefined} />
                        <ul>
                            {this.props.speeches.map(speech => (
                                <li key={speech.id} style={{backgroundColor: (speech.id === this.props.speech) ? 'pink' : 'transparent'}}>
                                    <ScrollIntoView active={speech.id === this.props.speech}>
                                        <SpeechCard speech={speech}>
                                            <Congressman congressman={speech.congressman}
                                                         party={speech.congressman.party}>
                                                <H4>{speech.congressmanType}</H4>
                                            </Congressman>
                                        </SpeechCard>
                                    </ScrollIntoView>
                                </li>
                            ))}
                        </ul>
                        {this.props.loading === true && <Loading/>}
                        {this.props.loading === false && this.props.speeches.length === 0 && <Blank/>}
                        {!this.props.done && <button onClick={this.props.loadMore}>[more]</button>}
                    </Column>
                </Row>
            </div>
        )
    }
}
