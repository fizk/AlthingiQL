import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number} from '@storybook/addon-knobs';
import Avatar from '..';
import '../../../layouts/Container/global.scss';

const stories = storiesOf('Avatar', module);
stories.addDecorator(withKnobs);

stories.add('Sizes', () => {
    const props = {
        size: number('Size', 46),
    };
    return (
        <>
            <Avatar src={`https://picsum.photos/id/1014/${props.size}`}
                size={props.size}/>
            <Avatar src={`https://picsum.photos/id/1014/${props.size}`}
                size={props.size}/>
            <Avatar src={`https://picsum.photos/id/1014/${props.size}`}
                size={props.size}/>
            <Avatar src={`https://picsum.photos/id/1014/${props.size}`}
                size={props.size}/>
            <Avatar src={`https://picsum.photos/id/1014/${props.size}`}
                size={props.size}/>
            <Avatar src={`https://picsum.photos/id/1014/${props.size}`}
                size={props.size}/>
        </>
    )
});
stories.add('Scroll load', () => {
    const props = {
        id: select('Image ID', {0: '0', 10: '10', 1001: '1001', 1014: '1014'}, '10', undefined),
    };
    return (
        <ul>
            <li>
                <Avatar src={`https://picsum.photos/id/${props.id}/16`}
                        size={16}
                        title={'this is some title'}
                        alt={'i am the alt title'} />

            </li>
            <li>
                <Avatar src={`https://picsum.photos/id/${props.id}/32`} size={32} />
            </li>
            <li>
                <p style={{margin: '50px 0 500px 0', textAlign: 'center'}}>Scroll Down</p>
            </li>
            <li>
                <Avatar src={`https://picsum.photos/id/${props.id}/46`} size={46} title={`this is large`} />
            </li>
            <li>
                <Avatar src={`https://picsum.photos/id/${props.id}/146`} size={146} title={`this is large`} />
            </li>
        </ul>
    )
});
