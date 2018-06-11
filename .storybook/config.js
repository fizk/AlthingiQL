import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Application from '../src/client/elements/Application';

const CenterDecorator = (storyFn) => (
    <Application>
        <div style={{padding: '20px'}}>
            { storyFn() }
        </div>
    </Application>
);
addDecorator(CenterDecorator);

function loadStories() {
    require('../stories/elements/Congressman.js');
    require('../stories/elements/Form.js');
    require('../stories/elements/IssueBadge.js');
    require('../stories/elements/Headline.js');
    require('../stories/components/SearchSpeech.js');
    require('../stories/elements/HorizontalChart.js');
    require('../stories/elements/PieChart/PieChart.js');
}

configure(loadStories, module);
