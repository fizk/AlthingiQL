import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import Blank from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Blank', module);
stories.addDecorator(withKnobs);


stories.add('Blank', () => {
    return (
        <Blank />
    )
});
