import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {withKnobs} from '@storybook/addon-knobs';
import {Aside, Footer, Header, Main, User} from '..';
import AssemblyHeader from "../../../components/AssemblyHeader";
import Congressman from "../../../components/Congressman";
import '../global.scss';



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
});
stories.add('For Assembly', () => {
    return (
        <Router>
            <div className="app">
                <Main>Some main content</Main>

                <Aside>{Array.from({length: 4}).map(item => (
                    <Congressman congressman={{
                        id: 1,
                        name: 'some',
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
});
