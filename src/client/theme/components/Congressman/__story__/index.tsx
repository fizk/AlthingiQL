import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, boolean} from '@storybook/addon-knobs';
import Congressman from '..';
import '../../../layouts/Container/global.scss';

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

const constituency = {
    id: 1,
    name: 'string',
    // eslint-disable-next-line
    abbr_short: 'RV', //todo fix naming
    // eslint-disable-next-line
    abbr_long: 'string', //todo fix naming
    description: 'string',
};

const stories = storiesOf('Components/Congressman', module);
stories.addDecorator(withKnobs);


stories.add('No Body', () => {
    const congressmanProps = {
        ...congressman,
        name: text('Name', 'Langt Nafnsson')
    };
    const partyProps = boolean('Party', true) ? party : undefined;
    const constituencyProps = boolean('Constituency', true) ? constituency : undefined;
    return (
        <>
            <h2>Default: md</h2>
            <ul style={{display: 'flex', margin: '0.64rem 0 1.563rem 0'}}>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['md']} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['md']} />
                </li>

            </ul>
            <h2>Large: lg</h2>
            <ul style={{display: 'flex', margin: '0.64rem 0 1.563rem 0'}}>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['lg']} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['lg']} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['lg']} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['lg']} />
                </li>
            </ul>
            <h2>List</h2>
            <ul style={{margin: '0.64rem 0 1.563rem 0'}}>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['md']} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} />
                </li>
                <li style={{padding: '1rem 0'}}>
                    <Congressman congressman={congressmanProps} party={partyProps} constituency={constituencyProps} variations={['md']} />
                </li>

            </ul>
        </>
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
            <li style={{padding: '1rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} >
                    <h4>She is important</h4>
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
            <li style={{padding: '1rem 0'}}>
                <Congressman congressman={congressmanProps} party={partyProps} variations={['md']} >
                    <h4>She is important</h4>
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
                    <h4>She is important</h4>
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

stories.add('As links', () => {
    const congressmanProps = {
        ...congressman,
        name: text('Name', 'Langt Nafnsson')
    };
    const partyProps = boolean('Party', true) ? party : undefined;
    return (
        <ul>
            <li style={{padding: '1rem 0'}}>
                <a href="#">
                    <Congressman congressman={congressmanProps} party={partyProps} >
                        <h4>She is important</h4>
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
                </a>
            </li>
            <li style={{padding: '1rem 0'}}>
                <a href="#">
                    <Congressman congressman={congressmanProps} party={partyProps} variations={['md']} >
                        <h4>She is important</h4>
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
                </a>
            </li>
            <li>
                <a href="#">
                    <Congressman congressman={congressmanProps} party={partyProps} variations={['lg']} >
                        <h4>She is important</h4>
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
                </a>
            </li>
        </ul>
    )
});
