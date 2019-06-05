import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Avatar from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);


stories.add('Avatar', () => {
    return (
        <ul>
            <li>
                <figure>
                    <Avatar src={"https://picsum.photos/id/237/16"} variations={['sm']} />
                    <figcaption>SM</figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <Avatar src="https://picsum.photos/id/237/32" variations={['md']} />
                    <figcaption>MD</figcaption>
                </figure>
            </li>
            <li>
                <figure>
                    <Avatar src="https://picsum.photos/id/237/46" variations={['lg']} title={`this is large`} />
                    <figcaption>LG</figcaption>
                </figure>
            </li>
        </ul>

    )
});
