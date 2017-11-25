import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import IssueSpeeches from '../../src/client/panels/IssueSpeeches/IssueSpeeches';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import '../../public/stylesheets/storybook.css';

const speeches = [
    {
        id: 'thisistheid1',
        assembly: {
            id: 1,
        },
        issue: {
            id: 2,
        },
        text: 'Samkomulag er um **eina dagskrármálið** milli _þingflokka, að sömu_ reglur gildi um þessa umræðu og um 1. umr. ' +
        'venjulegra lagafrumvarpa hvað ræðutíma varðar, samanber heimild í 3. mgr. 67. gr. þingskapalaga.',
        period: {
            from: '2016-12-07T02:32:44.000Z',
            to: '2016-12-07T02:32:54.000Z',
        },
        iteration: '1',
        type: 'andsvar',
        congressmanType: 'forseti alþingis',
        congressman: {
            id: 652,
            name: 'Bjarni Benediktsson',
            party: {
                id: 4,
                name: 'Party Flokkurinn',
                color: '00f',
            }
        },
    },{
        id: 'thisistheid2',
        assembly: {
            id: 1,
        },
        issue: {
            id: 2,
        },
        text: 'Virðulegi forseti. **Ég mæli hér fyrir frumvarpi** til fjárlaga fyrir árið 2017 sem er fyrsta mál 146. ' +
        'löggjafarþings, en frumvarpið er lagt fram við nokkuð óvanalegar aðstæður. Afráðið var síðastliðið vor að ' +
        'halda kosningar til Alþingis fyrr [en gert hafði verið](http://example.com) ráð fyrir og var þingi framlengt af þeim sökum til ' +
        'haustsins. \n\nVið eðlilegar aðstæður, ef svo mætti að orði komast, hefði átt að leggja frumvarpið fram á fyrsta ' +
        'fundi þings annan þriðjudag í september. Það hefur hins vegar dregist að mynda nýja ríkisstjórn. Frumvarpið er ' +
        'því lagt fram af starfsstjórn sem situr tímabundið. Aðeins eru þrjú fordæmi fyrir því að slíkar stjórnir hafi ' +
        'lagt fram frumvörp til fjárlaga, en það var árin 1945, 1947 og 1950.',
        period: {
            from: '2016-12-07T02:33:03.000Z',
            to: '2016-12-07T03:02:31.000Z',
        },
        iteration: '',
        type: 'andsvar',
        congressmanType: 'fjármála- og efnahagsráðherra',
        congressman: {
            id: 557,
            name: 'Steingrímur J. Sigfússon',
            party: {
                id: 4,
                name: 'Party Flokkurinn',
                color: 'ff0000',
            }
        },
    }
];
const store = createStore((state = {}, action) => state, {issueSearch: {result: []}});

storiesOf('IssueSpeeches', module)
    .add('speech list', () => (
        <Provider store={store}>
            <IssueSpeeches speeches={speeches} issue={2} assembly={1} speech={undefined} />
        </Provider>
    ))
    .add('blank', () => (
        <Provider store={store}>
            <IssueSpeeches />
        </Provider>
    ))
    .add('loading', () => (
        <Provider store={store}>
            <IssueSpeeches loading={true} />
        </Provider>
    ))
;
