import * as React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface SimpleBillProgressProps {
    status?: string;
}

export default class SimpleBillProgress extends React.Component<SimpleBillProgressProps, {}> {
    public static defaultProps = {
        status: undefined,
    };

    private status = {
        'undefined': '',
        'Bíður 1. umræðu': 'await-one',
        'Bíður 2. umræðu': 'await-two',
        'Í nefnd eftir 1. umræðu': 'committee-one',
        'Í nefnd eftir 2. umræðu': 'committee-two',
        'Samþykkt sem lög frá Alþingi': 'law',
        'Vísað til ríkisstjórnar': 'referred',
    };

    public render() {
        return (
            <svg
                width="90px"
                height="18px"
                viewBox="0 0 90 18"
                role="img"
                className={classVariations('simple-bill-progress', [
                    this.status[this.props.status],
                ])}
            >
                >
                <title>{this.props.status}</title>
                <circle
                    className="simple-bill-progress__status simple-bill-progress__status--await-one"
                    cx="9"
                    cy="9"
                    r="8"
                />
                <circle
                    className="simple-bill-progress__status simple-bill-progress__status--await-two"
                    cx="27"
                    cy="9"
                    r="8"
                />
                <circle
                    className="simple-bill-progress__status simple-bill-progress__status--committee-one"
                    cx="45"
                    cy="9"
                    r="8"
                />
                <circle
                    className="simple-bill-progress__status simple-bill-progress__status--committee-two"
                    cx="63"
                    cy="9"
                    r="8"
                />
                <circle
                    className="simple-bill-progress__status simple-bill-progress__status--low"
                    cx="81"
                    cy="9"
                    r="8"
                />
            </svg>
        );
    }
}
