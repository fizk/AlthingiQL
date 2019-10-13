import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import IssueDocuments from '../IssueDocuments';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('IssueDocuments', () => {
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
        assembly: 149,
        issue: 1,
        category: 'A',
        loading: false,
        error: undefined,
        "issueProperties": {
            "issue": {
                "__typename": "IssueA",
                "additionalInformation": "*Fjármála- og efnahagsráðuneytið*\n\n  \n\n\n[Frétt og kynningarefni](https://www.stjornarradid.is/efst-a-baugi/frettir/stok-frett/2018/09/11/Fjarlagafrumvarp-2019/) 11.9.2018.\n\n  \n\n\n[Fjárlög fyrir árið 2019](https://www.stjornarradid.is/verkefni/efnahagsmal-og-opinber-fjarmal/fjarlog/fjarlog-fyrir-arid-2019/). Safn upplýsinga vegna fjárlaga fyrir árið 2019.\n\n  \n\n\n[Rekstur og eignir ríkisins](https://www.stjornarradid.is/verkefni/rekstur-og-eignir-rikisins/). Upplýsingavefur um rekstur og eignir ríkisins.\n\n  \n\n\n  \n\n\n*Fjársýsla ríkisins*\n\n  \n\n\n[Ríkisreikningur](http://www.fjs.is/utgefid-efni/rikisreikningur/). Rafrænar útgáfur ríkisreikninga.\n\n  \n\n\n[Ríkisreikningur](http://rikisreikningur.is/). Sundurliðun á tekjum og gjöldum ríkisins frá árinu 2004 til dagsins í dag.\n\n\n\n  \n\n\n  \n\n\n*Hagstofan*\n\n  \n\n\n[Fjármál hins opinbera](https://hagstofa.is/talnaefni/efnahagur/fjarmal-hins-opinbera/). Útgáfur, talnaefni, fréttatilkynningar.\n\n  \n\n\n[Efnahagur](http://px.hagstofa.is/pxis/pxweb/is/Efnahagur/?rxid=83f22697-35a4-41d7-b80d-74d6aa37d1a0). Hér er hægt að sækja sögulegar, tölulegar upplýsingar um: fjármál hins opinbera, þjóðhagsreikninga, þjóðhagsspá, utanríkisverslun og verðlag.\n\n\n\n  \n\n\n  \n\n\n*Seðlabanki Íslands*\n\n  \n\n\n[Fjármálastöðugleiki](https://www.sedlabanki.is/fjarmalastodugleiki/).\n\n  \n\n\n[Hagtölur](https://www.sedlabanki.is/hagtolur/hagtolur/). Seðlabankinn annast skipulega öflun, skráningu og úrvinnslu tölfræðilegra gagna.\n\n  \n\n\n[Hagvísar Seðlabanka Íslands](https://www.sedlabanki.is/utgefid-efni/rit-og-skyrslur/rit-og-skyrslur-oll-ar/?all=1). Yfirlit efnahagsmála og safn hagvísa.",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "changesInLaw": "Gera þarf breytingar á ýmsum lögum vegna tekjuhliðar og gjaldahliðar frumvarpsins.",
                "costsAndRevenues": "Áætlað er að tekjur fyrir árið 2019 verði 891,7 milljarðar króna og útgjöld eru áætluð 862,7 milljarðar króna.",
                "date": "2018-09-11T15:43:00Z",
                "deliveries": "Frumvarpið varð að lögum með þeim breytingum að heildartekjur fyrir árið 2019 eru áætlaðar 892 milljarðar króna en gjöld um 863,5 milljarðar króna.",
                "goal": "Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir.",
                "id": 1,
                "majorChanges": "Lögð eru til aukin framlög til heilbrigðismála vegna framkvæmda við nýjan Landspítala og byggingar og rekstrar hjúkrunarheimila. Einnig er gert ráð fyrir hækkun framlaga til félags-, húsnæðis- og tryggingamála. Gert er ráð fyrir auknum útgjöldum til samgöngumála vegna sérstaks átaks í samgöngumálum á árunum 2019-2021. Að auki er lagt til að nýjar þyrlur verði keyptar fyrir Landhelgisgæsluna og að framkvæmdir hefjist við Hús íslenskunnar. Lagt er til að persónuafsláttur hækki um 1 prósentustig umfram lögbundna 12 mánaða hækkun vísitölu neysluverðs á árinu 2019. Jafnframt er gert ráð fyrir því að hækkun þrepamarka efra skattþreps verði miðuð við vísitölu neysluverðs. Að auki er gert ráð fyrir hækkun barnabóta og lækkun tryggingagjalds.",
                "name": "fjárlög 2019",
                "proponents": [
                    {
                        "__typename": "Proponent",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        "id": 652,
                        "name": "Bjarni Benediktsson",
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
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                            },
                            "id": 652,
                            "name": "Bjarni Benediktsson",
                            "party": {
                                "__typename": "Party",
                                "color": "00adef",
                                "id": 35,
                                "name": "Sjálfstæðisflokkur"
                            }
                        },
                        "value": 6005
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/647/647-220.jpg"
                            },
                            "id": 647,
                            "name": "Ágúst Ólafur Ágústsson",
                            "party": {
                                "__typename": "Party",
                                "color": "da2128",
                                "id": 38,
                                "name": "Samfylkingin"
                            }
                        },
                        "value": 6353
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
                        "value": 12536
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
                        "value": 8991
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
                        "value": 14949
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
                        "value": 6531
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
                        "value": 3998
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
                        "value": 7063
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
                        "value": 14943
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1164/1164-220.jpg"
                            },
                            "id": 1164,
                            "name": "Haraldur Benediktsson",
                            "party": {
                                "__typename": "Party",
                                "color": "00adef",
                                "id": 35,
                                "name": "Sjálfstæðisflokkur"
                            }
                        },
                        "value": 3408
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
                        "value": 4646
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
                        "value": 772
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
                        "value": 5908
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
                        "value": 5013
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
                        "value": 4410
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
                        "value": 884
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
                        "value": 3277
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/690/690-220.jpg"
                            },
                            "id": 690,
                            "name": "Katrín Jakobsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "488e41",
                                "id": 23,
                                "name": "Vinstrihreyfingin - grænt framboð"
                            }
                        },
                        "value": 1887
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
                        "value": 3926
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1180/1180-220.jpg"
                            },
                            "id": 1180,
                            "name": "Þórunn Egilsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "8ec83e",
                                "id": 2,
                                "name": "Framsóknarflokkur"
                            }
                        },
                        "value": 243
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
                        "value": 3025
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
                        "value": 2669
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1252/1252-220.jpg"
                            },
                            "id": 1252,
                            "name": "Þórdís Kolbrún R. Gylfadóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "00adef",
                                "id": 35,
                                "name": "Sjálfstæðisflokkur"
                            }
                        },
                        "value": 2094
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
                        "value": 2671
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
                        "value": 2149
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
                        "value": 2237
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/730/730-220.jpg"
                            },
                            "id": 730,
                            "name": "Svandís Svavarsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "488e41",
                                "id": 23,
                                "name": "Vinstrihreyfingin - grænt framboð"
                            }
                        },
                        "value": 2616
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
                        "value": 3939
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1157/1157-220.jpg"
                            },
                            "id": 1157,
                            "name": "Ásmundur Friðriksson",
                            "party": {
                                "__typename": "Party",
                                "color": "00adef",
                                "id": 35,
                                "name": "Sjálfstæðisflokkur"
                            }
                        },
                        "value": 331
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1289/1289-220.jpg"
                            },
                            "id": 1289,
                            "name": "Sara Elísa Þórðardóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "522c7f",
                                "id": 43,
                                "name": "Píratar"
                            }
                        },
                        "value": 368
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1218/1218-220.jpg"
                            },
                            "id": 1218,
                            "name": "Halldóra Mogensen",
                            "party": {
                                "__typename": "Party",
                                "color": "522c7f",
                                "id": 43,
                                "name": "Píratar"
                            }
                        },
                        "value": 2084
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
                        "value": 484
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1362/1362-220.jpg"
                            },
                            "id": 1362,
                            "name": "Jónína Björk Óskarsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "EE4D9B",
                                "id": 46,
                                "name": "Flokkur fólksins"
                            }
                        },
                        "value": 269
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/691/691-220.jpg"
                            },
                            "id": 691,
                            "name": "Kristján Þór Júlíusson",
                            "party": {
                                "__typename": "Party",
                                "color": "00adef",
                                "id": 35,
                                "name": "Sjálfstæðisflokkur"
                            }
                        },
                        "value": 2182
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1270/1270-220.jpg"
                            },
                            "id": 1270,
                            "name": "Þórhildur Sunna Ævarsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "522c7f",
                                "id": 43,
                                "name": "Píratar"
                            }
                        },
                        "value": 789
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/726/726-220.jpg"
                            },
                            "id": 726,
                            "name": "Sigurður Ingi Jóhannsson",
                            "party": {
                                "__typename": "Party",
                                "color": "8ec83e",
                                "id": 2,
                                "name": "Framsóknarflokkur"
                            }
                        },
                        "value": 2600
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
                        "value": 3235
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
                        "value": 1016
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1170/1170-220.jpg"
                            },
                            "id": 1170,
                            "name": "Líneik Anna Sævarsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "8ec83e",
                                "id": 2,
                                "name": "Framsóknarflokkur"
                            }
                        },
                        "value": 581
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1244/1244-220.jpg"
                            },
                            "id": 1244,
                            "name": "Lilja Alfreðsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "8ec83e",
                                "id": 2,
                                "name": "Framsóknarflokkur"
                            }
                        },
                        "value": 2285
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1363/1363-220.jpg"
                            },
                            "id": 1363,
                            "name": "Njörður Sigurðsson",
                            "party": {
                                "__typename": "Party",
                                "color": "da2128",
                                "id": 38,
                                "name": "Samfylkingin"
                            }
                        },
                        "value": 208
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
                        "value": 240
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1250/1250-220.jpg"
                            },
                            "id": 1250,
                            "name": "Jón Steindór Valdimarsson",
                            "party": {
                                "__typename": "Party",
                                "color": "f6a71d",
                                "id": 45,
                                "name": "Viðreisn"
                            }
                        },
                        "value": 773
                    },
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
                        "value": 1870
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
                        "value": 1763
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
                        "value": 425
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
                        "value": 2378
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1018/1018-220.jpg"
                            },
                            "id": 1018,
                            "name": "Sigríður Á. Andersen",
                            "party": {
                                "__typename": "Party",
                                "color": "00adef",
                                "id": 35,
                                "name": "Sjálfstæðisflokkur"
                            }
                        },
                        "value": 2292
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/707/707-220.jpg"
                            },
                            "id": 707,
                            "name": "Ásmundur Einar Daðason",
                            "party": {
                                "__typename": "Party",
                                "color": "8ec83e",
                                "id": 2,
                                "name": "Framsóknarflokkur"
                            }
                        },
                        "value": 4368
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
                        "value": 13
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
                        "value": 28
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
                        "value": 4604
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1328/1328-220.jpg"
                            },
                            "id": 1328,
                            "name": "Guðmundur Andri Thorsson",
                            "party": {
                                "__typename": "Party",
                                "color": "da2128",
                                "id": 38,
                                "name": "Samfylkingin"
                            }
                        },
                        "value": 2562
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/719/719-220.jpg"
                            },
                            "id": 719,
                            "name": "Oddný G. Harðardóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "da2128",
                                "id": 38,
                                "name": "Samfylkingin"
                            }
                        },
                        "value": 5159
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/714/714-220.jpg"
                            },
                            "id": 714,
                            "name": "Lilja Rafney Magnúsdóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "488e41",
                                "id": 23,
                                "name": "Vinstrihreyfingin - grænt framboð"
                            }
                        },
                        "value": 2607
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
                        "value": 328
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
                        "value": 905
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
                        "value": 1819
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
                        "value": 775
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1251/1251-220.jpg"
                            },
                            "id": 1251,
                            "name": "Pawel Bartoszek",
                            "party": {
                                "__typename": "Party",
                                "color": "f6a71d",
                                "id": 45,
                                "name": "Viðreisn"
                            }
                        },
                        "value": 1001
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
                        "value": 441
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1031/1031-220.jpg"
                            },
                            "id": 1031,
                            "name": "Steinunn Þóra Árnadóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "488e41",
                                "id": 23,
                                "name": "Vinstrihreyfingin - grænt framboð"
                            }
                        },
                        "value": 201
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1234/1234-220.jpg"
                            },
                            "id": 1234,
                            "name": "Andrés Ingi Jónsson",
                            "party": {
                                "__typename": "Party",
                                "color": "488e41",
                                "id": 23,
                                "name": "Vinstrihreyfingin - grænt framboð"
                            }
                        },
                        "value": 180
                    },
                    {
                        "__typename": "CongressmanValue",
                        "congressman": {
                            "__typename": "Congressman",
                            "avatar": {
                                "__typename": "Image",
                                "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/676/676-220.jpg"
                            },
                            "id": 676,
                            "name": "Álfheiður Ingadóttir",
                            "party": {
                                "__typename": "Party",
                                "color": "488e41",
                                "id": 23,
                                "name": "Vinstrihreyfingin - grænt framboð"
                            }
                        },
                        "value": 145
                    }
                ],
                "status": "Samþykkt sem lög frá Alþingi",
                "subName": null,
                "type": {
                    "__typename": "Type",
                    "category": "a",
                    "typeName": "Frumvarp til laga",
                    "typeSubName": "lagafrumvarp"
                }
            }
        },
        "documents": [
            {
                "__typename": "Document",
                "date": "2018-09-11 15:43:00",
                "id": 1,
                "proponents": [
                    {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        "id": 652,
                        "name": "Bjarni Benediktsson",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    }
                ],
                "type": "stjórnarfrumvarp",
                "url": "http://www.althingi.is/altext/149/s/0001.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 55996,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Frv. gengur til 2. umr.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": "fjárlaganefnd",
                        "id": 55997,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Frv. gengur",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56348,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56342,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56351,
                        "inaction": 24,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56343,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56352,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Frv. gengur til 3. umr.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": "fjárlaganefnd",
                        "id": 56353,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Frv. gengur (eftir 2. umr.)",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56340,
                        "inaction": 25,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56344,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56341,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Þskj.",
                        "yes": 33
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:29:00",
                "id": 446,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0446.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:29:00",
                "id": 447,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0447.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56243,
                        "inaction": 19,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56236,
                        "inaction": 9,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 50
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56239,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 38
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56248,
                        "inaction": 9,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 49
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56250,
                        "inaction": 15,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 44
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56252,
                        "inaction": 10,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 49
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56240,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56244,
                        "inaction": 18,
                        "no": 6,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 35
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56238,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56242,
                        "inaction": 13,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 46
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56251,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56245,
                        "inaction": 13,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 45
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56262,
                        "inaction": 17,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 41
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56292,
                        "inaction": 19,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56282,
                        "inaction": 19,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56271,
                        "inaction": 24,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 35
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56274,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56280,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56294,
                        "inaction": 10,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 48
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56266,
                        "inaction": 17,
                        "no": 8,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56276,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56287,
                        "inaction": 9,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 50
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56263,
                        "inaction": 8,
                        "no": 6,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 44
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56277,
                        "inaction": 8,
                        "no": 12,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 37
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56293,
                        "inaction": 23,
                        "no": 1,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56278,
                        "inaction": 25,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 34
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56283,
                        "inaction": 10,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 48
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56291,
                        "inaction": 25,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56255,
                        "inaction": 18,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56258,
                        "inaction": 9,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 49
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56269,
                        "inaction": 25,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 34
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56272,
                        "inaction": 11,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 47
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56295,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56268,
                        "inaction": 11,
                        "no": 15,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56264,
                        "inaction": 24,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56288,
                        "inaction": 16,
                        "no": 10,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56260,
                        "inaction": 17,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 42
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56284,
                        "inaction": 16,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 43
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56279,
                        "inaction": 12,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 47
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56270,
                        "inaction": 20,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56273,
                        "inaction": 19,
                        "no": 7,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56285,
                        "inaction": 12,
                        "no": 7,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56312,
                        "inaction": 7,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 50
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56308,
                        "inaction": 5,
                        "no": 21,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56298,
                        "inaction": 18,
                        "no": 2,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 39
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56302,
                        "inaction": 17,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 38
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56305,
                        "inaction": 25,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 34
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56313,
                        "inaction": 16,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 43
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56304,
                        "inaction": 6,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 53
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56316,
                        "inaction": 0,
                        "no": 26,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56306,
                        "inaction": 14,
                        "no": 12,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56301,
                        "inaction": 8,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 51
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56338,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56317,
                        "inaction": 13,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 46
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56331,
                        "inaction": 18,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56328,
                        "inaction": 17,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 41
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56334,
                        "inaction": 3,
                        "no": 23,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56322,
                        "inaction": 11,
                        "no": 15,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56318,
                        "inaction": 13,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 46
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56339,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56330,
                        "inaction": 8,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 51
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56326,
                        "inaction": 17,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 42
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56319,
                        "inaction": 11,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 48
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56336,
                        "inaction": 16,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 43
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56327,
                        "inaction": 8,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 49
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:21:00",
                "id": 448,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0448.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56234,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56233,
                        "inaction": 16,
                        "no": 6,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 37
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:17:00",
                "id": 449,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0449.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56345,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Brtt.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56346,
                        "inaction": 21,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 38
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56347,
                        "inaction": 19,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:19:00",
                "id": 450,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0450.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56349,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Brtt.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56350,
                        "inaction": 26,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:17:00",
                "id": 451,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0451.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-11-14 19:21:00",
                "id": 452,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0452.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56226,
                        "inaction": 4,
                        "no": 48,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 7
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56241,
                        "inaction": 3,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 22
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56253,
                        "inaction": 8,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 17
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56296,
                        "inaction": 12,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 14
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56286,
                        "inaction": 11,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56289,
                        "inaction": 11,
                        "no": 31,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56281,
                        "inaction": 5,
                        "no": 40,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 14
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56256,
                        "inaction": 3,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56267,
                        "inaction": 6,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 20
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56314,
                        "inaction": 9,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 17
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56299,
                        "inaction": 4,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 21
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56307,
                        "inaction": 0,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 26
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56309,
                        "inaction": 0,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 26
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56333,
                        "inaction": 8,
                        "no": 36,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56320,
                        "inaction": 9,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 18
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56332,
                        "inaction": 9,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 17
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56323,
                        "inaction": 8,
                        "no": 34,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 13:26:00",
                "id": 459,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0459.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 13:37:00",
                "id": 460,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0460.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56237,
                        "inaction": 12,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 14
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56247,
                        "inaction": 3,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56249,
                        "inaction": 6,
                        "no": 38,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 14
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56265,
                        "inaction": 1,
                        "no": 40,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 18
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56259,
                        "inaction": 9,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56297,
                        "inaction": 10,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56261,
                        "inaction": 6,
                        "no": 39,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 14
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56257,
                        "inaction": 3,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 22
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56275,
                        "inaction": 11,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 13
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56300,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Brtt.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56337,
                        "inaction": 5,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 21
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56324,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Brtt.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56329,
                        "inaction": 9,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 17
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 12:32:00",
                "id": 461,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0461.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 12:51:00",
                "id": 462,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0462.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56229,
                        "inaction": 13,
                        "no": 40,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 6
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56228,
                        "inaction": 2,
                        "no": 50,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 6
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56227,
                        "inaction": 8,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 18
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56246,
                        "inaction": 0,
                        "no": 40,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 17
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56230,
                        "inaction": 19,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 7
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56254,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 26
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56290,
                        "inaction": 1,
                        "no": 50,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 7
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56303,
                        "inaction": 1,
                        "no": 31,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 25
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56315,
                        "inaction": 0,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 26
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56311,
                        "inaction": 0,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 26
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56321,
                        "inaction": 3,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56335,
                        "inaction": 3,
                        "no": 31,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 14:25:00",
                "id": 463,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0463.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 12:49:00",
                "id": 464,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0464.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56205,
                        "inaction": 0,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Of skammt var liðið frá útbýtingu --- Afbrigði",
                        "yes": 47
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56310,
                        "inaction": 0,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 26
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 12:51:00",
                "id": 471,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0471.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56235,
                        "inaction": 12,
                        "no": 41,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 6
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-11-15 20:12:00",
                "id": 476,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0476.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56232,
                        "inaction": 8,
                        "no": 38,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 12
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56231,
                        "inaction": 20,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 6
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56325,
                        "inaction": 11,
                        "no": 33,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 15
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 14:49:00",
                "id": 511,
                "proponents": [],
                "type": "frumvarp eftir 2. umræðu",
                "url": "http://www.althingi.is/altext/149/s/0511.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56523,
                        "inaction": 21,
                        "no": 3,
                        "outcome": "samþykkt",
                        "type": "Frv.",
                        "yes": 32
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-04 17:09:00",
                "id": 583,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0583.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-12-04 17:09:00",
                "id": 584,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0584.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56490,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 30
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56499,
                        "inaction": 19,
                        "no": 4,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56511,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 31
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56479,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56488,
                        "inaction": 18,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 37
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56493,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56507,
                        "inaction": 21,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56491,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 31
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56509,
                        "inaction": 18,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 35
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56504,
                        "inaction": 13,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56476,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56494,
                        "inaction": 14,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 41
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56502,
                        "inaction": 21,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56497,
                        "inaction": 22,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56478,
                        "inaction": 20,
                        "no": 3,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56483,
                        "inaction": 22,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56481,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56513,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56515,
                        "inaction": 14,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56519,
                        "inaction": 22,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 33
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56517,
                        "inaction": 14,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 40
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-04 17:09:00",
                "id": 585,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0585.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56521,
                        "inaction": 2,
                        "no": 21,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 31
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-04 17:09:00",
                "id": 586,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0586.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56522,
                        "inaction": 10,
                        "no": 13,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 31
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-04 18:28:00",
                "id": 587,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0587.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-12-04 18:28:00",
                "id": 588,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0588.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56505,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56495,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 22
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56512,
                        "inaction": 6,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 17
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56484,
                        "inaction": 10,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 13
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56480,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56492,
                        "inaction": 7,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 16
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56510,
                        "inaction": 2,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 20
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56501,
                        "inaction": 0,
                        "no": 31,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 21
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 14:50:00",
                "id": 591,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0591.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 15:10:00",
                "id": 597,
                "proponents": [],
                "type": "nefndarálit",
                "url": "http://www.althingi.is/altext/149/s/0597.html",
                "votes": []
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 14:50:00",
                "id": 598,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0598.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56418,
                        "inaction": 0,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Of skammt var liðið frá útbýtingu --- Afbrigði",
                        "yes": 51
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56475,
                        "inaction": 14,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 8
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 15:27:00",
                "id": 600,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0600.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56487,
                        "inaction": 3,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 52
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 15:27:00",
                "id": 601,
                "proponents": [
                    {
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
                    {
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
                    {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1250/1250-220.jpg"
                        },
                        "id": 1250,
                        "name": "Jón Steindór Valdimarsson",
                        "party": {
                            "__typename": "Party",
                            "color": "f6a71d",
                            "id": 45,
                            "name": "Viðreisn"
                        }
                    },
                    {
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
                    }
                ],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0601.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56503,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 22
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56498,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56496,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56489,
                        "inaction": 7,
                        "no": 36,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 12
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56500,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56508,
                        "inaction": 0,
                        "no": 31,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 22
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56514,
                        "inaction": 0,
                        "no": 30,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56485,
                        "inaction": 0,
                        "no": 0,
                        "outcome": null,
                        "type": "Brtt.",
                        "yes": 0
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56506,
                        "inaction": 0,
                        "no": 32,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 23
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56516,
                        "inaction": 10,
                        "no": 31,
                        "outcome": "Fellt",
                        "type": "Brtt.",
                        "yes": 13
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-05 16:28:00",
                "id": 604,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0604.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56463,
                        "inaction": 1,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Of skammt var liðið frá útbýtingu --- Afbrigði",
                        "yes": 52
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56520,
                        "inaction": 3,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 51
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-07 10:26:00",
                "id": 615,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0615.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56477,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-07 10:26:00",
                "id": 616,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0616.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56486,
                        "inaction": 6,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 42
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-07 10:26:00",
                "id": 617,
                "proponents": [],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0617.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56518,
                        "inaction": 23,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 32
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-07 10:26:00",
                "id": 618,
                "proponents": [
                    {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/690/690-220.jpg"
                        },
                        "id": 690,
                        "name": "Katrín Jakobsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "488e41",
                            "id": 23,
                            "name": "Vinstrihreyfingin - grænt framboð"
                        }
                    },
                    {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/726/726-220.jpg"
                        },
                        "id": 726,
                        "name": "Sigurður Ingi Jóhannsson",
                        "party": {
                            "__typename": "Party",
                            "color": "8ec83e",
                            "id": 2,
                            "name": "Framsóknarflokkur"
                        }
                    },
                    {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                        },
                        "id": 652,
                        "name": "Bjarni Benediktsson",
                        "party": {
                            "__typename": "Party",
                            "color": "00adef",
                            "id": 35,
                            "name": "Sjálfstæðisflokkur"
                        }
                    },
                    {
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
                    {
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
                    {
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
                    {
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
                    {
                        "__typename": "Congressman",
                        "avatar": {
                            "__typename": "Image",
                            "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1270/1270-220.jpg"
                        },
                        "id": 1270,
                        "name": "Þórhildur Sunna Ævarsdóttir",
                        "party": {
                            "__typename": "Party",
                            "color": "522c7f",
                            "id": 43,
                            "name": "Píratar"
                        }
                    }
                ],
                "type": "breytingartillaga",
                "url": "http://www.althingi.is/altext/149/s/0618.html",
                "votes": [
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56464,
                        "inaction": 0,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Of skammt var liðið frá útbýtingu --- Afbrigði",
                        "yes": 42
                    },
                    {
                        "__typename": "VoteResult",
                        "committee": null,
                        "id": 56482,
                        "inaction": 6,
                        "no": 0,
                        "outcome": "samþykkt",
                        "type": "Brtt.",
                        "yes": 48
                    }
                ]
            },
            {
                "__typename": "Document",
                "date": "2018-12-07 15:23:00",
                "id": 632,
                "proponents": [],
                "type": "lög í heild",
                "url": "http://www.althingi.is/altext/149/s/0632.html",
                "votes": []
            }
        ],
    };

    return (
        <div>
            <Router>
                <IssueDocuments {...data as any} />
            </Router>
        </div>
    )
});
