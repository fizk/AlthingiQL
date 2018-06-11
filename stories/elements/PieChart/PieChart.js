import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import PieChart from '../../../src/client/elements/PieChart/index';
import './index.scss';

storiesOf('PieChart', module)

    .add('PieChart', () => (
        <div>

        <PieChart source={[
            {value: 20, key: 'primary'},
            {value: 60, key: 'secondary'},
            ]} />
        </div>
    ))
;
