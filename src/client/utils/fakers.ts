import faker from 'faker';
import {
    Congressman,
    Party,
    Issue,
    Proponent,
    Category,
    SuperCategory,
    Type,
    Document,
    Assembly,
    CongressmanValue, VoteResult, Period, Speech, PlenaryItem, Constituency, Session
} from "../../../@types";


const parties = [
    'Píratar',
    'Sambandsflokkurinn',
    'Sameiningarflokkur alþýðu - Sósíalistaflokkurinn',
    'Samfylkingin',
    'Samtök um kvennalista',
    'Sjálfstæðisflokkur',
    'Sparnaðarbandalagið',
    'Utan þingflokka',
    'Utanflokkabandalagið',
    'Vinstrihreyfingin - grænt framboð',
    'Viðreisn',
    'Þingflokkur frjálslyndra hægrimanna',
];
const issueTypes: Type[] = [
    {
        type: "a",
        category: "A",
        typeName: "Tillaga til þingsályktunar",
        typeSubName: "þingsályktunartillaga"
    },
    {
        type: "b",
        category: "A",
        typeName: "Beiðni um skýrslu",
        typeSubName: "beiðni um skýrslu"
    },
    {
        type: "f",
        category: "A",
        typeName: "Tillaga til þingsályktunar",
        typeSubName: "frestun funda"
    },
    {
        type: "ff",
        category: "B",
        typeName: "fyrirspurnir til ráðherra skv. 7. mgr. 49. gr. þingskapa",
        typeSubName: null
    },
    {
        type: "ft",
        category: "B",
        typeName: "óundirbúinn fyrirspurnatími",
        typeSubName: null
    },
    {
        type: "l",
        category: "A",
        typeName: "Frumvarp til laga",
        typeSubName: "lagafrumvarp"
    },
    {
        type: "m",
        category: "A",
        typeName: "Fyrirspurn",
        typeSubName: "fyrirspurn"
    },
    {
        type: "n",
        category: "A",
        typeName: "Álit",
        typeSubName: "álit nefndar"
    },
    {
        type: "q",
        category: "A",
        typeName: "Fyrirspurn",
        typeSubName: "fyrirspurn til skrifl. svars"
    },
    {
        type: "s",
        category: "A",
        typeName: "Skýrsla",
        typeSubName: "skýrsla"
    },
    {
        type: "ud",
        category: "B",
        typeName: "umræður utan dagskrár",
        typeSubName: null
    },
    {
        type: "um",
        category: "B",
        typeName: "sérstök umræða",
        typeSubName: null
    },
    {
        type: "uu",
        category: "B",
        typeName: "umræður utan dagskrár",
        typeSubName: null
    },
    {
        type: "v",
        category: "A",
        typeName: "Tillaga til þingsályktunar",
        typeSubName: "vantraust"
    }
];
const propositionStatus = [
    null,
    'Bíður 1. umræðu',
    'Bíður 2. umræðu',
    'Ekki samþykkt',
    'Í nefnd eftir 1. umræðu',
    'Samþykkt sem ályktun Alþingis',
    'Vísað til ríkisstjórnar',
];
const billStatus = [
    null,
    'Bíður 1. umræðu',
    'Bíður 2. umræðu',
    'Bíður 3. umræðu',
    'Í nefnd eftir 1. umræðu',
    'Í nefnd eftir 2. umræðu',
    'Samþykkt sem lög frá Alþingi',
    'Vísað til ríkisstjórnar',
];

