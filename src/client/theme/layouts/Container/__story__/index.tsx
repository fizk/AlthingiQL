import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {withKnobs} from '@storybook/addon-knobs';
import {Aside, Footer, Header, Main, User} from '..';
import AssemblyHeader from "../../../components/AssemblyHeader";
import Congressman from "../../../components/Congressman";
// @ts-ignore
import notes from '../readme.md';
import '../../../global.scss';


const stories = storiesOf('Theme/Layouts', module);
stories.addDecorator(withKnobs);

stories.add('Scaffolding', () => {
    return (
        <Router>
            <div className="app">
                <Aside>aside</Aside>
                <Header>149. Loggjafarthing</Header>
                <User>avatar and search</User>
                <Main>Some main content</Main>
                <Footer>footer and stuff</Footer>
            </div>
        </Router>
    )
}, {notes: { markdown: notes }});
stories.add('For Assembly', () => {
    return (
        <Router>
            <div className="app">
                <Main>Some main content</Main>

                <Aside>{Array.from({length: 4}).map((item, i) => (
                    <Congressman key={i} congressman={{
                        id: 1,
                        name: 'some',
                        birth: '2001-01-01',
                        abbreviation: 'AVc',
                        avatar: {templateSrc: ''}
                    }}/>
                ))}</Aside>


                <User>avatar and search</User>
                <Header>
                    <AssemblyHeader id={149} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <Footer>footer and stuff</Footer>
            </div>
        </Router>
    )
}, {notes: { markdown: notes }});
