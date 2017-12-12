import { configure } from '@storybook/react';

function loadStories() {
    require('../stories/pages/IssueSpeeches.js');
    require('../stories/elements/Congressman.js');
    require('../stories/elements/Form.js');
    require('../stories/elements/IssueBadge.js');
    require('../stories/elements/Headline.js');
    require('../stories/components/SearchSpeech.js');
    require('../stories/elements/HorizontalChart.js');
    require('../stories/panels/AssemblyIssues.js');
}

configure(loadStories, module);
