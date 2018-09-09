import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';

function loadStories() {
    require('../stories/elements/Congressman.tsx');
    require('../stories/elements/Form.tsx');
    require('../stories/elements/IssueBadge.tsx');
    require('../stories/elements/Headline.tsx');
    require('../stories/components/SearchSpeech.tsx');
    require('../stories/elements/HorizontalChart.tsx');
    require('../stories/elements/PieChart/PieChart.tsx');
}

addDecorator((storyFn) => React.createElement('div', {style: {padding: 20}}, storyFn()));

configure(loadStories, module);
