import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {Congressman} from '../../src/client/elements/Congressman';
import {H4} from "../../src/client/elements/Headline";

const congressman = {
    id: 719,
    name: 'Oddný G. Harðardóttir',
};

const party = {
    id: 1,
    name: 'Framsoknarflokkurinn',
    color: 'ff8c00'
};

storiesOf('Congressman', module)
    .add('Without party', () => (
        <Congressman congressman={congressman} party={undefined} />
    ))
    .add('With party', () => (
        <Congressman congressman={congressman} party={party} />
    ))
    .add('With children', () => (
        <Congressman congressman={congressman} party={party} >
            <H4>She is important</H4>
        </Congressman>
    ))
    .add('With something really big', () => (
        <Congressman congressman={congressman} party={party} >
            <H4>She is important</H4>
            <time>15. Jan 2001</time>
            <p>Look at these words. Are they small words? And he referred to my words - if they're small,
                something else must be small. I guarantee you there's no problem, I guarantee. An 'extremely
                credible source' has called my office and told me that Lorem Ipsum's birth certificate is a fraud.
                I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Some people
                have an ability to write placeholder text... It's an art you're basically born with. You either have
                it or you don't.</p>
            <p>I have a 10 year old son. He has words. He is so good with these words it's unbelievable. My text
                is long and beautiful, as, it has been well documented, are various other parts of my website.</p>
        </Congressman>
    ));
