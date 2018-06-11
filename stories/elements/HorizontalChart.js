import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HorizontalChart from "../../src/client/elements/HorizontalChart";

const data = [
    {
        label: "Fjárreiður ríkisins",
        value: 29535
    },
    {
        label: "Viðskipti",
        value: 13933
    },
    {
        label: "Alþjóðasamningar og utanríkismál",
        value: 12568
    },
    {
        label: "Heilbrigðismál",
        value: 10386
    },
    {
        label: "Félagsmál",
        value: 9776
    },
    {
        label: "Löggæsla og eftirlit",
        value: 5477
    },
    {
        label: "Samgöngur",
        value: 5187
    },
    {
        label: "Umhverfisstjórn og náttúruvernd",
        value: 4180
    },
    {
        label: "Byggðamál",
        value: 3836
    },
    {
        label: "Sveitarstjórnarmál",
        value: 3657
    },
    {
        label: "Menntamál",
        value: 3589
    },
    {
        label: "Almannatryggingar",
        value: 3542
    },
    {
        label: "Atvinnumál",
        value: 3168
    },
    {
        label: "Mengun",
        value: 2111
    },
    {
        label: "Dómstólar og réttarfar",
        value: 1957
    },
    {
        label: "Stjórnkerfi og stjórnarskipunarmál",
        value: 1876
    },
    {
        label: "Alþingi",
        value: 1720
    },
    {
        label: "Skattar og tollar",
        value: 1081
    },
    {
        label: "Sjávarútvegur",
        value: 918
    },
    {
        label: "Persónuleg réttindi",
        value: 893
    },
    {
        label: "Efnahagsmál",
        value: 820
    },
    {
        label: "Menningarmál",
        value: 500
    },
    {
        label: "Landbúnaður",
        value: 461
    },
    {
        label: "Tölvu- og upplýsingamál",
        value: 461
    },
    {
        label: "Þjóðkirkjan",
        value: 434
    }
];

storiesOf('HorizontalChart', module)
    .add('chart', () => (
        <div>
            <HorizontalChart source={data} />
        </div>
    ))
;
