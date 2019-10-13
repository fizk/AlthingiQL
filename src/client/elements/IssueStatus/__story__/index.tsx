import * as React from 'react';
import {storiesOf} from '@storybook/react';
import IssueStatus from "../index";
import '../../../components/Chrome/index.scss';

const stories = storiesOf('IssueStatus', module);

const data = [
    {status: null, type: 'a'},
    {status: 'Bíður 1. umræðu', type: 'a'},
    {status: 'Í nefnd eftir 1. umræðu' , type: 'a'},
    {status: 'Samþykkt sem ályktun Alþingis'  , type: 'a'},
    {status: 'Ekki samþykkt'  , type: 'a'},
    {status: 'Vísað til ríkisstjórnar', type: 'a'},

    {status: null, type: 'l'},
    {status: 'Bíður 1. umræðu', type: 'l'},
    {status: 'Í nefnd eftir 1. umræðu', type: 'l'},
    {status: 'Bíður 2. umræðu', type: 'l'},
    {status: 'Í nefnd eftir 2. umræðu', type: 'l'},
    {status: 'Bíður 3. umræðu', type: 'l'},
    {status: 'Vísað til ríkisstjórnar', type: 'l'},
    {status: 'Samþykkt sem lög frá Alþingi', type: 'l'},

    {status: null, type: 'm'},
    {status: 'Fyrirspurnin var kölluð aftur', type:   'm'},
    {status: 'Fyrirspurninni var ekki svarað', type:  'm'},
    {status: 'Fyrirspurnin var felld niður vegna ráðherraskipta', type:   'm'},
    {status: 'Fyrirspurninni var svarað skriflega', type: 'm'},
    {status: 'Fyrirspurninni var svarað munnlega', type:  'm'},
    {status: 'Fyrirspurninni hefur ekki verið svarað', type:  'm'},

    {status: null, type: 'q'},
    {status: 'Fyrirspurnin var kölluð aftur'  , type: 'q'},
    {status: 'Fyrirspurnin var felld niður vegna ráðherraskipta'  , type: 'q'},
    {status: 'Fyrirspurninni var ekki svarað' , type: 'q'},
    {status: 'Fyrirspurninni hefur ekki verið svarað' , type: 'q'},
    {status: 'Fyrirspurninni var svarað skriflega', type: 'q'},
];

stories.add('Sizes', () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>-</td>
                    <td>category</td>
                    <td>status</td>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr>
                        <td><IssueStatus type={item.type} status={item.status}/></td>
                        <td align="center">{item.type}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
});
