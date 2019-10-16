import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import AssemblyParty from '../AssemblyParty';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('AssemblyParty', () => {
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
        "party": {
            "__typename": "Party",
            "abbr_long": "Sjálfstfl.",
            "abbr_short": "S",
            "color": "00adef",
            "id": 35,
            "name": "Sjálfstæðisflokkur"
        },
        issues: [
            {
                __typename: "IssueA",
                assembly: {
                    __typename: "Assembly",
                    id: 149
                },
                id: 777,
                name: "ákvörðun sameiginlegu EES-nefndarinnar, nr. 93/2017, um breytingu á IV. viðauka (Orka) við EES-samninginn",
                proponents: [
                    {
                        __typename: "Proponent",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/656/656-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RN",
                            id: 44,
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        id: 656,
                        name: "Guðlaugur Þór Þórðarson",
                        party: {
                            __typename: "Party",
                            color: "00adef",
                            id: 35,
                            name: "Sjálfstæðisflokkur"
                        }
                    }
                ],
                proponentsCount: 1,
                speechCount: 3524,
                speechTime: 482747,
                status: "Bíður 2. umræðu",
                subName: "þriðji orkupakkinn",
                type: {
                    __typename: "Type",
                    category: "a",
                    type: "a",
                    typeName: "Tillaga til þingsályktunar",
                    typeSubName: "þingsályktunartillaga"
                }
            },
            {
                __typename: "IssueA",
                assembly: {
                    __typename: "Assembly",
                    id: 149
                },
                id: 1,
                name: "fjárlög 2019",
                proponents: [
                    {
                        __typename: "Proponent",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SV",
                            id: 52,
                            name: "Suðvesturkjördæmi"
                        },
                        id: 652,
                        name: "Bjarni Benediktsson",
                        party: {
                            __typename: "Party",
                            color: "00adef",
                            id: 35,
                            name: "Sjálfstæðisflokkur"
                        }
                    }
                ],
                proponentsCount: 1,
                speechCount: 987,
                speechTime: 188452,
                status: "Samþykkt sem lög frá Alþingi",
                subName: null,
                type: {
                    __typename: "Type",
                    category: "a",
                    type: "l",
                    typeName: "Frumvarp til laga",
                    typeSubName: "lagafrumvarp"
                }
            },
            {
                __typename: "IssueA",
                assembly: {
                    __typename: "Assembly",
                    id: 149
                },
                id: 144,
                name: "veiðigjald",
                proponents: [
                    {
                        __typename: "Proponent",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/691/691-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "NA",
                            id: 49,
                            name: "Norðausturkjördæmi"
                        },
                        id: 691,
                        name: "Kristján Þór Júlíusson",
                        party: {
                            __typename: "Party",
                            color: "00adef",
                            id: 35,
                            name: "Sjálfstæðisflokkur"
                        }
                    }
                ],
                proponentsCount: 1,
                speechCount: 644,
                speechTime: 99143,
                status: "Samþykkt sem lög frá Alþingi",
                subName: null,
                type: {
                    __typename: "Type",
                    category: "a",
                    type: "l",
                    typeName: "Frumvarp til laga",
                    typeSubName: "lagafrumvarp"
                }
            },
            {
                __typename: "IssueA",
                assembly: {
                    __typename: "Assembly",
                    id: 149
                },
                id: 486,
                name: "meðferð krónueigna sem háðar eru sérstökum takmörkunum og gjaldeyrismál",
                proponents: [
                    {
                        __typename: "Proponent",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SV",
                            id: 52,
                            name: "Suðvesturkjördæmi"
                        },
                        id: 652,
                        name: "Bjarni Benediktsson",
                        party: {
                            __typename: "Party",
                            color: "00adef",
                            id: 35,
                            name: "Sjálfstæðisflokkur"
                        }
                    }
                ],
                proponentsCount: 1,
                speechCount: 503,
                speechTime: 70926,
                status: "Samþykkt sem lög frá Alþingi",
                subName: "aflandskrónulosun og bindingarskylda á fjármagnsinnstreymi",
                type: {
                    __typename: "Type",
                    category: "a",
                    type: "l",
                    typeName: "Frumvarp til laga",
                    typeSubName: "lagafrumvarp"
                }
            },
            {
                id: 1,
                assembly: {
                    id: 149
                },
                name: "fjárlög 2019",
                subName: 'samfjármögnun alþjóðlegra rannsóknaráætlana og sjálfstæð stjórn Innviðasjóðs',
                type: {
                    type: "l",
                    category: "a",
                    typeName: "Frumvarp til laga",
                    typeSubName: "lagafrumvarp"
                },
                status: "Samþykkt sem lög frá Alþingi",
                date: "2018-09-11T15:43:00Z",
                speechCount: 987,
                proponents: [
                    {
                        id: 652,
                        name: "Bjarni Benediktsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        party: {
                            id: 35,
                            name: "Sjálfstæðisflokkur",
                            color: "00adef"
                        },
                        order: 1,
                        minister: 'forsætisrádherra',
                    }
                ],
                proponentsCount: 1
            },
            {
                id: 688,
                assembly: {
                    id: 149
                },
                name: "skýrsla Ríkisendurskoðunar um eftirlit Fiskistofu",
                subName: null,
                type: {
                    type: "n",
                    category: "a",
                    typeName: "Álit",
                    typeSubName: "álit nefndar"
                },
                status: null,
                date: "2019-03-19T13:16:00Z",
                speechCount: 27,
                proponents: [],
                proponentsCount: 0
            },
            {
                id: 159,
                assembly: {
                    id: 149
                },
                name: "kostir og gallar aðildar Íslands að samningnum um Evrópska efnahagssvæðið",
                subName: 'samfjármögnun alþjóðlegra rannsóknaráætlana og sjálfstæð stjórn Innviðasjóðs',
                type: {
                    type: "b",
                    category: "a",
                    typeName: "Beiðni um skýrslu",
                    typeSubName: "beiðni um skýrslu"
                },
                status: null,
                date: "2018-09-27T12:42:00Z",
                speechCount: 8,
                proponents: [
                    {
                        id: 1334,
                        name: "Ólafur Ísleifsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1334/1334-220.jpg"
                        },
                        party: {
                            id: 46,
                            name: "Flokkur fólksins",
                            color: "EE4D9B"
                        },
                        order: 1,
                        minister: 'forsætisrádherra'
                    },
                ],
                proponentsCount: 13
            },
            {
                id: 115,
                assembly: {
                    id: 149
                },
                name: "hámarkshraði",
                subName: null,
                type: {
                    type: "m",
                    category: "a",
                    typeName: "Fyrirspurn",
                    typeSubName: "fyrirspurn"
                },
                status: "Fyrirspurninni var svarað munnlega",
                date: "2018-09-18T17:39:00Z",
                speechCount: 7,
                proponents: [
                    {
                        id: 632,
                        name: "Þorgerður K. Gunnarsdóttir",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/632/632-220.jpg"
                        },
                        party: {
                            id: 45,
                            name: "Viðreisn",
                            color: "f6a71d"
                        }
                    }
                ],
                proponentsCount: 1
            },
            {
                id: 18,
                assembly: {
                    id: 149
                },
                name: "óundirbúinn fyrirspurnatími",
                type: {
                    type: "ft",
                    category: "b",
                    typeName: "óundirbúinn fyrirspurnatími",
                    typeSubName: null
                }
            },
            {
                id: 25,
                assembly: {
                    id: 149
                },
                name: "orkuöryggi þjóðarinnar",
                type: {
                    type: "um",
                    category: "b",
                    typeName: "sérstök umræða",
                    typeSubName: null
                }
            },
            {
                id: 36,
                assembly: {
                    id: 149
                },
                name: "breyting á lagaákvæðum um skipta búsetu barna",
                subName: null,
                type: {
                    type: "q",
                    category: "a",
                    typeName: "Fyrirspurn",
                    typeSubName: "fyrirspurn til skrifl. svars"
                },
                status: "Fyrirspurninni var svarað skriflega",
                date: "2018-09-18T16:24:00Z",
                speechCount: 0,
                proponents: [
                    {
                        id: 1166,
                        name: "Helgi Hrafn Gunnarsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1166/1166-220.jpg"
                        },
                        party: {
                            id: 43,
                            name: "Píratar",
                            color: "522c7f"
                        }
                    }
                ],
                proponentsCount: 1
            },
            {
                id: 141,
                assembly: {
                    id: 149
                },
                name: "staða aðgerða samkvæmt ferðamálaáætlun 2011--2020",
                subName: null,
                type: {
                    type: "s",
                    category: "a",
                    typeName: "Skýrsla",
                    typeSubName: "skýrsla"
                },
                status: null,
                date: "2018-09-24T16:31:00Z",
                speechCount: 0,
                proponents: [
                    {
                        id: 1252,
                        name: "Þórdís Kolbrún R. Gylfadóttir",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1252/1252-220.jpg"
                        },
                        party: {
                            id: 35,
                            name: "Sjálfstæðisflokkur",
                            color: "00adef"
                        }
                    }
                ],
                proponentsCount: 1
            },
            {
                id: 5,
                assembly: {
                    id: 149
                },
                name: "aðgerðaáætlun í húsnæðismálum",
                subName: 'samfjármögnun alþjóðlegra rannsóknaráætlana og sjálfstæð stjórn Innviðasjóðs',
                type: {
                    type: "a",
                    category: "a",
                    typeName: "Tillaga til þingsályktunar",
                    typeSubName: "þingsályktunartillaga"
                },
                status: "Í nefnd eftir 1. umræðu",
                date: "2018-09-27T11:58:00Z",
                speechCount: 17,
                proponents: [
                    {
                        id: 1128,
                        name: "Logi Einarsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1128/1128-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    },
                    {
                        id: 1324,
                        name: "Albertína Friðbjörg Elíasdóttir",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1324/1324-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    },
                    {
                        id: 647,
                        name: "Ágúst Ólafur Ágústsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/647/647-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    },
                    {
                        id: 1257,
                        name: "Guðjón S. Brjánsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1257/1257-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    },
                    {
                        id: 1328,
                        name: "Guðmundur Andri Thorsson",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1328/1328-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    },
                    {
                        id: 1331,
                        name: "Helga Vala Helgadóttir",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1331/1331-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    },
                    {
                        id: 719,
                        name: "Oddný G. Harðardóttir",
                        avatar: {
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/719/719-220.jpg"
                        },
                        party: {
                            id: 38,
                            name: "Samfylkingin",
                            color: "da2128"
                        }
                    }
                ],
                proponentsCount: 7
            },
            {
                __typename: "IssueA",
                assembly: {
                    __typename: "Assembly",
                    id: 149
                },
                id: 750,
                name: "fjármálaáætlun 2020--2024",
                proponents: [
                    {
                        __typename: "Proponent",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SV",
                            id: 52,
                            name: "Suðvesturkjördæmi"
                        },
                        id: 652,
                        name: "Bjarni Benediktsson",
                        party: {
                            __typename: "Party",
                            color: "00adef",
                            id: 35,
                            name: "Sjálfstæðisflokkur"
                        }
                    }
                ],
                proponentsCount: 1,
                speechCount: 598,
                speechTime: 68263,
                status: "Í nefnd eftir 1. umræðu",
                subName: null,
                type: {
                    __typename: "Type",
                    category: "a",
                    type: "a",
                    typeName: "Tillaga til þingsályktunar",
                    typeSubName: "þingsályktunartillaga"
                }
            },
        ],
    };

    return (
        <div>
            <Router>
                <AssemblyParty {...data as any} />
            </Router>
        </div>
    )
});
