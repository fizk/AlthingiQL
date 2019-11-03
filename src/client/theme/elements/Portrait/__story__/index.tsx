import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select} from '@storybook/addon-knobs';
import Portrait from '..';
// @ts-ignore
import notes from '../readme.md';
import '../../../global.scss';

const stories = storiesOf('Elements/Portrait', module);
stories.addDecorator(withKnobs);


stories.add('Scroll load', () => {
    const props = {
        id: select('Image ID', {0: '0', 10: '10', 1001: '1001', 1014: '1014'}, '10', undefined),
    };
    return (
        <Portrait src={`https://picsum.photos/id/${props.id}/330`} title={`this is large`} />
    )
}, {notes: {markdown: notes}});
