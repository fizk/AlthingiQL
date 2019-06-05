import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Congressman from '..';
import {H4} from '../../Headline';
import '../../../components/Chrome/index.scss';

const congressman = {
    id: 719,
    name: text('name', 'Oddný G. Harðardóttir'),
    avatar: {
        src: 'https://picsum.photos/60',
        templateSrc: 'https://picsum.photos/id/1025/60',
    }
};

const party = {
    id: 1,
    name: 'Framsoknarflokkurinn',
    color: 'ff8c00'
};

const stories = storiesOf('Congressman', module);
stories.addDecorator(withKnobs);


stories.add('No Body', () => {
    const congressmanProps = {
        ...congressman,
        name: text('Name', 'Langt Nafnsson')
    };
    const partyProps = boolean('Party', true) ? party : undefined;
    return (
        <ul>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} />
            </li>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['sm']} />
            </li>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['md']} />
            </li>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['lg']} />
            </li>
        </ul>
    )
});

stories.add('Body', () => {
    const congressmanProps = {
        ...congressman,
        name: text('Name', 'Langt Nafnsson')
    };
    const partyProps = boolean('Party', true) ? party : undefined;
    return (
        <ul>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} >
                    <H4>She is important</H4>
                    <time>15. Jan 2001</time>
                    <p>
                        Icing chocolate jujubes I love I love I love I love cotton candy pie. Sweet
                        lemon drops cake powder jelly toffee. Tiramisu apple pie icing. I love candy canes
                        chocolate cotton candy.
                    </p>
                    <p>
                        Carrot cake jelly beans dessert jujubes danish. Ice cream tootsie roll I love.
                        I love sweet pastry sweet. Jelly liquorice tootsie roll.
                    </p>
                </Congressman>
            </li>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['sm']} >
                    <H4>She is important</H4>
                    <time>15. Jan 2001</time>
                    <p>
                        Icing chocolate jujubes I love I love I love I love cotton candy pie. Sweet
                        lemon drops cake powder jelly toffee. Tiramisu apple pie icing. I love candy canes
                        chocolate cotton candy.
                    </p>
                    <p>
                        Carrot cake jelly beans dessert jujubes danish. Ice cream tootsie roll I love.
                        I love sweet pastry sweet. Jelly liquorice tootsie roll.
                    </p>
                </Congressman>
            </li>
            <li style={{padding: '.5rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['md']} >
                    <H4>She is important</H4>
                    <time>15. Jan 2001</time>
                    <p>
                        Icing chocolate jujubes I love I love I love I love cotton candy pie. Sweet
                        lemon drops cake powder jelly toffee. Tiramisu apple pie icing. I love candy canes
                        chocolate cotton candy.
                    </p>
                    <p>
                        Carrot cake jelly beans dessert jujubes danish. Ice cream tootsie roll I love.
                        I love sweet pastry sweet. Jelly liquorice tootsie roll.
                    </p>
                </Congressman>
            </li>
            <li>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['lg']} >
                    <H4>She is important</H4>
                    <time>15. Jan 2001</time>
                    <p>
                        Icing chocolate jujubes I love I love I love I love cotton candy pie. Sweet
                        lemon drops cake powder jelly toffee. Tiramisu apple pie icing. I love candy canes
                        chocolate cotton candy.
                    </p>
                    <p>
                        Carrot cake jelly beans dessert jujubes danish. Ice cream tootsie roll I love.
                        I love sweet pastry sweet. Jelly liquorice tootsie roll.
                    </p>
                </Congressman>
            </li>
        </ul>
    )
});
