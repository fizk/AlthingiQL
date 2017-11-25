import React from 'react';
import PropTypes from 'prop-types';
import classVariations from '../../utils/classVariations';

class Badge extends React.Component {
    static propTypes = {
        variations: PropTypes.array,
        color: PropTypes.string
    };

    static defaultProps = {
        variations: [],
        color: undefined
    };

    render() {
        const {color, variations, ...rest} = this.props;
        return (
            <div
                {...rest}
                style={{backgroundColor: `#${color}`}}
                className={classVariations('badge', variations)} />
        )
    }
}

export {Badge}
