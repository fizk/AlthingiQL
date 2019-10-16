import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import AssemblyCongressmen from '../AssemblyCongressmen';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('AssemblyCongressmen', () => {
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
        "assembly": 149,
        "congressmen": [
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/707/707-220.jpg"
                },
                "id": 707,
                "name": "Ásmundur Einar Daðason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1330/1330-220.jpg"
                },
                "id": 1330,
                "name": "Halla Signý Kristjánsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1244/1244-220.jpg"
                },
                "id": 1244,
                "name": "Lilja Alfreðsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1170/1170-220.jpg"
                },
                "id": 1170,
                "name": "Líneik Anna Sævarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/726/726-220.jpg"
                },
                "id": 726,
                "name": "Sigurður Ingi Jóhannsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1174/1174-220.jpg"
                },
                "id": 1174,
                "name": "Silja Dögg Gunnarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1178/1178-220.jpg"
                },
                "id": 1178,
                "name": "Willum Þór Þórsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1180/1180-220.jpg"
                },
                "id": 1180,
                "name": "Þórunn Egilsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1234/1234-220.jpg"
                },
                "id": 1234,
                "name": "Andrés Ingi Jónsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1249/1249-220.jpg"
                },
                "id": 1249,
                "name": "Ari Trausti Guðmundsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1012/1012-220.jpg"
                },
                "id": 1012,
                "name": "Bjarkey Olsen Gunnarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/690/690-220.jpg"
                },
                "id": 690,
                "name": "Katrín Jakobsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1265/1265-220.jpg"
                },
                "id": 1265,
                "name": "Kolbeinn Óttarsson Proppé",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/714/714-220.jpg"
                },
                "id": 714,
                "name": "Lilja Rafney Magnúsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1001/1001-220.jpg"
                },
                "id": 1001,
                "name": "Ólafur Þór Gunnarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1183/1183-220.jpg"
                },
                "id": 1183,
                "name": "Rósa Björk Brynjólfsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/557/557-220.jpg"
                },
                "id": 557,
                "name": "Steingrímur J. Sigfússon",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1031/1031-220.jpg"
                },
                "id": 1031,
                "name": "Steinunn Þóra Árnadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/730/730-220.jpg"
                },
                "id": 730,
                "name": "Svandís Svavarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1261/1261-220.jpg"
                },
                "id": 1261,
                "name": "Áslaug Arna Sigurbjörnsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1157/1157-220.jpg"
                },
                "id": 1157,
                "name": "Ásmundur Friðriksson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/650/650-220.jpg"
                },
                "id": 650,
                "name": "Birgir Ármannsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                },
                "id": 652,
                "name": "Bjarni Benediktsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1039/1039-220.jpg"
                },
                "id": 1039,
                "name": "Bryndís Haraldsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1160/1160-220.jpg"
                },
                "id": 1160,
                "name": "Brynjar Níelsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/656/656-220.jpg"
                },
                "id": 656,
                "name": "Guðlaugur Þór Þórðarson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1164/1164-220.jpg"
                },
                "id": 1164,
                "name": "Haraldur Benediktsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/688/688-220.jpg"
                },
                "id": 688,
                "name": "Jón Gunnarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/691/691-220.jpg"
                },
                "id": 691,
                "name": "Kristján Þór Júlíusson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1255/1255-220.jpg"
                },
                "id": 1255,
                "name": "Njáll Trausti Friðbertsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/999/999-220.jpg"
                },
                "id": 999,
                "name": "Óli Björn Kárason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1266/1266-220.jpg"
                },
                "id": 1266,
                "name": "Páll Magnússon",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1018/1018-220.jpg"
                },
                "id": 1018,
                "name": "Sigríður Á. Andersen",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1176/1176-220.jpg"
                },
                "id": 1176,
                "name": "Vilhjálmur Árnason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1252/1252-220.jpg"
                },
                "id": 1252,
                "name": "Þórdís Kolbrún R. Gylfadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/647/647-220.jpg"
                },
                "id": 647,
                "name": "Ágúst Ólafur Ágústsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1324/1324-220.jpg"
                },
                "id": 1324,
                "name": "Albertína Friðbjörg Elíasdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1257/1257-220.jpg"
                },
                "id": 1257,
                "name": "Guðjón S. Brjánsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1328/1328-220.jpg"
                },
                "id": 1328,
                "name": "Guðmundur Andri Thorsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1331/1331-220.jpg"
                },
                "id": 1331,
                "name": "Helga Vala Helgadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1128/1128-220.jpg"
                },
                "id": 1128,
                "name": "Logi Einarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/719/719-220.jpg"
                },
                "id": 719,
                "name": "Oddný G. Harðardóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1215/1215-220.jpg"
                },
                "id": 1215,
                "name": "Björn Leví Gunnarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1218/1218-220.jpg"
                },
                "id": 1218,
                "name": "Halldóra Mogensen",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1166/1166-220.jpg"
                },
                "id": 1166,
                "name": "Helgi Hrafn Gunnarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1168/1168-220.jpg"
                },
                "id": 1168,
                "name": "Jón Þór Ólafsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1268/1268-220.jpg"
                },
                "id": 1268,
                "name": "Smári McCarthy",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1270/1270-220.jpg"
                },
                "id": 1270,
                "name": "Þórhildur Sunna Ævarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1276/1276-220.jpg"
                },
                "id": 1276,
                "name": "Hanna Katrín Friðriksson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1250/1250-220.jpg"
                },
                "id": 1250,
                "name": "Jón Steindór Valdimarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/632/632-220.jpg"
                },
                "id": 632,
                "name": "Þorgerður K. Gunnarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1254/1254-220.jpg"
                },
                "id": 1254,
                "name": "Þorsteinn Víglundsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1329/1329-220.jpg"
                },
                "id": 1329,
                "name": "Guðmundur Ingi Kristinsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1332/1332-220.jpg"
                },
                "id": 1332,
                "name": "Inga Sæland",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1333/1333-220.jpg"
                },
                "id": 1333,
                "name": "Karl Gauti Hjaltason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1334/1334-220.jpg"
                },
                "id": 1334,
                "name": "Ólafur Ísleifsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1326/1326-220.jpg"
                },
                "id": 1326,
                "name": "Anna Kolbrún Árnadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1327/1327-220.jpg"
                },
                "id": 1327,
                "name": "Bergþór Ólason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1129/1129-220.jpg"
                },
                "id": 1129,
                "name": "Birgir Þórarinsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/722/722-220.jpg"
                },
                "id": 722,
                "name": "Gunnar Bragi Sveinsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/729/729-220.jpg"
                },
                "id": 729,
                "name": "Sigmundur Davíð Gunnlaugsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1203/1203-220.jpg"
                },
                "id": 1203,
                "name": "Sigurður Páll Jónsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1179/1179-220.jpg"
                },
                "id": 1179,
                "name": "Þorsteinn Sæmundsson",
                "party": null
            }
        ],
        "substitutes": [
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1346/1346-220.jpg"
                },
                "id": 1346,
                "name": "Alex B. Stefánsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1358/1358-220.jpg"
                },
                "id": 1358,
                "name": "Ásgerður K. Gylfadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1202/1202-220.jpg"
                },
                "id": 1202,
                "name": "Hjálmar Bogi Hafliðason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1365/1365-220.jpg"
                },
                "id": 1365,
                "name": "Jóhann Friðrik Friðriksson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1370/1370-220.jpg"
                },
                "id": 1370,
                "name": "Lilja Rannveig Sigurgeirsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1345/1345-220.jpg"
                },
                "id": 1345,
                "name": "Þórarinn Ingi Pétursson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/676/676-220.jpg"
                },
                "id": 676,
                "name": "Álfheiður Ingadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1369/1369-220.jpg"
                },
                "id": 1369,
                "name": "Berglind Häsler",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1354/1354-220.jpg"
                },
                "id": 1354,
                "name": "Fjölnir Sæmundsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1380/1380-220.jpg"
                },
                "id": 1380,
                "name": "Gísli Garðarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1364/1364-220.jpg"
                },
                "id": 1364,
                "name": "Heiða Guðný Ásgeirsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1236/1236-220.jpg"
                },
                "id": 1236,
                "name": "Ingibjörg Þórðardóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1342/1342-220.jpg"
                },
                "id": 1342,
                "name": "Una Hildardóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1298/1298-220.jpg"
                },
                "id": 1298,
                "name": "Albert Guðmundsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1279/1279-220.jpg"
                },
                "id": 1279,
                "name": "Hildur Sverrisdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1242/1242-220.jpg"
                },
                "id": 1242,
                "name": "Karen Elísabet Halldórsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1256/1256-220.jpg"
                },
                "id": 1256,
                "name": "Teitur Björn Einarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/721/721-220.jpg"
                },
                "id": 721,
                "name": "Unnur Brá Konráðsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1175/1175-220.jpg"
                },
                "id": 1175,
                "name": "Valgerður Gunnarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1004/1004-220.jpg"
                },
                "id": 1004,
                "name": "Arna Lára Jónsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1376/1376-220.jpg"
                },
                "id": 1376,
                "name": "Bjartur Aðalbjörnsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1378/1378-220.jpg"
                },
                "id": 1378,
                "name": "Einar Kárason",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/141/141-220.jpg"
                },
                "id": 141,
                "name": "Ellert B. Schram",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1367/1367-220.jpg"
                },
                "id": 1367,
                "name": "Jóhanna Vigdís Guðmundsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/723/723-220.jpg"
                },
                "id": 723,
                "name": "Margrét Tryggvadóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1348/1348-220.jpg"
                },
                "id": 1348,
                "name": "María Hjálmarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1363/1363-220.jpg"
                },
                "id": 1363,
                "name": "Njörður Sigurðsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1172/1172-220.jpg"
                },
                "id": 1172,
                "name": "Páll Valur Björnsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1351/1351-220.jpg"
                },
                "id": 1351,
                "name": "Álfheiður Eymarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1297/1297-220.jpg"
                },
                "id": 1297,
                "name": "Katla Hólm Þórhildardóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1341/1341-220.jpg"
                },
                "id": 1341,
                "name": "Olga Margrét Cilia",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1289/1289-220.jpg"
                },
                "id": 1289,
                "name": "Sara Elísa Þórðardóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1360/1360-220.jpg"
                },
                "id": 1360,
                "name": "Snæbjörn Brynjarsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1251/1251-220.jpg"
                },
                "id": 1251,
                "name": "Pawel Bartoszek",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1350/1350-220.jpg"
                },
                "id": 1350,
                "name": "Sigríður María Egilsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1362/1362-220.jpg"
                },
                "id": 1362,
                "name": "Jónína Björk Óskarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1340/1340-220.jpg"
                },
                "id": 1340,
                "name": "Elvar Eyvindsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1355/1355-220.jpg"
                },
                "id": 1355,
                "name": "Jón Þór Þorvaldsson",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1344/1344-220.jpg"
                },
                "id": 1344,
                "name": "Maríanna Eva Ragnarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1121/1121-220.jpg"
                },
                "id": 1121,
                "name": "Una María Óskarsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1379/1379-220.jpg"
                },
                "id": 1379,
                "name": "Valgerður Sveinsdóttir",
                "party": null
            },
            {
                "__typename": "Congressman",
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "avatar": {
                    "__typename": "Image",
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1366/1366-220.jpg"
                },
                "id": 1366,
                "name": "Þorgrímur Sigmundsson",
                "party": null
            }
        ],
        loading: false,
        error: undefined,
    };

    return (
        <div>
            <Router>
                <AssemblyCongressmen {...data as any} />
            </Router>
        </div>
    )
});
