import * as React from 'react';
import {Fragment} from 'react';
import {Inflation, Period} from '../../../../@types';
import {scaleLinear, scaleTime} from 'd3-scale';
import {timeMonth} from 'd3-time';
// import './index.scss';

interface Props {
    inflation: Inflation[];
    period: Period;
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
            min: new Date(Math.min.apply(null, [...dates, period.from ? new Date(period.from) : new Date()])),
            max: new Date(Math.max.apply(null, [...dates, period.to ? new Date(period.to) : new Date()])),
        };
    }

    public render() {
        const minMaxCount = this.minMaxCount(this.props.inflation);
        const minMaxDates = this.minMaxDates(this.props.inflation, this.props.period);
        const x = scaleTime()
            .domain([minMaxDates.min, minMaxDates.max])
            .range([this.dimensions.gutter, this.dimensions.width]);
        const y = scaleLinear()
            .domain([0, minMaxCount.max])
            .range([0, this.dimensions.height]);
        const xTicks = x.ticks(timeMonth.every(1));
        const yTicks = y.ticks(10);

        const polyline = this.props.inflation.reduce((accumulator, current) => {
            return accumulator +
                `${x(new Date(current.date))}, ${this.dimensions.height - y(current.value) + this.dimensions.gutter} `;
        }, '');

        return (
            <svg
                className="date-and-count-chart"
                width={this.dimensions.width + 2 * this.dimensions.gutter}
                height={this.dimensions.height + 3 * this.dimensions.gutter}
                viewBox={`0 0 ${this.dimensions.width +
                2 * this.dimensions.gutter} ${this.dimensions.height +
                3 * this.dimensions.gutter}`}>
                <g>
                    <rect x={x(new Date(this.props.period.from))}
                          y={0}
                          width={x(this.props.period.to
                              ? new Date(this.props.period.to)
                              : new Date()) - x(new Date(this.props.period.from))}
                          height={this.dimensions.height + 3 * this.dimensions.gutter}
                          fill="pink"
                    />
                </g>
                <g>
                    <line
                        x1="0"
                        y1={this.dimensions.height + this.dimensions.gutter}
                        x2={this.dimensions.width + 2 * this.dimensions.gutter}
                        y2={this.dimensions.height + this.dimensions.gutter}
                    />
                </g>
                <g>

                    {yTicks.map((item, i) => (
                        <Fragment>
                            <line
                                key={`y-line-${i}`}
                                stroke="black"
                                strokeWidth="1"
                                x1={this.dimensions.gutter}
                                y1={y(item)}
                                x2={this.dimensions.gutter + this.dimensions.width}
                                y2={y(item)}
                            />
                            <text x={0} y={y(item)}>{item}</text>
                        </Fragment>),
                    )}
                    {xTicks.map((item, i) => (
                        <text
                            key={`x-label-${i}`}
                            x={x(item)}
                            y={
                                this.dimensions.height +
                                this.dimensions.gutter +
                                this.dimensions.gutter
                            }
                        >
                            <tspan x={x(item)} dy="0">
                                {item.getMonth() + 1}
                            </tspan>
                            <tspan x={x(item)} dy="15">
                                {item.getFullYear()}
                            </tspan>
                        </text>
                    ))}
                </g>
                <g>
                    <polyline points={polyline}
                              fill="none" stroke="black" />
                    {this.props.inflation.map(item => (
                        <circle cx={x(new Date(item.date))}
                        onMouseOver={event => console.log(item.value)}
                                cy={
                            this.dimensions.height -
                            y(item.value) +
                            this.dimensions.gutter
                        } r="5"/>
                    ))}
                </g>
            </svg>
        );
    }
}
