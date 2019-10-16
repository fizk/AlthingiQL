import React from 'react';
import {scaleTime, scaleLinear, scaleOrdinal, scaleQuantize} from 'd3-scale'
import {TimeInterval, timeYear, timeDay} from 'd3-time'

interface Props {
    data: any[];
}

interface State {
}

interface Math {
    max(...values: Date[]): number;
    min(...values: Date[]): number;
    floor(x: number): number;
}
declare let Math: Math;

export default class ProgressChart extends React.Component<Props, State> {

    render(): React.ReactNode {

        const data = this.props.data.map(item => {
            const d = new Date(item.date);
            d.setHours(0);
            d.setMinutes(0);
            d.setSeconds(0);
            return {
                ...item,
                date: d
            }
        });

        const minDate = Math.min(...data.map(item => item.date));
        const maxDate = Math.max(...data.map(item => item.date));

        const xScale = scaleTime().domain([minDate, maxDate]).range([0, 800]);
        const color10 = scaleQuantize<string>().domain([0, 10]).range(['#74c476', '#41ab5d', '#238b45', '#005a32',]);
        const color100 = scaleQuantize<string>().domain([0, 100]).range(['#74c476', '#41ab5d', '#238b45', '#005a32',]);
        const color10000 = scaleQuantize<string>().domain([0, 10000]).range(['#74c476', '#41ab5d', '#238b45', '#005a32',]);

        const documents = data.filter(item => item.type === 'document');
        const votes = data.filter(item => item.type === 'vote');
        const speeches = data.filter(item => item.type === 'speech');
        const committees = data.filter(item => item.type === 'committee');

        const length = xScale.ticks(timeDay.every(1) as TimeInterval).length;

        const size = 800 / length;

        return (
            <svg width={1000} height={300} viewBox={`0 0 1000 300`}>

                <g>
                    <g transform={'translate(0, 46)'}>
                        {xScale.ticks(timeDay.every(1) as TimeInterval).map((item: Date) => (
                            <rect x={xScale(item)} y={0} height={10} width={size} fill={'white'} />
                        ))}
                    </g>
                    <g transform={'translate(0, 46)'}>
                        {committees.map(item => (
                            <rect x={xScale(item.date)} y={0} height={10} width={size} fill={color10(item.value)} />
                        ))}
                    </g>
                </g>

                <g>
                    <g transform={'translate(0, 34)'}>
                        {xScale.ticks(timeDay.every(1) as TimeInterval).map((item: Date) => (
                            <rect x={xScale(item)} y={0} height={10} width={size} fill={'white'} />
                        ))}
                    </g>
                    <g transform={'translate(0, 34)'}>
                        {speeches.map(item => (
                            <rect x={xScale(item.date)} y={0} height={10} width={size} fill={color10000(item.value)} />
                        ))}
                    </g>
                </g>

                <g>
                    <g transform={'translate(0, 22)'}>
                        {xScale.ticks(timeDay.every(1) as TimeInterval).map((item: Date) => (
                            <rect x={xScale(item)} y={0} height={10} width={size} fill={'white'} />
                        ))}
                    </g>
                    <g transform={'translate(0, 22)'}>
                        {votes.map(item => (
                            <rect x={xScale(item.date)} y={0} height={10} width={size} fill={color100(item.value)} />
                        ))}
                    </g>
                </g>

                <g>
                    <g transform={'translate(0, 10)'}>
                        {xScale.ticks(timeDay.every(1) as TimeInterval).map((item: Date) => (
                            <rect x={xScale(item)} y={0} height={10} width={size} fill={'white'} />
                        ))}
                    </g>
                    <g transform={'translate(0, 10)'}>
                        {documents.map(item => (
                            <rect x={xScale(item.date)} y={0} height={10} width={size} fill={color10(item.value)} />
                        ))}
                    </g>
                </g>

                <g transform={'translate(0, 100)'}>
                    {xScale.ticks(timeDay.every(1) as TimeInterval).map((item: Date) => (
                        <text x={xScale(item)} y={0}>{item.getDate()}</text>
                    ))}
                </g>
            </svg>
        )
    }
}
