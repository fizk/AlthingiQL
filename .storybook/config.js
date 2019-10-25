import * as React from 'react';
import {configure, addDecorator} from '@storybook/react';

function loadStories() {
    // require('../stories/elements/Congressman.tsx');
    // require('../src/client/elements/Congressman/__story__');
    // require('../src/client/elements/Avatar/__story__');
    // require('../src/client/elements/Paper/__story__');
    // require('../src/client/elements/Badge/__story__/Badge');
    // require('../src/client/elements/Icons/__story__');
    // require('../src/client/elements/Issue/__story__');
    // require('../src/client/elements/IssueStatus/__story__');
    // require('../src/client/elements/Blank/__story__');
    // require('../src/client/elements/Loading/__story__/Loading');
    // require('../src/client/elements/PieChart/__story__/PieChart');
    // require('../src/client/elements/IssueStatusPieChart/__story__/IssueStatusPieChart');
    // require('../src/client/elements/InflationChart/__story__/InflationChart');
    // require('../src/client/elements/ProgressChart/__story__/ProgressChart');
    //
    // require('../src/client/panels/Assembly/__story__');
    // require('../src/client/panels/AssemblyIssues/__story__');
    // require('../src/client/panels/AssemblyIssue/__story__');
    // require('../src/client/panels/AssemblyCongressmen/__story__');
    // require('../src/client/panels/AssemblyCongressman/__story__');
    // require('../src/client/panels/AssemblyParty/__story__');
    // require('../src/client/panels/AssemblyPlenaries/__story__');
    // require('../src/client/panels/AssemblyPlenary/__story__');
    // require('../src/client/panels/IssueDocuments/__story__');

    // require('../stories/elements/Form.tsx');
    // require('../stories/elements/IssueBadge.tsx');
    // require('../stories/elements/Headline.tsx');
    // require('../stories/components/SearchSpeech.tsx');
    // require('../stories/elements/HorizontalChart.tsx');
    // require('../stories/elements/PieChart/PieChart.tsx');
    // require('../stories/elements/InflationChart.tsx');

    require('../src/client/theme/layouts/Container/__story__');
    require('../src/client/theme/components/AssemblyHeader/__story__');
    require('../src/client/theme/pages/__storybook__/main');

    require('../src/client/theme/elements/Avatar/__story__');
    require('../src/client/theme/components/Congressman/__story__');
}

addDecorator((storyFn) => React.createElement('div', {style: {padding: 20}}, storyFn()));

configure(loadStories, module);
