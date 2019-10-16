import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import Paper from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Paper', module);
stories.addDecorator(withKnobs);


stories.add('Paper', () => {

    return (
        <>
            <Paper>
                <p>Paper element with some text</p>
            </Paper>
        </>
    )
});

