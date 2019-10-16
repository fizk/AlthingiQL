import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Issue, {IssueGrid, IssueGridItem} from '..';
import {IssueA} from "../../../../../@types";
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Issue', module);

const data = [
    {
        "id": 1,
        "assembly": {
            "id": 149
        },
        "name": "fjárlög 2019",
        "subName": 'samfjármögnun alþjóðlegra rannsóknaráætlana og sjálfstæð stjórn Innviðasjóðs',
        "type": {
            "type": "l",
            "category": "a",
            "typeName": "Frumvarp til laga",
            "typeSubName": "lagafrumvarp"
        },
        "status": "Samþykkt sem lög frá Alþingi",
        "date": "2018-09-11T15:43:00Z",
        "speechCount": 987,
        "proponents": [
            {
                "id": 652,
                "name": "Bjarni Benediktsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/652/652-220.jpg"
                },
                "party": {
                    "id": 35,
                    "name": "Sjálfstæðisflokkur",
                    "color": "00adef"
                },
                "order": 1,
                "minister": 'forsætisrádherra',
            }
        ],
        "proponentsCount": 1
    },
    {
        "id": 688,
        "assembly": {
            "id": 149
        },
        "name": "skýrsla Ríkisendurskoðunar um eftirlit Fiskistofu",
        "subName": null,
        "type": {
            "type": "n",
            "category": "a",
            "typeName": "Álit",
            "typeSubName": "álit nefndar"
        },
        "status": null,
        "date": "2019-03-19T13:16:00Z",
        "speechCount": 27,
        "proponents": [],
        "proponentsCount": 0
    },
    {
        "id": 159,
        "assembly": {
            "id": 149
        },
        "name": "kostir og gallar aðildar Íslands að samningnum um Evrópska efnahagssvæðið",
        "subName": 'samfjármögnun alþjóðlegra rannsóknaráætlana og sjálfstæð stjórn Innviðasjóðs',
        "type": {
            "type": "b",
            "category": "a",
            "typeName": "Beiðni um skýrslu",
            "typeSubName": "beiðni um skýrslu"
        },
        "status": null,
        "date": "2018-09-27T12:42:00Z",
        "speechCount": 8,
        "proponents": [
            {
                "id": 1334,
                "name": "Ólafur Ísleifsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1334/1334-220.jpg"
                },
                "party": {
                    "id": 46,
                    "name": "Flokkur fólksins",
                    "color": "EE4D9B"
                },
                "order": 1,
                "minister": 'forsætisrádherra'
            },
        ],
        "proponentsCount": 13
    },
    {
        "id": 115,
        "assembly": {
            "id": 149
        },
        "name": "hámarkshraði",
        "subName": null,
        "type": {
            "type": "m",
            "category": "a",
            "typeName": "Fyrirspurn",
            "typeSubName": "fyrirspurn"
        },
        "status": "Fyrirspurninni var svarað munnlega",
        "date": "2018-09-18T17:39:00Z",
        "speechCount": 7,
        "proponents": [
            {
                "id": 632,
                "name": "Þorgerður K. Gunnarsdóttir",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/632/632-220.jpg"
                },
                "party": {
                    "id": 45,
                    "name": "Viðreisn",
                    "color": "f6a71d"
                }
            }
        ],
        "proponentsCount": 1
    },
    {
        "id": 36,
        "assembly": {
            "id": 149
        },
        "name": "breyting á lagaákvæðum um skipta búsetu barna",
        "subName": null,
        "type": {
            "type": "q",
            "category": "a",
            "typeName": "Fyrirspurn",
            "typeSubName": "fyrirspurn til skrifl. svars"
        },
        "status": "Fyrirspurninni var svarað skriflega",
        "date": "2018-09-18T16:24:00Z",
        "speechCount": 0,
        "proponents": [
            {
                "id": 1166,
                "name": "Helgi Hrafn Gunnarsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1166/1166-220.jpg"
                },
                "party": {
                    "id": 43,
                    "name": "Píratar",
                    "color": "522c7f"
                }
            }
        ],
        "proponentsCount": 1
    },
    {
        "id": 141,
        "assembly": {
            "id": 149
        },
        "name": "staða aðgerða samkvæmt ferðamálaáætlun 2011--2020",
        "subName": null,
        "type": {
            "type": "s",
            "category": "a",
            "typeName": "Skýrsla",
            "typeSubName": "skýrsla"
        },
        "status": null,
        "date": "2018-09-24T16:31:00Z",
        "speechCount": 0,
        "proponents": [
            {
                "id": 1252,
                "name": "Þórdís Kolbrún R. Gylfadóttir",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1252/1252-220.jpg"
                },
                "party": {
                    "id": 35,
                    "name": "Sjálfstæðisflokkur",
                    "color": "00adef"
                }
            }
        ],
        "proponentsCount": 1
    },
    {
        "id": 5,
        "assembly": {
            "id": 149
        },
        "name": "aðgerðaáætlun í húsnæðismálum",
        "subName": 'samfjármögnun alþjóðlegra rannsóknaráætlana og sjálfstæð stjórn Innviðasjóðs',
        "type": {
            "type": "a",
            "category": "a",
            "typeName": "Tillaga til þingsályktunar",
            "typeSubName": "þingsályktunartillaga"
        },
        "status": "Í nefnd eftir 1. umræðu",
        "date": "2018-09-27T11:58:00Z",
        "speechCount": 17,
        "proponents": [
            {
                "id": 1128,
                "name": "Logi Einarsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1128/1128-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            },
            {
                "id": 1324,
                "name": "Albertína Friðbjörg Elíasdóttir",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1324/1324-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            },
            {
                "id": 647,
                "name": "Ágúst Ólafur Ágústsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/647/647-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            },
            {
                "id": 1257,
                "name": "Guðjón S. Brjánsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1257/1257-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            },
            {
                "id": 1328,
                "name": "Guðmundur Andri Thorsson",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1328/1328-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            },
            {
                "id": 1331,
                "name": "Helga Vala Helgadóttir",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/1331/1331-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            },
            {
                "id": 719,
                "name": "Oddný G. Harðardóttir",
                "avatar": {
                    "templateSrc": "http://localhost:8000/unsafe/{size}/smart/https://www.althingi.is/myndir/thingmenn-cache/719/719-220.jpg"
                },
                "party": {
                    "id": 38,
                    "name": "Samfylkingin",
                    "color": "da2128"
                }
            }
        ],
        "proponentsCount": 7
    },

    {
        "id": 18,
        "assembly": {
            "id": 149
        },
        "name": "óundirbúinn fyrirspurnatími",
        "type": {
            "type": "ft",
            "category": "b",
            "typeName": "óundirbúinn fyrirspurnatími",
            "typeSubName": null
        }
    },
    {
        "id": 25,
        "assembly": {
            "id": 149
        },
        "name": "orkuöryggi þjóðarinnar",
        "type": {
            "type": "um",
            "category": "b",
            "typeName": "sérstök umræða",
            "typeSubName": null
        }
    }
];

stories.add('Items', () => {
    return (
        <ul>
            {data.map(issue => (
                <li style={{margin: '1rem 0'}} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
                    <Issue issue={issue as unknown as IssueA}/>
                </li>
            ))}
        </ul>
    )
});

stories.add('Grid', () => (
   <IssueGrid>
       {data.map(issue => (
           <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
               <a href="#">
                   <Issue issue={issue as unknown as IssueA}/>
               </a>
           </IssueGridItem>
       ))}
       {data.map(issue => (
           <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
               <Issue issue={issue as unknown as IssueA}/>
           </IssueGridItem>
       ))}
       {data.map(issue => (
           <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
               <Issue issue={issue as unknown as IssueA}/>
           </IssueGridItem>
       ))}
       {data.map(issue => (
           <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
               <Issue issue={issue as unknown as IssueA}/>
           </IssueGridItem>
       ))}
   </IssueGrid>
));

stories.add('Grid Variations', () => (
    <>
        <h2>Large: lg</h2>
        <IssueGrid variations={['lg']}>
            {data.map(issue => (
                <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
                    <a href="#">
                        <Issue issue={issue as unknown as IssueA}/>
                    </a>
                </IssueGridItem>
            ))}
        </IssueGrid>
        <h2>Medium: md</h2>
        <IssueGrid variations={['md']}>
            {data.map(issue => (
                <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
                    <Issue issue={issue as unknown as IssueA}/>
                </IssueGridItem>
            ))}
        </IssueGrid>
        <h2>Small: sm</h2>
        <IssueGrid variations={['sm']}>
            {data.map(issue => (
                <IssueGridItem type={issue.type.type} key={`${issue.type.category}${issue.id}${issue.assembly.id}`}>
                    <Issue issue={issue as unknown as IssueA}/>
                </IssueGridItem>
            ))}
        </IssueGrid>
    </>
));
