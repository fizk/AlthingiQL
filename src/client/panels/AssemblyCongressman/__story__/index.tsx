import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import AssemblyCongressman from '../AssemblyCongressman';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('AssemblyCongressman', () => {
    const data = {
        "assemblyProperties": {
            "assembly": {
                "__typename": "Assembly",
                "cabinet": {
                    "__typename": "Cabinet",
                    "period": {
                        "__typename": "Period",
                        "from": "2017-11-30",
                        "to": null
                    },
                    "title": "Ráðuneyti Katrínar Jakobsdóttur"
                },
                "division": {
                    "__typename": "Division",
                    "majority": [],
                    "minority": [
                        {
                            "__typename": "Party",
                            "color": "8ec83e"
                        },
                        {
                            "__typename": "Party",
                            "color": null
                        },
                        {
                            "__typename": "Party",
                            "color": "488e41"
                        },
                        {
                            "__typename": "Party",
                            "color": "00adef"
                        },
                        {
                            "__typename": "Party",
                            "color": "da2128"
                        },
                        {
                            "__typename": "Party",
                            "color": "522c7f"
                        },
                        {
                            "__typename": "Party",
                            "color": "f6a71d"
                        },
                        {
                            "__typename": "Party",
                            "color": "EE4D9B"
                        },
                        {
                            "__typename": "Party",
                            "color": "199094"
                        }
                    ]
                },
                "id": 149,
                "period": {
                    "__typename": "Period",
                    "from": "2018-09-11",
                    "to": null
                }
            }
        },
        "categorySpeechTimes": [
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 6
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 2
                },
                "time": 116035,
                "title": "Fjárreiður ríkisins"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 5
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 1
                },
                "time": 59731,
                "title": "Viðskipti"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 15
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 11
                },
                "time": 45482,
                "title": "Félagsmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 32
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 3
                },
                "time": 40723,
                "title": "Alþjóðasamningar og utanríkismál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 25
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 8
                },
                "time": 37697,
                "title": "Alþingi"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 17
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 4
                },
                "time": 36053,
                "title": "Heilbrigðismál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 13
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 11
                },
                "time": 35268,
                "title": "Byggðamál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 12
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 11
                },
                "time": 33415,
                "title": "Atvinnumál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 21
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 6
                },
                "time": 23233,
                "title": "Löggæsla og eftirlit"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 26
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 8
                },
                "time": 22177,
                "title": "Stjórnkerfi og stjórnarskipunarmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 11
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 11
                },
                "time": 19431,
                "title": "Almannatryggingar"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 4
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 1
                },
                "time": 19214,
                "title": "Sjávarútvegur"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 3
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 1
                },
                "time": 17574,
                "title": "Landbúnaður"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 24
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 7
                },
                "time": 16939,
                "title": "Samgöngur"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 7
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 2
                },
                "time": 15937,
                "title": "Efnahagsmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 16
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 4
                },
                "time": 15324,
                "title": "Heilbrigðiseftirlit"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 29
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 10
                },
                "time": 14783,
                "title": "Mengun"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 34
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 1
                },
                "time": 14456,
                "title": "Tölvu- og upplýsingamál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 20
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 5
                },
                "time": 13137,
                "title": "Menntamál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 2
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 1
                },
                "time": 13118,
                "title": "Iðnaður"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 31
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 10
                },
                "time": 12390,
                "title": "Umhverfisstjórn og náttúruvernd"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 8
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 2
                },
                "time": 11157,
                "title": "Skattar og tollar"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 33
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 6
                },
                "time": 7877,
                "title": "Persónuleg réttindi"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 14
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 8
                },
                "time": 6299,
                "title": "Sveitarstjórnarmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 30
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 10
                },
                "time": 6228,
                "title": "Orkumál og auðlindir"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 19
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 5
                },
                "time": 5937,
                "title": "Menningarmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 22
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 6
                },
                "time": 5773,
                "title": "Dómstólar og réttarfar"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 23
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 7
                },
                "time": 4001,
                "title": "Fjarskipti og póstmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 1
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 1
                },
                "time": 3252,
                "title": "Ferðaþjónusta"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 18
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 5
                },
                "time": 490,
                "title": "Íþróttir og æskulýðsmál"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 27
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 9
                },
                "time": 366,
                "title": "Þjóðkirkjan"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 28
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 9
                },
                "time": 256,
                "title": "Trúfélög og trúarbrögð"
            },
            {
                "__typename": "CategorySpeechTime",
                "category": {
                    "__typename": "Category",
                    "id": 10
                },
                "superCategory": {
                    "__typename": "SuperCategory",
                    "id": 3
                },
                "time": 110,
                "title": "Norræn málefni"
            }
        ],
        "promotedIssues": [
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 6,
                "name": "óréttmæti málshöfðunar Alþingis gegn ráðherrum og afsökunarbeiðni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Í nefnd eftir fyrri umræðu",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "a",
                    "typeName": "Tillaga til þingsályktunar",
                    "typeSubName": "þingsályktunartillaga"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 147,
                "name": "skipulags- og mannvirkjamál á Alþingissvæðinu",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Í nefnd eftir 1. umræðu",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "l",
                    "typeName": "Frumvarp til laga",
                    "typeSubName": "lagafrumvarp"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 91,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 92,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 93,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 94,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 95,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 96,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 97,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 98,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 99,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 100,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 101,
                "name": "ráðgjöf og störf við tímabundin eða afmörkuð verkefni",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            },
            {
                "__typename": "IssueA",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "id": 129,
                "name": "viðgerðarkostnaður",
                "proponents": [],
                "proponentsCount": 0,
                "speechCount": null,
                "speechTime": null,
                "status": "Fyrirspurninni var svarað skriflega",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "type": "q",
                    "typeName": "Fyrirspurn",
                    "typeSubName": "fyrirspurn til skrifl. svars"
                }
            }
        ],
        "sessions": [
            {
                "__typename": "Session",
                "constituency": {
                    "__typename": "Constituency",
                    "id": 49,
                    "name": "Norðausturkjördæmi"
                },
                "id": 184927,
                "period": {
                    "__typename": "Period",
                    "from": "2019-04-12",
                    "to": null
                },
                "type": "þingmaður"
            },
            {
                "__typename": "Session",
                "constituency": {
                    "__typename": "Constituency",
                    "id": 49,
                    "name": "Norðausturkjördæmi"
                },
                "id": 184917,
                "period": {
                    "__typename": "Period",
                    "from": "2019-04-05",
                    "to": "2019-04-11"
                },
                "type": "með varamann"
            },
            {
                "__typename": "Session",
                "constituency": {
                    "__typename": "Constituency",
                    "id": 49,
                    "name": "Norðausturkjördæmi"
                },
                "id": 184909,
                "period": {
                    "__typename": "Period",
                    "from": "2018-10-26",
                    "to": "2019-04-04"
                },
                "type": "þingmaður"
            },
            {
                "__typename": "Session",
                "constituency": {
                    "__typename": "Constituency",
                    "id": 49,
                    "name": "Norðausturkjördæmi"
                },
                "id": 184903,
                "period": {
                    "__typename": "Period",
                    "from": "2018-10-11",
                    "to": "2018-10-25"
                },
                "type": "með varamann"
            },
            {
                "__typename": "Session",
                "constituency": {
                    "__typename": "Constituency",
                    "id": 49,
                    "name": "Norðausturkjördæmi"
                },
                "id": 184899,
                "period": {
                    "__typename": "Period",
                    "from": "2018-09-11",
                    "to": "2018-10-10"
                },
                "type": "þingmaður"
            }
        ],
        "votes": [
            {
                "__typename": "VoteAggregate",
                "count": 4,
                "vote": "boðaði fjarvist"
            },
            {
                "__typename": "VoteAggregate",
                "count": 80,
                "vote": "fjarverandi"
            },
            {
                "__typename": "VoteAggregate",
                "count": 83,
                "vote": "greiðir ekki atkvæði"
            },
            {
                "__typename": "VoteAggregate",
                "count": 307,
                "vote": "já"
            },
            {
                "__typename": "VoteAggregate",
                "count": 51,
                "vote": "nei"
            }
        ],
        "issueCount": [
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "þáltill.",
                "order": 1,
                "type": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "frumvarp",
                "order": 1,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 12,
                "documentType": "fsp. til skrifl. svars",
                "order": 1,
                "type": "q",
                "typeName": "Fyrirspurn",
                "typeSubName": "fyrirspurn til skrifl. svars"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 2,
                "documentType": "frumvarp",
                "order": 2,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "frumvarp",
                "order": 3,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "þáltill.",
                "order": 4,
                "type": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "breytingartillaga",
                "order": 4,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 5,
                "documentType": "þáltill.",
                "order": 5,
                "type": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 2,
                "documentType": "frumvarp",
                "order": 5,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 4,
                "documentType": "þáltill.",
                "order": 6,
                "type": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 2,
                "documentType": "frumvarp",
                "order": 6,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 2,
                "documentType": "þáltill.",
                "order": 7,
                "type": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 6,
                "documentType": "frumvarp",
                "order": 7,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "frumvarp",
                "order": 8,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "frumvarp",
                "order": 9,
                "type": "l",
                "typeName": "Frumvarp til laga",
                "typeSubName": "lagafrumvarp"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "beiðni um skýrslu",
                "order": 11,
                "type": "b",
                "typeName": "Beiðni um skýrslu",
                "typeSubName": "beiðni um skýrslu"
            },
            {
                "__typename": "IssueTypeCount",
                "count": 1,
                "documentType": "þáltill.",
                "order": 15,
                "type": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            }
        ],
        "person": {
            "__typename": "Person",
            "avatar": {
                "__typename": "Image",
                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/mynd/thingmenn/729/org/mynd.jpg"
            },
            "id": 729,
            "name": "Sigmundur Davíð Gunnlaugsson"
        },
        "loading": false,
        "assembly": 149,
    };

    return (
        <div>
            <Router>
                <AssemblyCongressman {...data as any} />
            </Router>
        </div>
    )
});
