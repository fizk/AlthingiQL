import React from 'react';
import { storiesOf } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import AssemblyIssues from '../../src/client/panels/AssemblyIssues/AssemblyIssues';
import '../../public/stylesheets/storybook.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';

const store = createStore((state = {}, action) => state, {issueSearch: {result: []}});


const emptyTypes = [];
const types = [
    {
        "count": 3,
        "type": "n",
        "typeName": "Álit",
        "typeSubName": "álit nefndar",
        "__typename": "Types"
    },
    {
        "count": 11,
        "type": "b",
        "typeName": "Beiðni um skýrslu",
        "typeSubName": "beiðni um skýrslu",
        "__typename": "Types"
    },
    {
        "count": 224,
        "type": "l",
        "typeName": "Frumvarp til laga",
        "typeSubName": "stjórnarfrumvarp",
        "__typename": "Types"
    },
    {
        "count": 331,
        "type": "q",
        "typeName": "Fyrirspurn",
        "typeSubName": "fyrirspurn til skrifl. svars",
        "__typename": "Types"
    },
    {
        "count": 89,
        "type": "m",
        "typeName": "Fyrirspurn",
        "typeSubName": "fyrirspurn",
        "__typename": "Types"
    },
    {
        "count": 25,
        "type": "s",
        "typeName": "Skýrsla",
        "typeSubName": "skýrsla",
        "__typename": "Types"
    },
    {
        "count": 167,
        "type": "a",
        "typeName": "Tillaga til þingsályktunar",
        "typeSubName": "þingsályktunartillaga",
        "__typename": "Types"
    },
    {
        "count": 4,
        "type": "f",
        "typeName": "Tillaga til þingsályktunar",
        "typeSubName": "frestun funda",
        "__typename": "Types"
    }
];

const emptyIssues = [];
const issues = [
    {
        "id": 1,
        "name": "fjárlög 2016",
        "status": "Samþykkt sem lög frá Alþingi",
        "type": "l",
        "typeName": "Frumvarp til laga",
        "goal": "Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir.",
        "assembly": {
            "id": 145,
            "__typename": "Assembly"
        },
        "proponentsCount": 1,
        "proponents": [
            {
                "id": 652,
                "name": "Bjarni Benediktsson",
                "party": {
                    "id": 35,
                    "name": "Sjálfstæðisflokkur",
                    "color": "0000ff",
                    "__typename": "Party"
                },
                "__typename": "Congressman"
            }
        ],
        "__typename": "Issue"
    },
    {
        "id": 2,
        "name": "ýmsar forsendur fjárlagafrumvarps 2016",
        "status": "Samþykkt sem lög frá Alþingi",
        "type": "l",
        "typeName": "Frumvarp til laga",
        "goal": "Að breyta ýmsum lögum sem tengjast tekju- eða gjaldahlið ríkissjóðs í samræmi við forsendur fjárlagafrumvarps fyrir árið 2016.",
        "assembly": {
            "id": 145,
            "__typename": "Assembly"
        },
        "proponentsCount": 1,
        "proponents": [
            {
                "id": 652,
                "name": "Bjarni Benediktsson",
                "party": {
                    "id": 35,
                    "name": "Sjálfstæðisflokkur",
                    "color": "0000ff",
                    "__typename": "Party"
                },
                "__typename": "Congressman"
            }
        ],
        "__typename": "Issue"
    },
    {
        "id": 3,
        "name": "almannatryggingar",
        "status": "Í nefnd eftir 1. umræðu",
        "type": "l",
        "typeName": "Frumvarp til laga",
        "goal": null,
        "assembly": {
            "id": 145,
            "__typename": "Assembly"
        },
        "proponentsCount": 9,
        "proponents": [
            {
                "id": 678,
                "name": "Árni Páll Árnason",
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "ff8c00",
                    "__typename": "Party"
                },
                "__typename": "Congressman"
            }
        ],
        "__typename": "Issue"
    },
    {
        "id": 4,
        "name": "byggingarsjóður Landspítala",
        "status": "Vísað til ríkisstjórnar",
        "type": "l",
        "typeName": "Frumvarp til laga",
        "goal": null,
        "assembly": {
            "id": 145,
            "__typename": "Assembly"
        },
        "proponentsCount": 7,
        "proponents": [
            {
                "id": 557,
                "name": "Steingrímur J. Sigfússon",
                "party": {
                    "id": 23,
                    "name": "Vinstri hreyfingin - grænt framboð",
                    "color": "ff0000",
                    "__typename": "Party"
                },
                "__typename": "Congressman"
            }
        ],
        "__typename": "Issue"
    },
    {
        "id": 5,
        "name": "framtíðargjaldmiðill Íslands",
        "status": null,
        "type": "a",
        "typeName": "Tillaga til þingsályktunar",
        "goal": null,
        "assembly": {
            "id": 145,
            "__typename": "Assembly"
        },
        "proponentsCount": 6,
        "proponents": [
            {
                "id": 704,
                "name": "Guðmundur Steingrímsson",
                "party": {
                    "id": 44,
                    "name": "Björt framtíð",
                    "color": "92278f",
                    "__typename": "Party"
                },
                "__typename": "Congressman"
            }
        ],
        "__typename": "Issue"
    },
];

storiesOf('AssemblyIssues', module)
    .add('empty', () => (
        <Provider store={store}>
            <Router>
                <AssemblyIssues types={emptyTypes} issues={emptyIssues} assembly={1} loading={false} done={true} />
            </Router>
        </Provider>
    ))
    .add('loading', () => (
        <Provider store={store}>
            <Router>
                <AssemblyIssues types={emptyTypes} issues={emptyIssues} assembly={1} loading={true} done={true} />
            </Router>
        </Provider>
    ))
    .add('display', () => (
        <Provider store={store}>
            <Router>
                <AssemblyIssues types={types} issues={issues} assembly={1} loading={false} done={false} loadMore={action('load-more')} loadFilter={action('load-filter')} />
            </Router>
        </Provider>
    ))
;
