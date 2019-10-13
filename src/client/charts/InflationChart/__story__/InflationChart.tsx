import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import InflationChart from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Chart', module);
stories.addDecorator(withKnobs);


stories.add('InflationChart Small', () => {
    const inflation = [
        {
            id: 20171128,
            value: 1.7,
            date: "2017-11-28"
        },
        {
            id: 20171221,
            value: 1.9,
            date: "2017-12-21"
        },
        {
            id: 20180129,
            value: 2.4,
            date: "2018-01-29"
        },
        {
            id: 20180227,
            value: 2.3,
            date: "2018-02-27"
        },
        {
            id: 20180326,
            value: 2.8,
            date: "2018-03-26"
        },
        {
            id: 20180427,
            value: 2.3,
            date: "2018-04-27"
        },
        {
            id: 20180529,
            value: 2,
            date: "2018-05-29"
        },
        {
            id: 20180627,
            value: 2.6,
            date: "2018-06-27"
        },
        {
            id: 20180723,
            value: 2.7,
            date: "2018-07-23"
        },
        {
            id: 20180830,
            value: 2.6,
            date: "2018-08-30"
        }
    ];
    return (
        <ul>
            <li>
                <InflationChart inflation={inflation} period={{from: '2018-01-29', to: '2018-04-27'}} />
            </li>
        </ul>
    )
});

stories.add('InflationChart Large', () => {
    const inflation = [
        {
            id: 20171128,
            value: 101.7,
            date: "2017-11-28"
        },
        {
            id: 20171221,
            value: 10.9,
            date: "2017-12-21"
        },
        {
            id: 20180129,
            value: 21.4,
            date: "2018-01-29"
        },
        {
            id: 20180227,
            value: 12.3,
            date: "2018-02-27"
        },
        {
            id: 20180326,
            value: 28.8,
            date: "2018-03-26"
        },
        {
            id: 20180427,
            value: 112.3,
            date: "2018-04-27"
        },
        {
            id: 20180529,
            value: 29,
            date: "2018-05-29"
        },
        {
            id: 20180627,
            value: 45.6,
            date: "2018-06-27"
        },
        {
            id: 20180723,
            value: 71.7,
            date: "2018-07-23"
        },
        {
            id: 20180830,
            value: 21.6,
            date: "2018-08-30"
        }
    ];
    return (
        <ul>
            <li>
                <InflationChart inflation={inflation} period={{from: '2018-01-29', to: '2018-04-27'}} />
            </li>
        </ul>
    )
});
