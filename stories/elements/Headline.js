import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../public/stylesheets/storybook.css';
import {H1, H2, H3, H4, H5} from "../../src/client/elements/Headline";


storiesOf('Headline', module)
    .add('H1...H5', () => (
        <div>
            <H1>Headline One</H1>
            <H2>Headline Two</H2>
            <H3>Headline Three</H3>
            <H4>Headline Four</H4>
            <H5>Headline Five</H5>
        </div>
    ))
    .add('H1 to all', () => (
        <div>
            <div style={{padding: '20px'}}>
                <H1>Headline One</H1>
                <H1>Headline One</H1>
            </div>

            <div style={{padding: '20px'}}>
                <H1>Headline One</H1>
                <H2>Headline Two</H2>
            </div>

            <div style={{padding: '20px'}}>
                <H1>Headline One</H1>
                <H3>Headline Three</H3>
            </div>

            <div style={{padding: '20px'}}>
                <H1>Headline One</H1>
                <H4>Headline Four</H4>
            </div>

            <div style={{padding: '20px'}}>
                <H1>Headline One</H1>
                <H5>Headline Five</H5>
            </div>
        </div>
    ))
    .add('H2 to all', () => (
        <div>
            <div style={{padding: '20px'}}>
                <H2>Headline Two</H2>
                <H1>Headline One</H1>
            </div>

            <div style={{padding: '20px'}}>
                <H2>Headline Two</H2>
                <H2>Headline Two</H2>
            </div>

            <div style={{padding: '20px'}}>
                <H2>Headline Two</H2>
                <H3>Headline Three</H3>
            </div>

            <div style={{padding: '20px'}}>
                <H2>Headline Two</H2>
                <H4>Headline Four</H4>
            </div>

            <div style={{padding: '20px'}}>
                <H2>Headline Two</H2>
                <H5>Headline Five</H5>
            </div>
        </div>
    ))
    .add('H3 to all', () => (
        <div>
            <div style={{padding: '20px'}}>
                <H3>Headline Three</H3>
                <H1>Headline One</H1>
            </div>

            <div style={{padding: '20px'}}>
                <H3>Headline Three</H3>
                <H2>Headline Two</H2>
            </div>

            <div style={{padding: '20px'}}>
                <H3>Headline Three</H3>
                <H3>Headline Three</H3>
            </div>

            <div style={{padding: '20px'}}>
                <H3>Headline Three</H3>
                <H4>Headline Four</H4>
            </div>

            <div style={{padding: '20px'}}>
                <H3>Headline Three</H3>
                <H5>Headline Five</H5>
            </div>
        </div>
    ))
    .add('H4 to all', () => (
        <div>
            <div style={{padding: '20px'}}>
                <H4>Headline Four</H4>
                <H1>Headline One</H1>
            </div>

            <div style={{padding: '20px'}}>
                <H4>Headline Four</H4>
                <H2>Headline Two</H2>
            </div>

            <div style={{padding: '20px'}}>
                <H4>Headline Four</H4>
                <H3>Headline Three</H3>
            </div>

            <div style={{padding: '20px'}}>
                <H4>Headline Four</H4>
                <H4>Headline Four</H4>
            </div>

            <div style={{padding: '20px'}}>
                <H4>Headline Four</H4>
                <H5>Headline Five</H5>
            </div>
        </div>
    ))
;
