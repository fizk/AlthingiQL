import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import IssueStatusPieChart from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Chart', module);
stories.addDecorator(withKnobs);


stories.add('IssueStatusPieChart', () => {
    const source = [{
        count: 301,
        status: 'string',
    }, {
        count: 110,
        status: 'string',
    }, {
        count: 546,
        status: 'string',
    }];
    return (
        <ul>
            <li>
                <IssueStatusPieChart source={source} />
            </li>
        </ul>
    )
});