const documentType = [
    'álit',
    'álit með rökstuddri dagskrá',
    'beiðni um skýrslu',
    'breytingartillaga',
    'framhaldsgreinagerð',
    'framhaldsnefndarálit',
    'frávísunartilllaga',
    'frestun funda',
    'frhnál. með brtt.',
    'frhnál. með frávt.',
    'frhnál. með rökst.',
    'frumvarp',
    'frumvarp eftir 2. umræðu',
    'frumvarp nefndar',
    'frv. (afgr. frá deild)',
    'frv. til. stjórnarsk.',
    'fsp. til munnl. svars',
    'fsp. til skrifl. svars',
    'lög (m.áo.br.)',
    'lög (samhlj.)',
    'lög í heild',
    'nál. með brtt.',
    'nál. með frávt.',
    'nál. með rökst.',
    'nál. með þáltil.',
    'nefndarálit',
    'rökstudd dagskrá',
    'skýrsla (skv. beiðni)',
    '"skýrsla (skv. beiðni, framh"',
    'skýrsla n.',
    'skýrsla n. (framhald)',
    'skýrsla n. (frumskjal)',
    'skýrsla rh. (frumskjal)',
    'skýrsla rh. (viðbót)',
    'stjórnarfrumvarp',
    'stjórnartillaga',
    'stöðuskjal',
    'stöðuskjal m.áo.br.',
    'svar',
    'svar (framhald)',
    'vantraust',
    'þál. (afgr. frá deild)',
    'þál. (m.áo.br.)',
    'þál. (samhlj.)',
    'þál. í heild',
    'þáltill.',
    'þáltill. eftir f. umr.',
    'þáltill. n.',

];

const voteType = [
    'Afbrigði við þingsköp',
    'Ákvæði til brb.',
    'Beiðni leyfð',
    'Brtt.',
    'Dagskrártillaga',
    'Frv.',
    'Frv. gengur',
    'Frv. gengur (eftir 2. umr.)',
    'Frv. gengur (í 2. umr.)',
    'Frv. gengur til 2. umr.',
    'Frv. gengur til 3. umr.',
    'Frv. vísað',
    'Frv. vísað (eftir 2. umr.)',
    'Frv. vísað (í 3. umr.)',
    'Frv. vísað til 2. umr.',
    'Frv. vísað til 3. umr.',
    'Fyrirsögn',
    'Of seint komið fram. --- Afbrigði',
    'Of skammt var liðið frá síðustu umr. --- Afbrigði',
    'Of skammt var liðið frá útbýtingu --- Afbrigði',
    'Skýrslan gengur',
    'Till.',
    'Till. gengur',
    'Till. gengur til síðari umr.',
    'Till. til rökst. dagskrár á þskj.',
    'Till. um að vísa málinu til ríkisstjórnarinnar á',
    'Till. vísað',
    'Till. vísað til síðari umr.',
    'Tillgr.',
    'Þskj.',

];

const voteOutcome = [
    null,
    'Fellt',
    'samþykkt',

];

const voteMethod = [
    'atkvæðagreiðslukerfi',
    'handaupprétting',
    'kallað aftur',
    'kallað aftur til þriðju umræðu',
    'kom ekki til atkvæðagreiðslu',
    'nafnakall',
    'yfirlýsing forseta',
    'yfirlýsing forseta/mál gengur',

];

const voteCommittie = [
    null,
    'allsherjar- og menntamálanefnd',
    'allsherjarnefnd',
    'atvinnuveganefnd',
    'efnahags- og skattanefnd',
    'efnahags- og viðskiptanefnd',
    'félags- og tryggingamálanefnd',
    'félagsmálanefnd',
    'fjárlaganefnd',
    'heilbrigðis- og trygginganefnd',
    'heilbrigðisnefnd',
    'iðnaðarnefnd',
    'landbúnaðarnefnd',
    'menntamálanefnd',
    'samgöngunefnd',
    'sérnefnd',
    'sérnefnd um stjórnarskrármál',
    'sérnefnd um stjórnarskrármál (385. mál á 136. þingi)',
    'sjávarútvegs- og landbúnaðarnefnd',
    'sjávarútvegsnefnd',
    'stjórnskipunar- og eftirlitsnefnd',
    'umhverfis- og samgöngunefnd',
    'umhverfisnefnd',
    'utanríkismálanefnd',
    'velferðarnefnd',
    'viðskiptanefnd',
    'þingmannanefnd til að fjalla um skýrslu rannsóknarnefndar Alþingis',
];

