import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import SessionDiagram from '..';
import {Session} from "../../../../../../@types";
// @ts-ignore
import notes from '../readme.md'
import '../../../global.scss';



const stories = storiesOf('Components/SessionDiagram', module);
stories.addDecorator(withKnobs);


stories.add('index', () => {
    const sessions = [
        {
            "constituency": {
                "abbr_short": "",
                "abbr_long": "",
                "description": "",
                "id": 44,
                "name": "Reykjavíkurkjördæmi norður"
            },
            "id": 192380,
            "period": {
                "from": "2019-04-12",
                "to": "2019-09-09"
            },
            "type": "þingmaður"
        },
        {
            "constituency": {
                "abbr_short": "",
                "abbr_long": "",
                "description": "",
                "id": 44,
                "name": "Reykjavíkurkjördæmi norður"
            },
            "id": 192375,
            "period": {
                "from": "2019-04-09",
                "to": "2019-04-11"
            },
            "type": "með varamann"
        },
        {
            "constituency": {
                "abbr_short": "",
                "abbr_long": "",
                "description": "",
                "id": 44,
                "name": "Reykjavíkurkjördæmi norður"
            },
            "id": 192370,
            "period": {
                "from": "2019-03-18",
                "to": "2019-04-08"
            },
            "type": "varamaður"
        },
        {
            "constituency": {
                "abbr_short": "",
                "abbr_long": "",
                "description": "",
                "id": 44,
                "name": "Reykjavíkurkjördæmi norður"
            },
            "id": 192364,
            "period": {
                "from": "2019-03-11",
                "to": "2019-03-17"
            },
            "type": "með varamann"
        },
        {
            "constituency": {
                "abbr_short": "",
                "abbr_long": "",
                "description": "",
                "id": 44,
                "name": "Reykjavíkurkjördæmi norður"
            },
            "id": 192359,
            "period": {
                "from": "2018-09-11",
                "to": "2019-03-10"
            },
            "type": "þingmaður"
        }
    ];
    const loading = boolean('loading', false);
    const error = boolean('error', false) ? new Error : undefined;

    return (
        <>
            <SessionDiagram error={error} loading={loading} sessions={sessions as Session[]} />
        </>
    )
}, {notes: { markdown: notes }});

