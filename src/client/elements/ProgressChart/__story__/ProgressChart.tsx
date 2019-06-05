import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import ProgressChart from '..';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('ProgressChart', module);
stories.addDecorator(withKnobs);


stories.add('ProgressChart', () => {
    const data = [
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 1,
            "committee_name": null,
            "date": "2017-12-14 16:03:00",
            "title": "stjórnarfrumvarp",
            "type": "document",
            "completed": 1
        },
        {
            "value": 3,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 1,
            "committee_name": null,
            "date": "2017-12-15 10:12:50",
            "title": "atvædagreidsla",
            "type": "vote",
            "completed": 1
        },
        {
            "value": 29820,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": "20171215T103422",
            "document_id": null,
            "committee_name": null,
            "date": "2017-12-15 10:34:22",
            "title": "1. umræða",
            "type": "speech",
            "completed": 1
        },
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": 207,
            "speech_id": null,
            "document_id": null,
            "committee_name": "fjárlaganefnd",
            "date": "2017-12-16 08:30:00",
            "title": "í nefnd",
            "type": "committee",
            "completed": 1
        },
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": 207,
            "speech_id": null,
            "document_id": null,
            "committee_name": "fjárlaganefnd",
            "date": "2017-12-18 08:30:00",
            "title": "í nefnd",
            "type": "committee",
            "completed": 1
        },
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": 207,
            "speech_id": null,
            "document_id": null,
            "committee_name": "fjárlaganefnd",
            "date": "2017-12-19 08:30:00",
            "title": "í nefnd",
            "type": "committee",
            "completed": 1
        },
        {
            "value": 2,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": 207,
            "speech_id": null,
            "document_id": null,
            "committee_name": "fjárlaganefnd",
            "date": "2017-12-20 17:00:00",
            "title": "í nefnd",
            "type": "committee",
            "completed": 1
        },
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": 207,
            "speech_id": null,
            "document_id": null,
            "committee_name": "fjárlaganefnd",
            "date": "2017-12-21 17:11:00",
            "title": "í nefnd",
            "type": "committee",
            "completed": 1
        },
        {
            "value": 12,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 89,
            "committee_name": null,
            "date": "2017-12-22 09:05:00",
            "title": "nefndarálit",
            "type": "document",
            "completed": 1
        },
        {
            "value": 54,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 89,
            "committee_name": null,
            "date": "2017-12-22 11:12:29",
            "title": "atvædagreidsla",
            "type": "vote",
            "completed": 1
        },
        {
            "value": 32041,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": "20171222T121110",
            "document_id": null,
            "committee_name": null,
            "date": "2017-12-22 12:11:10",
            "title": "2. umræða",
            "type": "speech",
            "completed": 1
        },
        {
            "value": 5,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 106,
            "committee_name": null,
            "date": "2017-12-28 17:30:00",
            "title": "frumvarp eftir 2. umræðu",
            "type": "document",
            "completed": 1
        },
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": 207,
            "speech_id": null,
            "document_id": null,
            "committee_name": "fjárlaganefnd",
            "date": "2017-12-28 20:05:00",
            "title": "í nefnd",
            "type": "committee",
            "completed": 1
        },
        {
            "value": 6,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 132,
            "committee_name": null,
            "date": "2017-12-29 13:13:00",
            "title": "breytingartillaga",
            "type": "document",
            "completed": 1
        },
        {
            "value": 6,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 139,
            "committee_name": null,
            "date": "2017-12-29 17:12:31",
            "title": "atvædagreidsla",
            "type": "vote",
            "completed": 1
        },
        {
            "value": 17609,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": "20171229T182927",
            "document_id": null,
            "committee_name": null,
            "date": "2017-12-29 18:29:27",
            "title": "3. umræða",
            "type": "speech",
            "completed": 1
        },
        {
            "value": 403,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": "20171230T000032",
            "document_id": null,
            "committee_name": null,
            "date": "2017-12-30 00:00:32",
            "title": "3. umræða",
            "type": "speech",
            "completed": 1
        },
        {
            "value": 10,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 142,
            "committee_name": null,
            "date": "2017-12-30 00:12:56",
            "title": "atvædagreidsla",
            "type": "vote",
            "completed": 1
        },
        {
            "value": 1,
            "assembly_id": 148,
            "issue_id": 1,
            "committee_id": null,
            "speech_id": null,
            "document_id": 144,
            "committee_name": null,
            "date": "2017-12-30 00:56:00",
            "title": "lög í heild",
            "type": "document",
            "completed": 1
        }
    ];
    return (

        <ProgressChart data={data} />
    )
});