const categories = [
    {
        id: 1,
        superId: 1,
        title: "Ferðaþjónusta",
        description: "þ.m.t. skemmtistaðir, veitinga- og gistihús"
    },
    {
        id: 2,
        superId: 1,
        title: "Iðnaður",
        description: "þ.m.t. framleiðsla á tæknibúnaði, heimilisiðnaður, smáiðnaður, stóriðja "
    },
    {
        id: 3,
        superId: 1,
        title: "Landbúnaður",
        description: "þ.m.t. fiskeldi, landgræðsla, skógrækt"
    },
    {
        id: 4,
        superId: 1,
        title: "Sjávarútvegur",
        description: "þ.m.t. fiskveiðar, fiskveiðistjórn, fiskvinnsla, hafrannsóknir, hvalveiðar"
    },
    {
        id: 5,
        superId: 1,
        title: "Viðskipti",
        description: "þ.m.t. bankar, einkaleyfi, lán, neytendamál, samkeppni, sjóðir, starfsleyfi, starfsumhverfi, vátryggingar, verðbréf, verslun, vörumerki, þjónusta"
    },
    {
        id: 6,
        superId: 2,
        title: "Fjárreiður ríkisins",
        description: "þ.m.t. fjárlög, lánamál ríkisins, opinberar stofnanir, ríkiseignir og opinberar framkvæmdir, ríkisreikningur, ríkisrekstur"
    },
    {
        id: 7,
        superId: 2,
        title: "Efnahagsmál",
        description: "þ.m.t. gengi, gjaldeyrismál, gjaldmiðlar, hagskýrslur, vaxtamál, vísitölur"
    },
    {
        id: 8,
        superId: 2,
        title: "Skattar og tollar",
        description: "þ.m.t. þjónustugjöld ríkisfyrirtækja og -stofnana og önnur gjöld"
    },
    {
        id: 10,
        superId: 3,
        title: "Norræn málefni",
        description: "þ.m.t. Norðurlandaráð, Norðurlandasamvinna, vestnorrænt samstarf"
    },
    {
        id: 11,
        superId: 11,
        title: "Almannatryggingar",
        description: "þ.m.t. ellilífeyrir, fæðingarorlof, meðlagsgreiðslur, slysabætur, örorkubætur "
    },
    {
        id: 12,
        superId: 11,
        title: "Atvinnumál",
        description: "þ.m.t. atvinnuástand og -horfur, atvinnuleyfi, atvinnuleysi, opinberir starfsmenn, vinnueftirlit"
    },
    {
        id: 13,
        superId: 11,
        title: "Byggðamál",
        description: "þ.m.t. byggðaþróun, jafnrétti byggða, verðjöfnun"
    },
    {
        id: 14,
        superId: 8,
        title: "Sveitarstjórnarmál",
        description: "þ.m.t. sveitarfélög, verkaskipting ríkis og sveitarfélaga"
    },
    {
        id: 15,
        superId: 11,
        title: "Félagsmál",
        description: "þ.m.t. börn, félagsleg aðstoð, fjölskyldumál, frjáls félagasamtök, jafnréttismál, húsnæðismál, kaup og kjör, lífeyrissjóðir, málefni aldraðra og öryrkja, orlofsmál, stéttarfélög, verkalýðsmál, vinnudeilur"
    },
    {
        id: 16,
        superId: 4,
        title: "Heilbrigðiseftirlit",
        description: "þ.m.t. dýraeftirlit, dýralækningar, dýrasjúkdómar, matvælaeftirlit"
    },
    {
        id: 17,
        superId: 4,
        title: "Heilbrigðismál",
        description: "þ.m.t. áfengis- og fíkniefnavarnir, farsóttir, heilbrigðisstofnanir og læknisþjónusta, heilsuvernd, lyf, mæðravernd og ungbarnaeftirlit"
    },
    {
        id: 18,
        superId: 5,
        title: "Íþróttir og æskulýðsmál",
        description: null
    },
    {
        id: 19,
        superId: 5,
        title: "Menningarmál",
        description: "þ.m.t. fjölmiðlar, höfundarréttur, Íslandssaga, íslensk tunga, listir, mannanöfn, RÚV, skjaldarmerki, söfn, þjóðfáninn, þjóðsöngurinn, örnefni"
    },
    {
        id: 20,
        superId: 5,
        title: "Menntamál",
        description: "þ.m.t. endurmenntun, fræðslumál, kennsla, námslán, námsmenn, rannsóknir, skólar, vísindi"
    },
    {
        id: 21,
        superId: 6,
        title: "Löggæsla og eftirlit",
        description: "þ.m.t. almannavarnir, bifreiðaeftirlit, dómtúlkar og skjalaþýðendur, fangelsi, framkvæmd áfengislöggjafar, happdrætti og fjársafnanir, landhelgisgæsla, lögregla, lögsagnarumdæmi, skipulagsskrár, skotvopn, slysavarnir, umferðarmál, útlendingaeftirlit"
    },
    {
        id: 22,
        superId: 6,
        title: "Dómstólar og réttarfar",
        description: "þ.m.t. dómsmál, félagsdómur, héraðsdómur, Hæstiréttur, Lagasafn, landsdómur, Lögbirtingarblað, Stjórnartíðindi"
    },
    {
        id: 23,
        superId: 7,
        title: "Fjarskipti og póstmál",
        description: "þ.m.t. bandbreidd, breiðband, dreifikerfi útvarps og sjónvarps, gervihnettir, ljósleiðarar, símamál, samgöngu- og flutningsgeta Netsins, sæstrengur "
    },
    {
        id: 24,
        superId: 7,
        title: "Samgöngur",
        description: "þ.m.t.  flugmál, hafnir, siglingar, skipaeftirlit, skipulag samgangna, vegamál, vitar"
    },
    {
        id: 25,
        superId: 8,
        title: "Alþingi",
        description: null
    },
    {
        id: 26,
        superId: 8,
        title: "Stjórnkerfi og stjórnarskipunarmál",
        description: "þ.m.t. forseti, kjördæmi, kosningar, ríkisstjórn, stjórnarskrá, stjórnmálaflokkar"
    },
    {
        id: 27,
        superId: 9,
        title: "Þjóðkirkjan",
        description: null
    },
    {
        id: 28,
        superId: 9,
        title: "Trúfélög og trúarbrögð",
        description: "þ.m.t. trúarsöfnuðir aðrir en þjóðkirkjan, trúfræði"
    },
    {
        id: 29,
        superId: 10,
        title: "Mengun",
        description: "þ.m.t. eftirlit með úrgangi, hollustuvernd, holræsamál,  mengunarvarnir"
    },
    {
        id: 30,
        superId: 10,
        title: "Orkumál og auðlindir",
        description: "þ.m.t. eldsneyti, hitaveitur, námur, rafveitur, virkjanir"
    },
    {
        id: 31,
        superId: 10,
        title: "Umhverfisstjórn og náttúruvernd",
        description: "þ.m.t. brunavarnir, byggingarmál, dýravernd, endurvinnsla, friðlönd, landmælingar, ofanflóðavarnir, sjómælingar, skipulagsmál, umhverfismat, veðurathuganir, þjóðgarðar og náttúruhamfarir."
    },
    {
        id: 32,
        superId: 3,
        title: "Alþjóðasamningar og utanríkismál",
        description: "þ.m.t. alþjóðlegir samningar og sáttmálar, alþjóðastofnanir, EES, EFTA, Evrópusambandið, skuldbindingar Íslands á alþjóðavettvangi"
    },
    {
        id: 33,
        superId: 6,
        title: "Persónuleg réttindi",
        description: "þ.m.t. erfðamál, eignarréttur, hjúskaparmál, mannréttindi, ríkisborgararéttur og lögræði, persónuvernd, sifjaréttindi, ættleiðingar"
    },
    {
        id: 34,
        superId: 1,
        title: "Tölvu- og upplýsingamál",
        description: "þ.m.t. gagnagrunnar, hugbúnaðargerð, margmiðlun, Netið sem upplýsingamiðill"
    }
];

