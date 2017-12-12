import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import '../../public/stylesheets/storybook.css';
import {
    BillBadge,
    ParliamentaryResolutionBadge,
    OpinionBadge,
    InquiryBadge,
    WrittenInquiryBadge,
    RequestForReportBadge,
    ReportBadge,
    MeetingPostponementBadge
} from "../../src/client/elements/IssueBadge";

const billIssues = [
    {
    assembly:{
        id: 146,
    },
    goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
    "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
    "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
    "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
    id:1,
    name:"fjárlög 2017",
    proponents:[{
        id: 652,
        name:"Bjarni BenediktssonBenediktsson",
        party: {
            color: "0000ff",
            id: 35,
            name: "Sjálfstæðisflokkur",
        }
    }],
    proponentsCount:14,
    status:"Bíður 1. umræðu",
    type:"l",
    typeName:"Frumvarp til laga",
},
    {
    assembly:{
        id: 146,
    },
    goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
    "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
    "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
    "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
    id:2,
    name:"málefni Brúneggja ehf. og upplýsingagjöf til almennings um brot á reglum um dýravelferð",
    proponents:[{
        id: 1324,
        name:"Albertína Friðbjörg Elíasdóttir",
        party: {
            color: "0000ff",
            id: 35,
            name: "Sjálfstæðisflokkur",
        }
    }],
    proponentsCount:3,
    status:"Bíður 2. umræðu",
    type:"l",
    typeName:"Bíður 2. umræðu",
},
    {
    assembly:{
        id: 146,
    },
    goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
    "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
    "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
    "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
    id:3,
    name:"skyldutrygging lífeyrisréttinda og starfsemi lífeyrissjóða",
    proponents:[{
        id: 652,
        name:"Bjarni Benediktsson",
        party: {
            color: "0000ff",
            id: 35,
            name: "Sjálfstæðisflokkur",
        }
    }],
    proponentsCount:1,
    status:"Í nefnd eftir 1. umræðu",
    type:"l",
    typeName:"Frumvarp til laga",
},
    {
    assembly:{
        id: 146,
    },
    goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
    "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
    "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
    "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
    id:4,
    name:"fjárlög 2017",
    proponents:[{
        id: 652,
        name:"Bjarni Benediktsson",
        party: {
            color: "0000ff",
            id: 35,
            name: "Sjálfstæðisflokkur",
        }
    }],
    proponentsCount:1,
    status:"Í nefnd eftir 2. umræðu",
    type:"l",
    typeName:"Frumvarp til laga",
},
    {
    assembly:{
        id: 146,
    },
    goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
    "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
    "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
    "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
    id:5,
    name:"breyting á ályktun Alþingis um rannsókn á kaupum á 45,8% eignarhlut í Búnaðarbanka Íslands hf. o.fl.",
    proponents:[{
        id: 652,
        name:"Bjarni Benediktsson",
        party: {
            color: "0000ff",
            id: 35,
            name: "Sjálfstæðisflokkur",
        }
    }],
    proponentsCount:1,
    status:"Samþykkt sem lög frá Alþingi",
    type:"l",
    typeName:"Frumvarp til laga",
},
    {
    assembly:{
        id: 146,
    },
    goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
    "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
    "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
    "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
    id:6,
    name:"málefni fatlaðs fólks og aðbúnaður, hollustuhættir og öryggi á vinnustöðum",
    proponents:[{
        id: 652,
        name:"Bjarni Benediktsson",
        party: {
            color: "0000ff",
            id: 35,
            name: "Sjálfstæðisflokkur",
        }
    }],
    proponentsCount:1,
    status:"Vísað til ríkisstjórnar",
    type:"l",
    typeName:"Vísað til ríkisstjórnar",
}
];
const resolutionIssues = [
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:1,
        name:"fjárlög 2017",
        proponents:[{
            id: 652,
            name:"Bjarni BenediktssonBenediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:14,
        status:"Bíður 1. umræðu",
        type:"a",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:2,
        name:"málefni Brúneggja ehf. og upplýsingagjöf til almennings um brot á reglum um dýravelferð",
        proponents:[{
            id: 1324,
            name:"Albertína Friðbjörg Elíasdóttir",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:3,
        status:"Bíður 2. umræðu",
        type:"a",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:3,
        name:"skyldutrygging lífeyrisréttinda og starfsemi lífeyrissjóða",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Í nefnd eftir 1. umræðu",
        type:"a",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:4,
        name:"fjárlög 2017",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Í nefnd eftir 2. umræðu",
        type:"a",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:5,
        name:"breyting á ályktun Alþingis um rannsókn á kaupum á 45,8% eignarhlut í Búnaðarbanka Íslands hf. o.fl.",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Samþykkt sem lög frá Alþingi",
        type:"a",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:6,
        name:"málefni fatlaðs fólks og aðbúnaður, hollustuhættir og öryggi á vinnustöðum",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Vísað til ríkisstjórnar",
        type:"a",
        typeName:"Tillaga til þingsályktunar",
    }
];
const opinionIssues = [
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:1,
        name:"fjárlög 2017",
        status:"Bíður 1. umræðu",
        type:"n",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:2,
        name:"málefni Brúneggja ehf. og upplýsingagjöf til almennings um brot á reglum um dýravelferð",
        status:"Bíður 2. umræðu",
        type:"n",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:3,
        name:"skyldutrygging lífeyrisréttinda og starfsemi lífeyrissjóða",
        status:"Í nefnd eftir 1. umræðu",
        type:"n",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:4,
        name:"fjárlög 2017",
        status:"Í nefnd eftir 2. umræðu",
        type:"n",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:5,
        name:"breyting á ályktun Alþingis um rannsókn á kaupum á 45,8% eignarhlut í Búnaðarbanka Íslands hf. o.fl.",
        status:"Samþykkt sem lög frá Alþingi",
        type:"n",
        typeName:"Tillaga til þingsályktunar",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:6,
        name:"málefni fatlaðs fólks og aðbúnaður, hollustuhættir og öryggi á vinnustöðum",
        status:"Vísað til ríkisstjórnar",
        type:"n",
        typeName:"Tillaga til þingsályktunar",
    }
];
const inquiryIssues = [
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:1,
        name:"fjárlög 2017",
        proponents:[{
            id: 652,
            name:"Bjarni BenediktssonBenediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:14,
        status:"Bíður 1. umræðu",
        type:"m",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:2,
        name:"málefni Brúneggja ehf. og upplýsingagjöf til almennings um brot á reglum um dýravelferð",
        proponents:[{
            id: 1324,
            name:"Albertína Friðbjörg Elíasdóttir",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:3,
        status:"Bíður 2. umræðu",
        type:"m",
        typeName:"Bíður 2. umræðu",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:3,
        name:"skyldutrygging lífeyrisréttinda og starfsemi lífeyrissjóða",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Í nefnd eftir 1. umræðu",
        type:"m",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:4,
        name:"fjárlög 2017",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Í nefnd eftir 2. umræðu",
        type:"m",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:5,
        name:"breyting á ályktun Alþingis um rannsókn á kaupum á 45,8% eignarhlut í Búnaðarbanka Íslands hf. o.fl.",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Samþykkt sem lög frá Alþingi",
        type:"m",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:6,
        name:"málefni fatlaðs fólks og aðbúnaður, hollustuhættir og öryggi á vinnustöðum",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Vísað til ríkisstjórnar",
        type:"m",
        typeName:"Vísað til ríkisstjórnar",
    }
];
const writtenInquiryIssues = [
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:1,
        name:"fjárlög 2017",
        proponents:[{
            id: 652,
            name:"Bjarni BenediktssonBenediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:14,
        status:"Bíður 1. umræðu",
        type:"q",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:2,
        name:"málefni Brúneggja ehf. og upplýsingagjöf til almennings um brot á reglum um dýravelferð",
        proponents:[{
            id: 1324,
            name:"Albertína Friðbjörg Elíasdóttir",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:3,
        status:"Bíður 2. umræðu",
        type:"q",
        typeName:"Bíður 2. umræðu",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:3,
        name:"skyldutrygging lífeyrisréttinda og starfsemi lífeyrissjóða",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Í nefnd eftir 1. umræðu",
        type:"q",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:4,
        name:"fjárlög 2017",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Í nefnd eftir 2. umræðu",
        type:"q",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:5,
        name:"breyting á ályktun Alþingis um rannsókn á kaupum á 45,8% eignarhlut í Búnaðarbanka Íslands hf. o.fl.",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Samþykkt sem lög frá Alþingi",
        type:"q",
        typeName:"Frumvarp til laga",
    },
    {
        assembly:{
            id: 146,
        },
        goal:"Að sýna áætlanir um tekjur og gjöld ríkissjóðs fyrir hvert það ár " +
        "sem í hönd fer og leita heimilda til hvers konar fjárráðstafana, svo sem " +
        "lántöku og ríkisábyrgða og heimilda til að kaupa og selja fasteignir. " +
        "Fjárlagafrumvarp er nú í fyrsta skipti lagt fyrir Alþingi á grundvelli nýrra laga um opinber fjármál.",
        id:6,
        name:"málefni fatlaðs fólks og aðbúnaður, hollustuhættir og öryggi á vinnustöðum",
        proponents:[{
            id: 652,
            name:"Bjarni Benediktsson",
            party: {
                color: "0000ff",
                id: 35,
                name: "Sjálfstæðisflokkur",
            }
        }],
        proponentsCount:1,
        status:"Vísað til ríkisstjórnar",
        type:"q",
        typeName:"Vísað til ríkisstjórnar",
    }
];


storiesOf('IssueBadge', module)
    .add('<BillBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {billIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <BillBadge issue={issue} congressman={issue.proponents.reduce((a, b) => b, undefined)} />
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<ParliamentaryResolutionBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {resolutionIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <ParliamentaryResolutionBadge issue={issue}  congressman={issue.proponents.reduce((a, b) => b, undefined)} />
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<OpinionBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {opinionIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <OpinionBadge issue={issue}/>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<InquiryBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {inquiryIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <InquiryBadge issue={issue}  congressman={issue.proponents.reduce((a, b) => b, undefined)}/>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<WrittenInquiryBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {writtenInquiryIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <WrittenInquiryBadge issue={issue}  congressman={issue.proponents.reduce((a, b) => b, undefined)}/>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<RequestForReportBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {writtenInquiryIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <RequestForReportBadge issue={issue}  congressman={issue.proponents.reduce((a, b) => b, undefined)}/>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<ReportBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {writtenInquiryIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <ReportBadge issue={issue}  congressman={issue.proponents.reduce((a, b) => b, undefined)}/>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
    .add('<MeetingPostponementBadge />', () => (
        <div>
            <Router>
                <Route>
                    <ul style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '16px', gridRowGap: '16px'}}>
                        {writtenInquiryIssues.map(issue => (
                            <li key={`issue-${issue.id}`}>
                                <MeetingPostponementBadge issue={issue}  congressman={issue.proponents.reduce((a, b) => b, undefined)}/>
                            </li>
                        ))}
                    </ul>
                </Route>
            </Router>
        </div>
    ))
;
