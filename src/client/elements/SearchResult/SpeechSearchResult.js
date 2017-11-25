import React from 'react';
import PropTypes from 'prop-types';
import classVariations from '../../utils/classVariations';
import SpeechCard from '../SpeechCard';
import {Congressman} from '../Congressman';
import {H4} from '../Headline';

export default class IssueSearchResult extends React.Component {

    static propTypes = {
        onSelect: PropTypes.func,
        isSelected: PropTypes.bool,
        variations: PropTypes.array,
        value: PropTypes.shape({
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
        }),
    };

    static defaultProps = {
        onSelect: () => {},
        value: undefined,
        isSelected: false,
        variations: []
    };

    render() {
        const variations = this.props.isSelected
            ? this.props.variations.concat(['active'])
            : this.props.variations;

        return (
            <div className={classVariations('options-list__item', variations)}
                 onClick={() => this.props.onSelect(this.props.value)}>
                <SpeechCard speech={this.props.value}>
                    <Congressman congressman={this.props.value.congressman}
                                 party={this.props.value.congressman.party}>
                        <H4>{this.props.value.congressmanType}</H4>
                    </Congressman>
                </SpeechCard>
            </div>
        );
    }
}