const congressmanSpeechType = [
    null,
    'atvinnumálaráðherra',
    'atvinnuvega- og nýsköpunarráðherra',
    'dómsmála-  og mannréttindaráðherra',
    'dómsmálaráðherra',
    'efnahags- og viðskiptaráðherra',
    'félags- og barnamálaráðherra',
    'félags- og húsnæðismálaráðherra',
    'félags- og jafnréttismálaráðherra',
    'félags- og tryggingamálaráðherra',
    'félagsmálaráðherra',
    '"ferðamála-, iðnaðar- og nýsköpunarráðherra"',
    'fjármála- og efnahagsráðherra',
    'fjármálaráðherra',
    'forseti alþingis',
    'forsætisráðherra',
    'heilbrigðisráðherra',
    'innanríkisráðherra',
    'iðnaðar- og viðskiptaráðherra',
    'iðnaðarráðherra',
    'landbúnaðarráðherra',
    'mennta- og menningarmálaráðherra',
    'menntamálaráðherra',
    'ráðherra norrænna samstarfsmála',
    'samgöngu-  og sveitarstjórnarráðherra',
    'samgöngu- og sveitarstjórnarráðherra',
    'samgönguráðherra',
    'sjávarútvegs- og landbúnaðarráðherra',
    'sjávarútvegsráðherra',
    'umhverfis- og auðlindaráðherra',
    'umhverfisráðherra',
    'utanríkisráðherra',
    'velferðarráðherra',
    'viðskiptaráðherra',


];

