import * as React from 'react';
import PieChart from '../PieChart'
import {StatusCount} from "../../../../@types";
import './index.scss';

interface Props {
    source: StatusCount[]
}

const map: {[key: string]: string} = {
    'Bíður 1. umræðu': 'yellow',
    'Bíður 2. umræðu': 'peach',
    'Bíður 3. umræðu': 'orange',
    'Í nefnd eftir 1. umræðu': 'light-blue',
    'Í nefnd eftir 2. umræðu': 'blue',
    'Ekki samþykkt': 'red',
    'Vísað til ríkisstjórnar': 'pink',
    'Samþykkt sem lög frá Alþingi': 'green',
    'Samþykkt sem ályktun Alþingis': 'green',
    undefined: 'light-gray',
    null: 'light-gray'
};

export default class IssueStatusPieChart extends React.PureComponent<Props> {
    state = {
        value: undefined
    };

    public render() {
        const total = this.props.source.reduce((acc, value) => acc + value.count, 0);
        return (
            <PieChart source={this.props.source.map(item => ({key: map[item.status], value: item.count}))}
                onEnter={(e, d, t) => this.setState({value: d.value})}
                onLeave={(e, d, t) => this.setState({value: t})}
                variations={['lg']}>
                <text dominantBaseline="central" textAnchor="middle" x={23} y={23}>
                    {this.state.value || total}
                </text>
            </PieChart>
        )
    }
}
