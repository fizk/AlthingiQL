import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Loading from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Loading', module);
stories.addDecorator(withKnobs);


stories.add('Loading', () => {
    return (
        <Loading />
    )
});
