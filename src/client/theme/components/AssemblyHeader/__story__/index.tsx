import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {withKnobs} from '@storybook/addon-knobs';
import AssemblyHeader from '../index'
import '../../../global.scss';

const stories = storiesOf('Theme/AssemblyHeader', module);
stories.addDecorator(withKnobs);

stories.add('index', () => {
    return (
        <Router>
            <AssemblyHeader id={149} title="Ráðuneyti Katrínar Jakobsdóttur" />
        </Router>
    )
});
