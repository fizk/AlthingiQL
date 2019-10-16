import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Assembly from '../Assembly';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);


stories.add('Assembly', () => {

    const data = {
        assembly: 149,
        assemblyProperties: {
            loading: false,
            error: undefined,
            assembly: {
                __typename: "Assembly",
                cabinet: {
                    __typename: "Cabinet",
                    period: {
                        __typename: "Period",
                        from: "2017-11-30",
                        to: null
                    },
                    title: "Ráðuneyti Katrínar Jakobsdóttur"
                },
                division: {
                    __typename: "Division",
                    majority: [],
                    minority: [
                        {
                            __typename: "Party",
                            color: "8ec83e"
                        },
                        {
                            __typename: "Party",
                            color: null
                        },
                        {
                            __typename: "Party",
                            color: "488e41"
                        },
                        {
                            __typename: "Party",
                            color: "00adef"
                        },
                        {
                            __typename: "Party",
                            color: "da2128"
                        },
                        {
                            __typename: "Party",
                            color: "522c7f"
                        },
                        {
                            __typename: "Party",
                            color: "f6a71d"
                        },
                        {
                            __typename: "Party",
                            color: "EE4D9B"
                        },
                        {
                            __typename: "Party",
                            color: "199094"
                        }
                    ]
                },
                id: 149,
                period: {
                    __typename: "Period",
                    from: "2018-09-11",
                    to: null
                }
            },
            inflation: [
                {
                    __typename: "Inflation",
                    date: "2017-12-21",
                    id: 20171221,
                    value: 1.9
                },
                {
                    __typename: "Inflation",
                    date: "2018-01-29",
                    id: 20180129,
                    value: 2.4
                },
                {
                    __typename: "Inflation",
                    date: "2018-02-27",
                    id: 20180227,
                    value: 2.3
                },
                {
                    __typename: "Inflation",
                    date: "2018-03-26",
                    id: 20180326,
                    value: 2.8
                },
                {
                    __typename: "Inflation",
                    date: "2018-04-27",
                    id: 20180427,
                    value: 2.3
                },
                {
                    __typename: "Inflation",
                    date: "2018-05-29",
                    id: 20180529,
                    value: 2
                },
                {
                    __typename: "Inflation",
                    date: "2018-06-27",
                    id: 20180627,
                    value: 2.6
                },
                {
                    __typename: "Inflation",
                    date: "2018-07-23",
                    id: 20180723,
                    value: 2.7
                },
                {
                    __typename: "Inflation",
                    date: "2018-08-30",
                    id: 20180830,
                    value: 2.6
                },
                {
                    __typename: "Inflation",
                    date: "2018-09-27",
                    id: 20180927,
                    value: 2.7
                },
                {
                    __typename: "Inflation",
                    date: "2018-10-29",
                    id: 20181029,
                    value: 2.8
                },
                {
                    __typename: "Inflation",
                    date: "2018-11-29",
                    id: 20181129,
                    value: 3.3
                },
                {
                    __typename: "Inflation",
                    date: "2018-12-20",
                    id: 20181220,
                    value: 3.7
                },
                {
                    __typename: "Inflation",
                    date: "2019-01-29",
                    id: 20190129,
                    value: 3.4
                },
                {
                    __typename: "Inflation",
                    date: "2019-02-27",
                    id: 20190227,
                    value: 3
                },
                {
                    __typename: "Inflation",
                    date: "2019-03-27",
                    id: 20190327,
                    value: 2.9
                }
            ],
        },
        assemblySummary: {
            __typename: "AssemblyStatistics",
            averageAge: 50.0476,
            parties: [
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "522c7f",
                        id: 43,
                        name: "Píratar"
                    },
                    time: 184973
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "da2128",
                        id: 38,
                        name: "Samfylkingin"
                    },
                    time: 200040
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: null,
                        id: 17,
                        name: "Utan þingflokka"
                    },
                    time: 11493
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "EE4D9B",
                        id: 46,
                        name: "Flokkur fólksins"
                    },
                    time: 97650
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "00adef",
                        id: 35,
                        name: "Sjálfstæðisflokkur"
                    },
                    time: 364920
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "f6a71d",
                        id: 45,
                        name: "Viðreisn"
                    },
                    time: 153928
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "8ec83e",
                        id: 2,
                        name: "Framsóknarflokkur"
                    },
                    time: 191303
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "488e41",
                        id: 23,
                        name: "Vinstrihreyfingin - grænt framboð"
                    },
                    time: 267629
                },
                {
                    __typename: "PartyTimes",
                    party: {
                        __typename: "Party",
                        color: "199094",
                        id: 47,
                        name: "Miðflokkurinn"
                    },
                    time: 682387
                }
            ],
            error: null,
            loading: false
        },
        congressmenPerformance: {
            error: null,
            loading: false,
            bills: [
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1215/1215-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RS",
                            id: 45,
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        id: 1215,
                        name: "Björn Leví Gunnarsson",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 41
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1218/1218-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RN",
                            id: 44,
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        id: 1218,
                        name: "Halldóra Mogensen",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 41
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1166/1166-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RN",
                            id: 44,
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        id: 1166,
                        name: "Helgi Hrafn Gunnarsson",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 38
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1168/1168-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SV",
                            id: 52,
                            name: "Suðvesturkjördæmi"
                        },
                        id: 1168,
                        name: "Jón Þór Ólafsson",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 37
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
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
                    },
                    value: 35
                }
            ],
            questions: [
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1215/1215-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RS",
                            id: 45,
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        id: 1215,
                        name: "Björn Leví Gunnarsson",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 83
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1332/1332-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RS",
                            id: 45,
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        id: 1332,
                        name: "Inga Sæland",
                        party: {
                            __typename: "Party",
                            color: "EE4D9B",
                            id: 46,
                            name: "Flokkur fólksins"
                        }
                    },
                    value: 39
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1168/1168-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SV",
                            id: 52,
                            name: "Suðvesturkjördæmi"
                        },
                        id: 1168,
                        name: "Jón Þór Ólafsson",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 26
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1334/1334-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RN",
                            id: 44,
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        id: 1334,
                        name: "Ólafur Ísleifsson",
                        party: {
                            __typename: "Party",
                            color: "EE4D9B",
                            id: 46,
                            name: "Flokkur fólksins"
                        }
                    },
                    value: 19
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1333/1333-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SU",
                            id: 46,
                            name: "Suðurkjördæmi"
                        },
                        id: 1333,
                        name: "Karl Gauti Hjaltason",
                        party: {
                            __typename: "Party",
                            color: "EE4D9B",
                            id: 46,
                            name: "Flokkur fólksins"
                        }
                    },
                    value: 17
                }
            ],
            resolutions: [
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1257/1257-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "NV",
                            id: 53,
                            name: "Norðvesturkjördæmi"
                        },
                        id: 1257,
                        name: "Guðjón S. Brjánsson",
                        party: {
                            __typename: "Party",
                            color: "da2128",
                            id: 38,
                            name: "Samfylkingin"
                        }
                    },
                    value: 27
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1215/1215-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RS",
                            id: 45,
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        id: 1215,
                        name: "Björn Leví Gunnarsson",
                        party: {
                            __typename: "Party",
                            color: "522c7f",
                            id: 43,
                            name: "Píratar"
                        }
                    },
                    value: 26
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/719/719-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SU",
                            id: 46,
                            name: "Suðurkjördæmi"
                        },
                        id: 719,
                        name: "Oddný G. Harðardóttir",
                        party: {
                            __typename: "Party",
                            color: "da2128",
                            id: 38,
                            name: "Samfylkingin"
                        }
                    },
                    value: 25
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1324/1324-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "NA",
                            id: 49,
                            name: "Norðausturkjördæmi"
                        },
                        id: 1324,
                        name: "Albertína Friðbjörg Elíasdóttir",
                        party: {
                            __typename: "Party",
                            color: "da2128",
                            id: 38,
                            name: "Samfylkingin"
                        }
                    },
                    value: 25
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
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
                    },
                    value: 24
                }
            ],
            speeches: [
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1129/1129-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "SU",
                            id: 46,
                            name: "Suðurkjördæmi"
                        },
                        id: 1129,
                        name: "Birgir Þórarinsson",
                        party: {
                            __typename: "Party",
                            color: "199094",
                            id: 47,
                            name: "Miðflokkurinn"
                        }
                    },
                    value: 126501
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1179/1179-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RS",
                            id: 45,
                            name: "Reykjavíkurkjördæmi suður"
                        },
                        id: 1179,
                        name: "Þorsteinn Sæmundsson",
                        party: {
                            __typename: "Party",
                            color: "199094",
                            id: 47,
                            name: "Miðflokkurinn"
                        }
                    },
                    value: 116499
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/729/729-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "NA",
                            id: 49,
                            name: "Norðausturkjördæmi"
                        },
                        id: 729,
                        name: "Sigmundur Davíð Gunnlaugsson",
                        party: {
                            __typename: "Party",
                            color: "199094",
                            id: 47,
                            name: "Miðflokkurinn"
                        }
                    },
                    value: 80926
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1334/1334-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "RN",
                            id: 44,
                            name: "Reykjavíkurkjördæmi norður"
                        },
                        id: 1334,
                        name: "Ólafur Ísleifsson",
                        party: {
                            __typename: "Party",
                            color: "EE4D9B",
                            id: 46,
                            name: "Flokkur fólksins"
                        }
                    },
                    value: 71599
                },
                {
                    __typename: "CongressmanValue",
                    congressman: {
                        __typename: "Congressman",
                        avatar: {
                            __typename: "Image",
                            templateSrc: "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1327/1327-220.jpg"
                        },
                        constituency: {
                            __typename: "Constituency",
                            abbr_short: "NV",
                            id: 53,
                            name: "Norðvesturkjördæmi"
                        },
                        id: 1327,
                        name: "Bergþór Ólason",
                        party: {
                            __typename: "Party",
                            color: "199094",
                            id: 47,
                            name: "Miðflokkurinn"
                        }
                    },
                    value: 70229
                }
            ]
        },
        issues: {
            issues: [
                {
                    __typename: "IssueValue",
                    issue: {
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
                    value: null
                },
                {
                    __typename: "IssueValue",
                    issue: {
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
                    value: null
                },
                {
                    __typename: "IssueValue",
                    issue: {
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
                    value: null
                },
                {
                    __typename: "IssueValue",
                    issue: {
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
                    value: null
                },
                {
                    __typename: "IssueValue",
                    issue: {
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
                    value: null
                }
            ],
            error: null,
            loading: false
        },
        issuesSummary: {
            __typename: "AssemblyIssuesSummary",
            bills: [
                {
                    __typename: "StatusValue",
                    count: 2,
                    status: "Í nefnd eftir 2. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 1,
                    status: "Vísað til ríkisstjórnar"
                },
                {
                    __typename: "StatusValue",
                    count: 73,
                    status: "Samþykkt sem lög frá Alþingi"
                },
                {
                    __typename: "StatusValue",
                    count: 22,
                    status: "Bíður 2. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 86,
                    status: "Í nefnd eftir 1. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 75,
                    status: "Bíður 1. umræðu"
                }
            ],
            categories: [
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 6,
                        title: "Fjárreiður ríkisins"
                    },
                    count: 188
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 15,
                        title: "Félagsmál"
                    },
                    count: 134
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 5,
                        title: "Viðskipti"
                    },
                    count: 108
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 32,
                        title: "Alþjóðasamningar og utanríkismál"
                    },
                    count: 71
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 17,
                        title: "Heilbrigðismál"
                    },
                    count: 66
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 19,
                        title: "Menningarmál"
                    },
                    count: 59
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 8,
                        title: "Skattar og tollar"
                    },
                    count: 59
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 31,
                        title: "Umhverfisstjórn og náttúruvernd"
                    },
                    count: 56
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 21,
                        title: "Löggæsla og eftirlit"
                    },
                    count: 54
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 20,
                        title: "Menntamál"
                    },
                    count: 51
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 24,
                        title: "Samgöngur"
                    },
                    count: 45
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 22,
                        title: "Dómstólar og réttarfar"
                    },
                    count: 42
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 33,
                        title: "Persónuleg réttindi"
                    },
                    count: 41
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 13,
                        title: "Byggðamál"
                    },
                    count: 39
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 34,
                        title: "Tölvu- og upplýsingamál"
                    },
                    count: 34
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 3,
                        title: "Landbúnaður"
                    },
                    count: 26
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 12,
                        title: "Atvinnumál"
                    },
                    count: 26
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 14,
                        title: "Sveitarstjórnarmál"
                    },
                    count: 25
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 29,
                        title: "Mengun"
                    },
                    count: 23
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 25,
                        title: "Alþingi"
                    },
                    count: 22
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 11,
                        title: "Almannatryggingar"
                    },
                    count: 22
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 30,
                        title: "Orkumál og auðlindir"
                    },
                    count: 22
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 1,
                        title: "Ferðaþjónusta"
                    },
                    count: 18
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 4,
                        title: "Sjávarútvegur"
                    },
                    count: 18
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 26,
                        title: "Stjórnkerfi og stjórnarskipunarmál"
                    },
                    count: 17
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 7,
                        title: "Efnahagsmál"
                    },
                    count: 13
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 16,
                        title: "Heilbrigðiseftirlit"
                    },
                    count: 12
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 27,
                        title: "Þjóðkirkjan"
                    },
                    count: 8
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 10,
                        title: "Norræn málefni"
                    },
                    count: 7
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 23,
                        title: "Fjarskipti og póstmál"
                    },
                    count: 7
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 28,
                        title: "Trúfélög og trúarbrögð"
                    },
                    count: 4
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 18,
                        title: "Íþróttir og æskulýðsmál"
                    },
                    count: 3
                },
                {
                    __typename: "CategoryValue",
                    category: {
                        __typename: "Category",
                        id: 2,
                        title: "Iðnaður"
                    },
                    count: 3
                }
            ],
            governmentBills: [
                {
                    __typename: "StatusValue",
                    count: 4,
                    status: "Bíður 1. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 61,
                    status: "Samþykkt sem lög frá Alþingi"
                },
                {
                    __typename: "StatusValue",
                    count: 20,
                    status: "Bíður 2. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 37,
                    status: "Í nefnd eftir 1. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 2,
                    status: "Í nefnd eftir 2. umræðu"
                }
            ],
            proposals: [
                {
                    __typename: "StatusValue",
                    count: 5,
                    status: "Bíður 2. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 51,
                    status: "Í nefnd eftir 1. umræðu"
                },
                {
                    __typename: "StatusValue",
                    count: 2,
                    status: "Vísað til ríkisstjórnar"
                },
                {
                    __typename: "StatusValue",
                    count: 34,
                    status: "Samþykkt sem ályktun Alþingis"
                },
                {
                    __typename: "StatusValue",
                    count: 54,
                    status: "Bíður 1. umræðu"
                }
            ],
            types: [
                {
                    __typename: "TypeValue",
                    count: 466,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "q",
                        typeName: "Fyrirspurn",
                        typeSubName: "fyrirspurn til skrifl. svars"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 259,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "l",
                        typeName: "Frumvarp til laga",
                        typeSubName: "lagafrumvarp"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 146,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "a",
                        typeName: "Tillaga til þingsályktunar",
                        typeSubName: "þingsályktunartillaga"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 53,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "m",
                        typeName: "Fyrirspurn",
                        typeSubName: "fyrirspurn"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 23,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "s",
                        typeName: "Skýrsla",
                        typeSubName: "skýrsla"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 12,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "b",
                        typeName: "Beiðni um skýrslu",
                        typeSubName: "beiðni um skýrslu"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 2,
                    type: {
                        __typename: "Type",
                        category: "a",
                        type: "n",
                        typeName: "Álit",
                        typeSubName: "álit nefndar"
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 306,
                    type: {
                        __typename: "Type",
                        category: "b",
                        type: "ft",
                        typeName: "óundirbúinn fyrirspurnatími",
                        typeSubName: null
                    }
                },
                {
                    __typename: "TypeValue",
                    count: 37,
                    type: {
                        __typename: "Type",
                        category: "b",
                        type: "um",
                        typeName: "sérstök umræða",
                        typeSubName: null
                    }
                }
            ]
        }
    };

    return (
        <div>
            <Router>
                <Assembly {...data as any} />
            </Router>
        </div>
    )
});
