import React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss'

interface Props {
    type: string;
    status: string | null;
}

export default class IssueStatus extends React.Component<Props> {
    private status: {[key: string]: string} = {
        'undefined': '',

        'Fyrirspurnin var kölluð aftur': 'yellow',
        'Fyrirspurninni var ekki svarað': 'red',
        'Fyrirspurnin var felld niður vegna ráðherraskipta': 'red',
        'Fyrirspurninni var svarað skriflega': 'green',
        'Fyrirspurninni var svarað munnlega': 'green',

        'Samþykkt sem ályktun Alþingis': 'green',
        'Í nefnd eftir 1. umræðu': 'committee-1',
        'Í nefnd eftir 2. umræðu': 'committee-2',
        'Bíður 1. umræðu': 'debate-1',
        'Bíður 2. umræðu': 'debate-2',
        'Bíður 3. umræðu': 'debate-3',

        'Ekki samþykkt': 'red',
        'Vísað til ríkisstjórnar': 'blue',
        'Samþykkt sem lög frá Alþingi': 'green',
    };

    render(): React.ReactNode {
        const map: {[key: string]: number} = {
            'a': 3,
            'l': 5,
            'm': 1,
            'q': 1,
        };
        const length: number = map[this.props.type];

        return (
            <svg width={length * 16} height={16} viewBox={`0 0 ${length * 16} 16`} role="image">
                <title>{this.props.status}</title>
                <g className={classVariations('issue-status', [this.status[this.props.status || 'undefined']])}>
                    {Array.from({length: length}).map((item, index) => (
                        <circle
                            key={`issue-item-${index}`}
                            className="issue-status__item"
                            cx={(index * 16) + 8}
                            cy="8"
                            r="8"
                        />
                    ))}
                </g>
            </svg>
        );
    }
}
