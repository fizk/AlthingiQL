import React from 'react';
import PropTypes from 'prop-types';
import classVariations from '../../utils/classVariations';

export class SimpleRequestProgress extends React.Component {
    static propTypes = {
        status: PropTypes.string,
    };

    static defaultProps = {
        status: undefined,
    };

    constructor(props) {
        super(props);

        this.status = {
            undefined : '',
            'Fyrirspurnin var felld niður vegna ráðherraskipta' : 'dismissed',
            'Fyrirspurninni var ekki svarað' : 'not-answered',
            'Fyrirspurninni var svarað skriflega' : 'answered',
            'Fyrirspurnin var kölluð aftur' : '',
            'Fyrirspurninni var svarað munnlega' : 'answered',
        }
    }

    render() {
        return (
            <svg width="18px" height="18px" viewBox="0 0 18 18"
                 alt={this.props.status}
                 role="img"
                 className={classVariations('simple-request-progress', [this.status[this.props.status]])}>>
                <title>{this.props.status}</title>
                <circle className="simple-request-progress__status" cx="9" cy="9" r="8" />
            </svg>
        )
    }
}
