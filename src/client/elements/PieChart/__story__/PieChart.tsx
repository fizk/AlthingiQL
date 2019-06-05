import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import PieChart from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Chart', module);
stories.addDecorator(withKnobs);


stories.add('PieChart', () => {
    const source = [{
        value: 3,
        key: 'string',
        color: '#9c27b0',
        label: 'string',
    }, {
        value: 1,
        key: 'string',
        color: '#e91e63',
        label: 'string',
    }, {
        value: 5,
        key: 'string',
        color: '#f44336',
        label: 'string',
    }];
    return (
        <ul>
            <li>
                <PieChart source={source} formatValue={(label, value, total) => value} />
            </li>
            <li>
                <PieChart source={source} formatValue={(label, value, total) => value} variations={['sm']} />
            </li>
            <li>
                <PieChart source={source} formatValue={(label, value, total) => value} variations={['md']} />
            </li>
            <li>
                <PieChart source={source} formatValue={(label, value, total) => value} variations={['lg']} />
            </li>
        </ul>
    )
});
