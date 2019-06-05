import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Badge from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Badge', module);
stories.addDecorator(withKnobs);


stories.add('Badge', () => {
    return (
        <ul>
            <li>
                <figure>
                    <Badge variations={['sm']} color={`9c27b0`} />
                    <Badge variations={['sm']} color={`9c27b0`} />
                    <Badge variations={['sm']} color={`9c27b0`} />
                    <Badge variations={['sm']} color={`9c27b0`} />
                    <Badge variations={['sm']} color={`9c27b0`} />
                    <figcaption>SM</figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <Badge variations={['sm']} color={`9c27b0`} />
                    <figcaption>SM</figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <Badge variations={['md']} color={`e91e63`} />
                    <figcaption>MD</figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <Badge variations={['lg']} title={`this is large`} color={`f44336`} />
                    <figcaption>LG</figcaption>
                </figure>
            </li>
        </ul>

    )
});
