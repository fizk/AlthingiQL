import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs} from '@storybook/addon-knobs';
import {Empty, Spinner} from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Icon', module);
stories.addDecorator(withKnobs);

stories.add('All', () => {

    return (
        <ul>
            <li>
                <Empty/>
                Empty
            </li>
            <li>
                <Spinner/>
                Spinner
            </li>
        </ul>
    )
});