const speechType = [
    'andsvar',
    'ber af sér sakir',
    'flutningsræða',
    'grein fyrir atkvæði',
    'jómfrúrræða',
    'málsh. um fundarstjórn',
    'prent',
    'ræða',
    'svar',
    'um atkvæðagreiðslu',
    'um fundarstjórn',
    'útbýting þingskjala',
    'útvarpsræða',
];

const speechIteration = [
    null,
    1,
    2,
    3,
    4,
];

export const billStatusList = () => billStatus;

export const propositionStatusList = () => propositionStatus;

export const issueTypesList = () => issueTypes;

export const categoriesList = () => categories;

export const partiesList = () => parties;

export const party = (name: string | undefined = undefined): Party => ({
    id: faker.random.number(1000),
    name: name ? name : oneOf(parties),
    color: faker.commerce.color(),
});

export const constituency = (): Constituency => ({
    id: faker.random.number(1000),
    name: oneOf([
        'Strandasýsla',
        'Suður-Þingeyjarsýsla',
        'Vestfirðir',
        'Vestur-Húnavatnssýsla',
        'Vesturland',
        'Vestur-Skaftafellssýsla',
        'Vestmannaeyjar',
        'Vestur-Ísafjarðarsýsla',
        'Árnessýsla',
        'Ísafjarðarsýsla',
        'Ísafjörður',
        'Þingeyjarsýsla',
        'Reykjavíkurkjördæmi norður',

    ]),
    abbr_short: 'string',
    abbr_long: 'string',
    description: 'string',
});

export const congressman = (): Congressman => ({
    id: faker.random.number(1000),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    avatar: {
        templateSrc: 'string',
    },
    party: party()
});

export const issue = (): Issue => {
    return {
        id: faker.random.number(1000),
        assembly: {id: faker.random.number(150)},
        name: faker.lorem.words(3),
        subName: faker.lorem.words(3),
        type: oneOf(issueTypes),
        date: faker.date.future().toUTCString(),
        speakers: Array.from({length: faker.random.number(5)}).map(() => ({
            congressman: congressman(), value: faker.random.number(1000)
        })),
        speechCount: faker.random.number(100),
        speechTime:  faker.random.number(1000),
        status: oneOf(billStatus),
        question: faker.lorem.sentence(),
        goal: faker.lorem.sentence(),
        majorChanges: faker.lorem.sentence(),
        changesInLaw: faker.lorem.sentence(),
        costsAndRevenues: faker.lorem.sentence(),
        deliveries: faker.lorem.sentence(),
        additionalInformation: faker.lorem.sentence(),
        proponents: Array.from({length: faker.random.number(5)}).map((item, i) => ({
            ...congressman(),
            minister: '',
            assembly: {id: faker.random.number(150)},
            order: i
        })),
        proponentsCount: faker.random.number(10),
        categories: [],//Category[],
        superCategories: [],//SuperCategory[],
        governmentIssue: false,
    }
};

export const document = (): Document => ({
    id: faker.random.number(1000),
    issueId: faker.random.number(1000),
    assemblyId: faker.random.number(1000),
    date: new Date().toUTCString(),
    url: faker.internet.url(),
    type: oneOf(documentType),
    proponents: Array.from({length: faker.random.number(5)}).map(congressman),
    votes: Array.from({length: faker.random.number(5)}).map(voteResult),
});

