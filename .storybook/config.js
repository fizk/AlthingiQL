import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';

function loadStories() {
    // require('../stories/elements/Congressman.tsx');
    require('../src/client/elements/Congressman/__story__/Congressman');
    require('../src/client/elements/Avatar/__story__/Avatar');
    require('../src/client/elements/Badge/__story__/Badge');
    require('../src/client/elements/Blank/__story__/Blank');
    require('../src/client/elements/Loading/__story__/Loading');
    require('../src/client/elements/PieChart/__story__/PieChart');
    require('../src/client/elements/InflationChart/__story__/InflationChart');
    require('../src/client/elements/ProgressChart/__story__/ProgressChart');
    // require('../stories/elements/Form.tsx');
    // require('../stories/elements/IssueBadge.tsx');
    // require('../stories/elements/Headline.tsx');
    // require('../stories/components/SearchSpeech.tsx');
    // require('../stories/elements/HorizontalChart.tsx');
    // require('../stories/elements/PieChart/PieChart.tsx');
    // require('../stories/elements/InflationChart.tsx');
}

addDecorator((storyFn) => React.createElement('div', {style: {padding: 20}}, storyFn()));

configure(loadStories, module);
