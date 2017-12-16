import React from 'react';
import PropTypes from 'prop-types';
import classVariations from '../../utils/classVariations';
import './_index.scss';

export class Avatar extends React.Component {
    static propTypes = {
        variations: PropTypes.array,
        src: PropTypes.string
    };

    static defaultProps = {
        variations: [],
        src: undefined
    };

    render() {
        return (
            <div
                style={{backgroundImage: `url(${this.props.src})`}}
                className={classVariations('avatar', this.props.variations)} />
        )
    }
}