export const voteResult = (): VoteResult => ({
    id: faker.random.number(1000),
    issue_id: faker.random.number(1000),
    assembly_id: faker.random.number(1000),
    document_id: faker.random.number(1000),
    date: new Date().toUTCString(),
    type: oneOf(voteType),
    outcome: oneOf(voteOutcome),
    method: oneOf(voteMethod),
    yes: faker.random.number(63),
    no: faker.random.number(63),
    inaction: faker.random.number(63),
    committee: oneOf(voteCommittie),
});

export const speech = (): Speech => ({
    id: faker.random.uuid(),
    plenaryId: faker.random.number(1000),
    assembly: {
        id: faker.random.number(1000),
    },
    issue: issue(),
    congressman: congressman(),
    congressmanType: oneOf(congressmanSpeechType),
    period: {from: new Date().toUTCString(), to: new Date().toUTCString()},
    text: faker.lorem.paragraphs(20),
    type: oneOf(speechType),
    iteration: oneOf(speechIteration),
    position: faker.random.number(1000),
});

export const plenary = () => ({
    id: faker.random.number(100),
    assembly: {
        id: faker.random.number(1000),
    },
    from: new Date().toUTCString(),
    to: new Date().toUTCString(),
    name: `${faker.random.number(100)}. Thingfundur`,
    agenda: Array.from({length: faker.random.number(10)}).map(plenaryItem),
});

export const plenaryItem = (): PlenaryItem => ({
    id: faker.random.number(1000),
    plenaryId: faker.random.number(1000),
    assembly: {
        id: faker.random.number(1000),
    },
    category: oneOf(['A', 'B']),
    iterationType: oneOf([
        null,
        '*',
        '1',
        '2',
        '3',
        'E',
        'F',
        'S',
    ]),
    iterationContinue: oneOf([
        null,
        '*',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
    ]),
    iterationComment: oneOf([
        null,
        '1. umræða',
        '2. umræða',
        '3. umræða',
        'ein umræða',
        'framhald',
        'framhald 1. umræðu',
        'framhald 2. umræðu',
        'framhald 3. umræðu',
        'framhald ein umræðu',
        'framhald fyrri umræðu',
        'framhald síðari umræðu',
        'fyrri umræða',
        'hvort leyfð skuli',
        'síðari umræða',

    ]),
    comment: oneOf([
        null,
        'atkvæðagreiðsla  (Atkvæðagreiðsla).',
        'Ef leyft verður  afbr. (of seint fram komið)',
        'Ef leyft verður  afbr. (of skammt liðið frá síðustu umræðu).',
        'Ef leyft verður  afbr. fyrir frumskjali.',
        'Ef leyft verður  afbr. fyrir nál.',

    ]),
    commentType: oneOf([
        null,
        '6',
        'A',
        'F',
        'N',
        'U',

    ]),
    posedId: faker.random.number(1000),
    answerer: oneOf([
        null,
        'innanríkisráðherra',
        'iðnaðar- og viðskiptaráðherra',
        'iðnaðarráðherra',
        'landbúnaðarráðherra',
        'mennta- og menningarmálaráðherra',
        'menntamálaráðherra',
        'ráðherra Hagstofu Íslands',
    ]),
    issue: issue(),
    posedCongressman: congressman(),
    answererCongressman: congressman(),
    counterAnswererCongressman: congressman(),
    instigatorCongressman: congressman(),
});

export const session = (from: Date = new Date(), to: Date = new Date()): Session => ({
    id: faker.random.number(1000),
    congressman: congressman(),
    assembly: {id: faker.random.number(1000)},
    constituency: constituency(),
    party: party(),
    period: {from: from.toUTCString(), to: to.toUTCString()},
    type: oneOf([
        'með varamann',
        'varamaður',
        'þingmaður',
    ]),
    abbr: 'string',
});

export const sessions = (): Session[] => {
    return Array.from({length: 5}).map(() => session());
};


export const oneOf = (items: any[]): any => {
    return items.sort(function() {return 0.5 - Math.random()})[0];
};
