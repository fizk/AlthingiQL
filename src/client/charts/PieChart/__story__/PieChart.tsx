import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import PieChart from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Chart', module);
stories.addDecorator(withKnobs);


stories.add('PieChart', () => {
    const source = [{
        value: 301,
        key: 'string',
        color: '#9c27b0',
        label: 'string',
    }, {
        value: 110,
        key: 'string',
        color: '#e91e63',
        label: 'string',
    }, {
        value: 546,
        key: 'string',
        color: '#f44336',
        label: 'string',
    }];
    return (
        <ul>
            <li>
                <PieChart source={source}
                          onEnter={action('onEnter')}
                          onLeave={action('onLeave')}
                />
            </li>
            <li>
                <PieChart source={source}
                          variations={['sm']}
                />
            </li>
            <li>
                <PieChart source={source}
                          variations={['md']}
                />
            </li>
            <li>
                <PieChart source={source}
                          variations={['lg']}
                />
            </li>
        </ul>
    )
});
