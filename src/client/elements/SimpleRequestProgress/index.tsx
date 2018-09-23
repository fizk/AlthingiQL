import * as React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface SimpleRequestProgressProps {
    status?: string;
}

export default class SimpleRequestProgress extends React.Component<SimpleRequestProgressProps, {}> {
    public static defaultProps = {
        status: undefined,
    };

    private status = {
        'undefined': '',
        'Fyrirspurnin var felld niður vegna ráðherraskipta': 'dismissed',
        'Fyrirspurninni var ekki svarað': 'not-answered',
        'Fyrirspurninni var svarað skriflega': 'answered',
        'Fyrirspurnin var kölluð aftur': '',
        'Fyrirspurninni var svarað munnlega': 'answered',
    };

    public render() {
        return (
            <svg
                width="18px"
                height="18px"
                viewBox="0 0 18 18"
                role="img"
                className={classVariations('simple-request-progress', [
                    this.status[this.props.status],
                ])}
            >
                >
                <title>{this.props.status}</title>
                <circle
                    className="simple-request-progress__status"
                    cx="9"
                    cy="9"
                    r="8"
                />
            </svg>
        );
    }
}
