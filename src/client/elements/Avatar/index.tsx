import React from 'react';
import PropTypes from 'prop-types';
import classVariations from '../../utils/classVariations';
import './_index.scss';

export default class Avatar extends React.Component {
    static propTypes = {
        variations: PropTypes.array,
        src: PropTypes.string,
        title: PropTypes.string,
    };

    static defaultProps = {
        variations: [],
        src: undefined,
        title: undefined,
    };

    fillTemplateSrc(src) {
        return (src || '').replace('{width}', 60).replace('{height}', 60);
    }

    render() {
        const {src, variations, ...rest} = this.props;
        return (
            <div role="image"
                 style={{backgroundImage: `url(${this.fillTemplateSrc(src)})`}}
                 className={classVariations('avatar', variations)}
                 {...rest}
            />
        )
    }
}
