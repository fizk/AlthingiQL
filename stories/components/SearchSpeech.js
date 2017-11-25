import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {SearchSpeech} from '../../src/client/components/SearchSpeech';
import '../../public/stylesheets/storybook.css';


const results = [
    {
        "id": "20161207T170115",
        "assembly": {
            "id": 146
        },
        "issue": {
            "id": 1
        },
        "congressmanType": null,
        "period": {
            "from": "2016-12-07T06:01:15.000Z",
            "to": "2016-12-07T06:03:01.000Z"
        },
        "congressman": {
            "id": 1158,
            "name": "Björt Ólafsdóttir",
            "party": {
                "id": 44,
                "name": "Björt framtíð",
                "color": "92278f"
            }
        },
        "text": "hugmyndafræði sem liggur að baki.Ég **hef** hins vegar rætt **það** margoft **í** þessum stól, og [...]  skattastyrknum **í** þessu samhengi þá skil ég einfaldlega ekki forsendurnar, ég verð alveg að viðurkenna **það**, eða þá [...] ,  menntakerfið og hvað **það** heitir, sem svo stóriðjan **í** sínum rekstri notar eins og allir aðrir hér **í** [...] . þingmanni fyrir að beina athygli minni að þessum svokallaða skattastyrk. Ég verð að viðurkenna að ég **hef** [...]  ekki lesið þessar tilteknu blaðsíður. Þær eru nokkrar reyndar, þær blaðsíðurnar sem ég **hef** ekki lesið"
    },
    {
        "id": "20161207T141917",
        "assembly": {
            "id": 146
        },
        "issue": {
            "id": 1
        },
        "congressmanType": "fjármála- og efnahagsráðherra",
        "period": {
            "from": "2016-12-07T03:19:17.000Z",
            "to": "2016-12-07T03:20:33.000Z"
        },
        "congressman": {
            "id": 652,
            "name": "Bjarni Benediktsson",
            "party": {
                "id": 35,
                "name": "Sjálfstæðisflokkur",
                "color": "0000ff"
            }
        },
        "text": "stöndum ágætlega við þau **í** þessu fjárlagafrumvarpi. Eins og ég **hef** oft sagt má auðvitað halda því fram að [...]  greiðsluþátttökuna, ég **hef** nefnt einstaka fjárfestingarverkefni; **það** má meðal annars horfa til [...] -Evrópuríkin sem eru að reyna að skrapa saman **í** jöfnuð **í** ríkisfjármálum.  Flest þeirra eru með mikinn [...]  halla.Seðlabankinn hefur kallað eftir því að menn sýni aðhald. **Það** er akkúrat einn [...]  meginþráðurinn **í** málflutningi mínum. Varðandi loforð um að halda áfram að byggja upp  tel ég að við"
    },
    {
        "id": "20161222T155039",
        "assembly": {
            "id": 146
        },
        "issue": {
            "id": 1
        },
        "congressmanType": null,
        "period": {
            "from": "2016-12-22T04:50:39.000Z",
            "to": "2016-12-22T04:52:48.000Z"
        },
        "congressman": {
            "id": 690,
            "name": "Katrín Jakobsdóttir",
            "party": {
                "id": 23,
                "name": "Vinstri hreyfingin - grænt framboð",
                "color": "ff0000"
            }
        },
        "text": "fyrir  þessar spurningar. Hún spurði  um sameiningar háskóla. Sjálf **hef** ég verið þeirrar skoðunar að [...]  samstarf  háskóla **í** öllu falli sé mjög mikilvægt og ég kom til að mynda á verkefni á sínum tíma **í** [...]  ráðuneyti menntamála sem var samstarfsnet hinna opinberu háskóla. Hugsunin á bak við **það** var að gera [...]  allt samstarf auðveldara og þar með að leggja **í** raun og veru upp með að auðveldara væri fyrir þessa [...]  skóla að kenna t.d.  saman, halda saman utan um kennslu **í** námsgreinum **í** ljósi þess að við erum með sjö"
    },
];

storiesOf('SearchSpeech', module)
    .add('search result', () => (
        <SearchSpeech assembly={1}
                      issue={2}
                      result={results}
                      onSearch={action('onSearch')}
                      onClear={action('onClear')} />
    ))
    .add('searching', () => (
        <SearchSpeech assembly={1}
                      issue={2}
                      result={[]}
                      isSearching={true}
                      onSearch={action('onSearch')}
                      onClear={action('onClear')} />
    ));
