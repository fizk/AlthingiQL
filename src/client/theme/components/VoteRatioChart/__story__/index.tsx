import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {boolean, withKnobs} from '@storybook/addon-knobs';
import faker from 'faker';
import VoteRatioChart from '..';
// @ts-ignore
import notes from '../readme.md';
import '../../../global.scss';

const stories = storiesOf('Components/VoteRatioChart', module);
stories.addDecorator(withKnobs);

stories.add('index', () => {
    const votes = [{
        count: faker.random.number(200),
        vote: 'absence',
    },{
        count: faker.random.number(200),
        vote: 'announced_absence',
    },{
        count: faker.random.number(200),
        vote: 'neutral',
    },{
        count: faker.random.number(200),
        vote: 'partisan',
    }];
    const error = boolean('error', false) ? new Error('error') : undefined;
    const loading = boolean('loading', false);
    return (
        <VoteRatioChart error={error} loading={loading} votes={votes} />
    )
}, {notes: { markdown: notes }});
