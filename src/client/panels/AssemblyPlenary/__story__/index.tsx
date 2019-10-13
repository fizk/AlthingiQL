import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {action} from '@storybook/addon-actions';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import AssemblyPlenary from '../AssemblyPlenary';
import '../../../components/Chrome/index.scss';

const stories = storiesOf('Panel', module);
stories.addDecorator(withKnobs);

stories.add('AssemblyPlenary', () => {
    const data = {
        "assembly": 149,
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
        "plenaryItems": [
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "B",
                "comment": "1",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 1,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueB",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 748,
                    "name": "óundirbúinn fyrirspurnatími",
                    "speechCount": null,
                    "speechTime": null,
                    "type": {
                        "__typename": "Type",
                        "category": "b",
                        "type": "ft",
                        "typeName": "óundirbúinn fyrirspurnatími",
                        "typeSubName": null
                    }
                },
                "iterationComment": null,
                "iterationContinue": null,
                "iterationType": "*",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "3",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 3,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 779,
                    "name": "vandaðir starfshættir í vísindum",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "4",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 4,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 780,
                    "name": "upplýsingalög",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Í nefnd eftir 1. umræðu",
                    "subName": "útvíkkun gildissviðs o.fl.",
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "l",
                        "typeName": "Frumvarp til laga",
                        "typeSubName": "lagafrumvarp"
                    }
                },
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "5",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 5,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 772,
                    "name": "skráning einstaklinga",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Bíður 1. umræðu",
                    "subName": null,
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "l",
                        "typeName": "Frumvarp til laga",
                        "typeSubName": "lagafrumvarp"
                    }
                },
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "6",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 6,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 783,
                    "name": "meðferð einkamála o.fl.",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Í nefnd eftir 1. umræðu",
                    "subName": "skilvirkni og samræming málsmeðferðarreglna o.fl.",
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "l",
                        "typeName": "Frumvarp til laga",
                        "typeSubName": "lagafrumvarp"
                    }
                },
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "7",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 7,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 785,
                    "name": "félög til almannaheilla",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "8",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 8,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 794,
                    "name": "skráning raunverulegra eigenda",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "9",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 9,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 778,
                    "name": "Þjóðgarðastofnun og þjóðgarðar",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "10",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 10,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 770,
                    "name": "stéttarfélög og vinnudeilur",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Bíður 1. umræðu",
                    "subName": "aðsetur Félagsdóms",
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "l",
                        "typeName": "Frumvarp til laga",
                        "typeSubName": "lagafrumvarp"
                    }
                },
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "11",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 11,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 771,
                    "name": "framkvæmdaáætlun á sviði barnaverndar 2019--2022",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Bíður fyrri umræðu",
                    "subName": null,
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "a",
                        "typeName": "Tillaga til þingsályktunar",
                        "typeSubName": "þingsályktunartillaga"
                    }
                },
                "iterationComment": "fyrri umræða",
                "iterationContinue": null,
                "iterationType": "F",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "12",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 12,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 767,
                    "name": "samtök um evrópska rannsóknarinnviði (ERIC)",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "13",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 13,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 797,
                    "name": "höfundalög",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Í nefnd eftir 1. umræðu",
                    "subName": "flytjanleiki efnisveituþjónustu á Netinu yfir landamæri á innri markaðnum",
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "l",
                        "typeName": "Frumvarp til laga",
                        "typeSubName": "lagafrumvarp"
                    }
                },
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "14",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 14,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 799,
                    "name": "sameiginleg umsýsla höfundarréttar",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "15",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 15,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 798,
                    "name": "lýðskólar",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "16",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 16,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 800,
                    "name": "sviðslistir",
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
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            },
            {
                "__typename": "PlenaryAgendaItem",
                "answerer": null,
                "answererCongressman": null,
                "assembly": {
                    "__typename": "Assembly",
                    "id": 149
                },
                "category": "A",
                "comment": "17",
                "commentType": null,
                "counterAnswererCongressman": null,
                "id": 17,
                "instigatorCongressman": null,
                "issue": {
                    "__typename": "IssueA",
                    "assembly": {
                        "__typename": "Assembly",
                        "id": 149
                    },
                    "id": 781,
                    "name": "stjórnsýsla búvörumála",
                    "proponents": [],
                    "proponentsCount": 0,
                    "speechCount": null,
                    "speechTime": null,
                    "status": "Í nefnd eftir 1. umræðu",
                    "subName": "flutningur málefna búnaðarstofu",
                    "type": {
                        "__typename": "Type",
                        "category": "a",
                        "type": "l",
                        "typeName": "Frumvarp til laga",
                        "typeSubName": "lagafrumvarp"
                    }
                },
                "iterationComment": "1. umræða",
                "iterationContinue": null,
                "iterationType": "1",
                "plenaryId": 94,
                "posedCongressman": null,
                "posedId": null
            }
        ],
        loading: false,
        error: undefined,
    };

    return (
        <div>
            <Router>
                <AssemblyPlenary {...data as any} />
            </Router>
        </div>
    )
});
