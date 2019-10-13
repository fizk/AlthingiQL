import * as React from 'react';
import {Fragment} from 'react';
import {Inflation, Period} from '../../../../@types';
import {scaleLinear, scaleTime} from 'd3-scale';
import {area} from 'd3-shape';
import {timeMonth, timeYear} from 'd3-time';
import './index.scss';

interface Props {
    inflation: Inflation[];
    period: Partial<Period>;
}

export default class InflationChart extends React.Component<Props, {}> {
    public dimensions = {
        width: 960,
        height: 240,
        gutter: 20,
    };

    private minMaxCount(list: Inflation[]) {
        const values = list.map(item => item.value);
        return {
            min: Math.min(...values),
            max: Math.max(...values),
        };
    }

    private minMaxDates(list: Inflation[], period: Period) {
        const dates = list.map(item => new Date(item.date));
        return {
            // @ts-ignore @todo
            min: new Date(Math.min.apply(null, [...dates, period.from ? new Date(period.from) : new Date()])),
            // @ts-ignore @todo
            max: new Date(Math.max.apply(null, [...dates, period.to ? new Date(period.to) : new Date()])),
        };
    }

    public render() {


        const minMaxCount = this.minMaxCount(this.props.inflation);
        const minMaxDates = this.minMaxDates(this.props.inflation, (this.props.period as Period));
        const x = scaleTime()
            .domain([minMaxDates.min, minMaxDates.max])
            .range([0, this.dimensions.width - (this.dimensions.gutter * 2)]);
        const y = scaleLinear()
            .domain([minMaxCount.max + 1, 0]).nice()
            .range([0, this.dimensions.height - (this.dimensions.gutter * 2)]);
        //@ts-ignore
        const xTicksMonth = x.ticks(timeMonth.every(1));
        //@ts-ignore
        const xTicksYear = x.ticks(timeYear.every(1));
        const yTicks = y.ticks(10);




        const a = area<Inflation>()
            .x(d => x(new Date(d.date)))
            .y0(y(0))
            .y1(d => y(d.value));


        return (
            <svg viewBox={`0 0 ${this.dimensions.width} ${this.dimensions.height}`}
                 width={this.dimensions.width}
                 height={this.dimensions.height}
                 style={{border: '1px solid gray', width: '100%'}}>
                <linearGradient id="area-gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop className="stop1" offset="0%"/>
                    <stop className="stop2" offset="100%"/>
                </linearGradient>


                <g>
                    <g transform={`translate(${this.dimensions.gutter * 2} 0)`}>
                        {xTicksMonth.map((item: Date, i: number) => (
                            <line className="inflation-chart__y-lines" key={`x-c-${i}`} x1={x(item)} x2={x(item)} y1="0" y2={this.dimensions.height - (this.dimensions.gutter * 2)} shapeRendering="crispEdges"/>
                        ))}
                    </g>
                    <g transform={`translate(${this.dimensions.gutter * 2} 0)`}>
                        {yTicks.map((item, i) => (
                            <line key={`y-line-${i}`}
                                  className="inflation-chart__x-lines"
                                  x1={0}
                                  y1={y(item)}
                                  x2={this.dimensions.width - (this.dimensions.gutter * 2)}
                                  y2={y(item)}
                            />),
                        )}
                    </g>
                </g>

                <g transform={`translate(${this.dimensions.gutter * 2} 0)`}>
                    <path className="inflation-chart__area" fill="url(#area-gradient)" d={String(a(this.props.inflation))} />
                </g>

                <g>
                    {yTicks.map((item, i) => (
                        <text x={0} y={y(item)} key={`y-line-${i}`}>{item}</text>
                    ))}
                </g>

                <g transform={`translate(${this.dimensions.gutter * 2} ${this.dimensions.height - this.dimensions.gutter})`}>
                    {xTicksMonth.map((item: Date, i: number) => (
                        <text
                            key={`x-label-${i}`}
                            x={x(item)}
                            y={0}
                            textAnchor="middle">

                                {item.getMonth() + 1}

                        </text>
                    ))}
                </g>
                <g transform={`translate(${this.dimensions.gutter * 2} ${this.dimensions.height - this.dimensions.gutter})`}>
                    {xTicksYear.map((item: Date, i: number) => (
                        <text
                            key={`x-label-${i}`}
                            x={x(item)}
                            y={0}
                            textAnchor="middle">
                            <tspan x={x(item)} dy="15">
                                {item.getFullYear()}
                            </tspan>
                        </text>
                    ))}
                </g>
            </svg>
        );
    }
}
