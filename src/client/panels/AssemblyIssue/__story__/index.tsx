import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import AssemblyIssue from '../AssemblyIssue';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('AssemblyIssue', () => {
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
        "issue": {
            "__typename": "IssueA",
            "additionalInformation": null,
            "assembly": {
                "__typename": "Assembly",
                "id": 149
            },
            "changesInLaw": null,
            "costsAndRevenues": null,
            "date": "2019-04-01T13:19:00Z",
            "deliveries": null,
            "goal": null,
            "id": 777,
            "majorChanges": null,
            "name": "ákvörðun sameiginlegu EES-nefndarinnar, nr. 93/2017, um breytingu á IV. viðauka (Orka) við EES-samninginn",
            "proponents": [
                {
                    "__typename": "Proponent",
                    "avatar": {
                        "__typename": "Image",
                        "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/656/656-220.jpg"
                    },
                    "id": 656,
                    "name": "Guðlaugur Þór Þórðarson",
                    "party": {
                        "__typename": "Party",
                        "color": "00adef",
                        "id": 35,
                        "name": "Sjálfstæðisflokkur"
                    }
                }
            ],
            "question": null,
            "speakers": [
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/656/656-220.jpg"
                        },
                        "id": 656,
                        "name": "Guðlaugur Þór Þórðarson",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 5254
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1324/1324-220.jpg"
                        },
                        "id": 1324,
                        "name": "Albertína Friðbjörg Elíasdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "da2128",
                            "id": 38,
                            "name": "Samfylkingin"
                        }
                    },
                    "value": 1121
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1160/1160-220.jpg"
                        },
                        "id": 1160,
                        "name": "Brynjar Níelsson",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 1627
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1254/1254-220.jpg"
                        },
                        "id": 1254,
                        "name": "Þorsteinn Víglundsson",
                        "party": {
                            "__typename": "Party",
                            "color": "f6a71d",
                            "id": 45,
                            "name": "Viðreisn"
                        }
                    },
                    "value": 3108
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1334/1334-220.jpg"
                        },
                        "id": 1334,
                        "name": "Ólafur Ísleifsson",
                        "party": {
                            "__typename": "Party",
                            "color": "EE4D9B",
                            "id": 46,
                            "name": "Flokkur fólksins"
                        }
                    },
                    "value": 35995
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/632/632-220.jpg"
                        },
                        "id": 632,
                        "name": "Þorgerður K. Gunnarsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "f6a71d",
                            "id": 45,
                            "name": "Viðreisn"
                        }
                    },
                    "value": 2978
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1179/1179-220.jpg"
                        },
                        "id": 1179,
                        "name": "Þorsteinn Sæmundsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 64729
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/999/999-220.jpg"
                        },
                        "id": 999,
                        "name": "Óli Björn Kárason",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 4337
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1266/1266-220.jpg"
                        },
                        "id": 1266,
                        "name": "Páll Magnússon",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 1607
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1001/1001-220.jpg"
                        },
                        "id": 1001,
                        "name": "Ólafur Þór Gunnarsson",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    "value": 499
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1249/1249-220.jpg"
                        },
                        "id": 1249,
                        "name": "Ari Trausti Guðmundsson",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    "value": 3624
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1129/1129-220.jpg"
                        },
                        "id": 1129,
                        "name": "Birgir Þórarinsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 59612
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1203/1203-220.jpg"
                        },
                        "id": 1203,
                        "name": "Sigurður Páll Jónsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 9806
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1121/1121-220.jpg"
                        },
                        "id": 1121,
                        "name": "Una María Óskarsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 1442
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1012/1012-220.jpg"
                        },
                        "id": 1012,
                        "name": "Bjarkey Olsen Gunnarsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    "value": 341
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/650/650-220.jpg"
                        },
                        "id": 650,
                        "name": "Birgir Ármannsson",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 2841
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1366/1366-220.jpg"
                        },
                        "id": 1366,
                        "name": "Þorgrímur Sigmundsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 1502
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1355/1355-220.jpg"
                        },
                        "id": 1355,
                        "name": "Jón Þór Þorvaldsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 53998
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1039/1039-220.jpg"
                        },
                        "id": 1039,
                        "name": "Bryndís Haraldsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 1804
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1178/1178-220.jpg"
                        },
                        "id": 1178,
                        "name": "Willum Þór Þórsson",
                        "party": {
                            "__typename": "Party",
                            "color": "8ec83e",
                            "id": 2,
                            "name": "Framsóknarflokkur"
                        }
                    },
                    "value": 1642
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1255/1255-220.jpg"
                        },
                        "id": 1255,
                        "name": "Njáll Trausti Friðbertsson",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 1874
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1257/1257-220.jpg"
                        },
                        "id": 1257,
                        "name": "Guðjón S. Brjánsson",
                        "party": {
                            "__typename": "Party",
                            "color": "da2128",
                            "id": 38,
                            "name": "Samfylkingin"
                        }
                    },
                    "value": 899
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1332/1332-220.jpg"
                        },
                        "id": 1332,
                        "name": "Inga Sæland",
                        "party": {
                            "__typename": "Party",
                            "color": "EE4D9B",
                            "id": 46,
                            "name": "Flokkur fólksins"
                        }
                    },
                    "value": 4693
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1268/1268-220.jpg"
                        },
                        "id": 1268,
                        "name": "Smári McCarthy",
                        "party": {
                            "__typename": "Party",
                            "color": "522c7f",
                            "id": 43,
                            "name": "Píratar"
                        }
                    },
                    "value": 2873
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1215/1215-220.jpg"
                        },
                        "id": 1215,
                        "name": "Björn Leví Gunnarsson",
                        "party": {
                            "__typename": "Party",
                            "color": "522c7f",
                            "id": 43,
                            "name": "Píratar"
                        }
                    },
                    "value": 3481
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1128/1128-220.jpg"
                        },
                        "id": 1128,
                        "name": "Logi Einarsson",
                        "party": {
                            "__typename": "Party",
                            "color": "da2128",
                            "id": 38,
                            "name": "Samfylkingin"
                        }
                    },
                    "value": 2998
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1333/1333-220.jpg"
                        },
                        "id": 1333,
                        "name": "Karl Gauti Hjaltason",
                        "party": {
                            "__typename": "Party",
                            "color": "EE4D9B",
                            "id": 46,
                            "name": "Flokkur fólksins"
                        }
                    },
                    "value": 34164
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1330/1330-220.jpg"
                        },
                        "id": 1330,
                        "name": "Halla Signý Kristjánsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "8ec83e",
                            "id": 2,
                            "name": "Framsóknarflokkur"
                        }
                    },
                    "value": 775
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1345/1345-220.jpg"
                        },
                        "id": 1345,
                        "name": "Þórarinn Ingi Pétursson",
                        "party": {
                            "__typename": "Party",
                            "color": "8ec83e",
                            "id": 2,
                            "name": "Framsóknarflokkur"
                        }
                    },
                    "value": 486
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1261/1261-220.jpg"
                        },
                        "id": 1261,
                        "name": "Áslaug Arna Sigurbjörnsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    "value": 4203
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1327/1327-220.jpg"
                        },
                        "id": 1327,
                        "name": "Bergþór Ólason",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 43356
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/729/729-220.jpg"
                        },
                        "id": 729,
                        "name": "Sigmundur Davíð Gunnlaugsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 58427
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1166/1166-220.jpg"
                        },
                        "id": 1166,
                        "name": "Helgi Hrafn Gunnarsson",
                        "party": {
                            "__typename": "Party",
                            "color": "522c7f",
                            "id": 43,
                            "name": "Píratar"
                        }
                    },
                    "value": 7952
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1174/1174-220.jpg"
                        },
                        "id": 1174,
                        "name": "Silja Dögg Gunnarsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "8ec83e",
                            "id": 2,
                            "name": "Framsóknarflokkur"
                        }
                    },
                    "value": 2249
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1326/1326-220.jpg"
                        },
                        "id": 1326,
                        "name": "Anna Kolbrún Árnadóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 16627
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/722/722-220.jpg"
                        },
                        "id": 722,
                        "name": "Gunnar Bragi Sveinsson",
                        "party": {
                            "__typename": "Party",
                            "color": "199094",
                            "id": 47,
                            "name": "Miðflokkurinn"
                        }
                    },
                    "value": 32798
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1331/1331-220.jpg"
                        },
                        "id": 1331,
                        "name": "Helga Vala Helgadóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "da2128",
                            "id": 38,
                            "name": "Samfylkingin"
                        }
                    },
                    "value": 1776
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1276/1276-220.jpg"
                        },
                        "id": 1276,
                        "name": "Hanna Katrín Friðriksson",
                        "party": {
                            "__typename": "Party",
                            "color": "f6a71d",
                            "id": 45,
                            "name": "Viðreisn"
                        }
                    },
                    "value": 79
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1183/1183-220.jpg"
                        },
                        "id": 1183,
                        "name": "Rósa Björk Brynjólfsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    "value": 166
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1265/1265-220.jpg"
                        },
                        "id": 1265,
                        "name": "Kolbeinn Óttarsson Proppé",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    "value": 115
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1329/1329-220.jpg"
                        },
                        "id": 1329,
                        "name": "Guðmundur Ingi Kristinsson",
                        "party": {
                            "__typename": "Party",
                            "color": "EE4D9B",
                            "id": 46,
                            "name": "Flokkur fólksins"
                        }
                    },
                    "value": 2947
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1202/1202-220.jpg"
                        },
                        "id": 1202,
                        "name": "Hjálmar Bogi Hafliðason",
                        "party": {
                            "__typename": "Party",
                            "color": "8ec83e",
                            "id": 2,
                            "name": "Framsóknarflokkur"
                        }
                    },
                    "value": 128
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/557/557-220.jpg"
                        },
                        "id": 557,
                        "name": "Steingrímur J. Sigfússon",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    "value": 1424
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1168/1168-220.jpg"
                        },
                        "id": 1168,
                        "name": "Jón Þór Ólafsson",
                        "party": {
                            "__typename": "Party",
                            "color": "522c7f",
                            "id": 43,
                            "name": "Píratar"
                        }
                    },
                    "value": 100
                },
                {
                    "__typename": "CongressmanValue",
                    "congressman": {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1341/1341-220.jpg"
                        },
                        "id": 1341,
                        "name": "Olga Margrét Cilia",
                        "party": {
                            "__typename": "Party",
                            "color": "522c7f",
                            "id": 43,
                            "name": "Píratar"
                        }
                    },
                    "value": 290
                }
            ],
            "status": "Bíður 2. umræðu",
            "subName": "þriðji orkupakkinn",
            "type": {
                "__typename": "Type",
                "category": "a",
                "typeName": "Tillaga til þingsályktunar",
                "typeSubName": "þingsályktunartillaga"
            }
        },
        "progress": [
            {
                "__typename": "IssueProgress",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "committee": null,
                "completed": true,
                "date": "2019-04-01T02:19:00.000Z",
                "document": {
                    "__typename": "Document",
                    "id": 1237
                },
                "issue": {
                    "__typename": "IssueB",
                    "id": 777,
                    "type": {
                        "__typename": "Type",
                        "category": null
                    }
                },
                "speech": null,
                "title": "stjórnartillaga",
                "type": "document"
            },
            {
                "__typename": "IssueProgress",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "committee": null,
                "completed": true,
                "date": "2019-04-08T06:41:32.000Z",
                "document": {
                    "__typename": "Document",
                    "id": null
                },
                "issue": {
                    "__typename": "IssueB",
                    "id": 777,
                    "type": {
                        "__typename": "Type",
                        "category": null
                    }
                },
                "speech": {
                    "__typename": "Speech",
                    "id": "20190408T164132"
                },
                "title": null,
                "type": "speech"
            },
            {
                "__typename": "IssueProgress",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "committee": null,
                "completed": true,
                "date": "2019-04-09T04:16:52.000Z",
                "document": {
                    "__typename": "Document",
                    "id": null
                },
                "issue": {
                    "__typename": "IssueB",
                    "id": 777,
                    "type": {
                        "__typename": "Type",
                        "category": null
                    }
                },
                "speech": {
                    "__typename": "Speech",
                    "id": "20190409T141652"
                },
                "title": null,
                "type": "speech"
            },
            {
                "__typename": "IssueProgress",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "committee": null,
                "completed": true,
                "date": "2019-04-09T11:04:40.000Z",
                "document": {
                    "__typename": "Document",
                    "id": 1237
                },
                "issue": {
                    "__typename": "IssueB",
                    "id": 777,
                    "type": {
                        "__typename": "Type",
                        "category": null
                    }
                },
                "speech": null,
                "title": "atvædagreidsla",
                "type": "vote"
            }
        ]
    };

    return (
        <div>
            <Router>
                <AssemblyIssue {...data as any} />
            </Router>
        </div>
    )
});
