import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import InflationChart from '../../src/client/elements/InflationChart';

const period = {
    from: '2013-06-06',
    to: '2013-09-30',
};
const inflation = [
    {
        __typename: 'Inflation',
        date: '2013-05-29',
        id: 20130529,
        value: 3.3,
    },
    {
        __typename: 'Inflation',
        date: '2013-06-27',
        id: 20130627,
        value: 3.3,
    },
    {
        __typename: 'Inflation',
        date: '2013-07-30',
        id: 20130730,
        value: 3.8,
    },
    {
        __typename: 'Inflation',
        date: '2013-08-28',
        id: 20130828,
        value: 4.3,
    },
    {
        __typename: 'Inflation',
        date: '2013-09-26',
        id: 20130926,
        value: 3.9,
    },
    {
        __typename: 'Inflation',
        date: '2013-10-25',
        id: 20131025,
        value: 3.6,
    },
    {
        __typename: 'Inflation',
        date: '2013-11-27',
        id: 20131127,
        value: 3.7,
    },
    {
        __typename: 'Inflation',
        date: '2013-12-20',
        id: 20131220,
        value: 4.2,
    },
    {
        __typename: 'Inflation',
        date: '2014-01-30',
        id: 20140130,
        value: 3.1,
    },
    {
        __typename: 'Inflation',
        date: '2014-02-27',
        id: 20140227,
        value: 2.1,
    },
    {
        __typename: 'Inflation',
        date: '2014-03-26',
        id: 20140326,
        value: 2.2,
    },
    {
        __typename: 'Inflation',
        date: '2014-04-29',
        id: 20140429,
        value: 2.3,
    },
    {
        __typename: 'Inflation',
        date: '2014-05-28',
        id: 20140528,
        value: 2.4,
    },
    {
        __typename: 'Inflation',
        date: '2014-06-27',
        id: 20140627,
        value: 2.2,
    },
    {
        __typename: 'Inflation',
        date: '2014-07-23',
        id: 20140723,
        value: 2.4,
    },
    {
        __typename: 'Inflation',
        date: '2014-08-27',
        id: 20140827,
        value: 2.2,
    },
    {
        __typename: 'Inflation',
        date: '2014-09-25',
        id: 20140925,
        value: 1.8,
    },
    {
        __typename: 'Inflation',
        date: '2014-10-29',
        id: 20141029,
        value: 1.9,
    },
    {
        __typename: 'Inflation',
        date: '2014-11-26',
        id: 20141126,
        value: 1,
    },
    {
        __typename: 'Inflation',
        date: '2014-12-19',
        id: 20141219,
        value: 0.8,
    },
    {
        __typename: 'Inflation',
        date: '2015-01-29',
        id: 20150129,
        value: 0.8,
    },
    {
        __typename: 'Inflation',
        date: '2015-02-26',
        id: 20150226,
        value: 0.8,
    },
    {
        __typename: 'Inflation',
        date: '2015-03-27',
        id: 20150327,
        value: 1.6,
    },
    {
        __typename: 'Inflation',
        date: '2015-04-29',
        id: 20150429,
        value: 1.4,
    },
    {
        __typename: 'Inflation',
        date: '2015-05-28',
        id: 20150528,
        value: 1.6,
    },
    {
        __typename: 'Inflation',
        date: '2015-06-26',
        id: 20150626,
        value: 1.5,
    },
    {
        __typename: 'Inflation',
        date: '2015-07-23',
        id: 20150723,
        value: 1.9,
    },
    {
        __typename: 'Inflation',
        date: '2015-08-27',
        id: 20150827,
        value: 2.2,
    },
    {
        __typename: 'Inflation',
        date: '2015-09-25',
        id: 20150925,
        value: 1.9,
    },
    {
        __typename: 'Inflation',
        date: '2015-10-29',
        id: 20151029,
        value: 1.8,
    },
    {
        __typename: 'Inflation',
        date: '2015-11-26',
        id: 20151126,
        value: 2,
    },
    {
        __typename: 'Inflation',
        date: '2015-12-22',
        id: 20151222,
        value: 2,
    },
    {
        __typename: 'Inflation',
        date: '2016-01-28',
        id: 20160128,
        value: 2.1,
    },
    {
        __typename: 'Inflation',
        date: '2016-02-25',
        id: 20160225,
        value: 2.2,
    },
    {
        __typename: 'Inflation',
        date: '2016-03-30',
        id: 20160330,
        value: 1.5,
    },
];

storiesOf('InflationChart', module)
    .add('input', () => (
        <InflationChart inflation={inflation} period={period} />
    ));
