import * as React from 'react';
import {scaleTime, scaleLinear} from 'd3-scale';
import {timeMonth} from 'd3-time';
import './index.scss';

interface Props {
    source: Source[];
}

interface Source {
    count: number,
    date: string,
}

export default class DateAndCountChart extends React.Component<Props, {}> {
    public static defaultProps = {
        source: [],
    };

    public dimensions = {
        width: 920,
        height: 240,
        gutter: 20,
    };

    private minMaxCount(list: Source[]) {
        const values = list.map(item => item.count);
        return {
            min: Math.min(...values),
            max: Math.max(...values),
        };
    }

    private minMaxDates(list: Source[]) {
        const dates = list.map(item => new Date(item.date));
        return {
            // @ts-ignore @todo
            min: new Date(Math.min.apply(null, dates)),
            // @ts-ignore @todo
            max: new Date(Math.max.apply(null, dates)),
        };
    }

    public render() {
        const minMaxDates = this.minMaxDates(this.props.source);
        const minMaxCount = this.minMaxCount(this.props.source);
        const x = scaleTime()
            .domain([minMaxDates.min, minMaxDates.max])
            .range([this.dimensions.gutter, this.dimensions.width]);
        const y = scaleLinear()
            .domain([0, minMaxCount.max])
            .range([0, this.dimensions.height]);
        //@ts-ignore
        const xTicks = x.ticks(timeMonth.every(1));
        const yTicks = y.ticks(10);
        return (
            <svg
                className="date-and-count-chart"
                width={this.dimensions.width + 2 * this.dimensions.gutter}
                height={this.dimensions.height + 3 * this.dimensions.gutter}
                viewBox={`0 0 ${this.dimensions.width +
                    2 * this.dimensions.gutter} ${this.dimensions.height +
                    3 * this.dimensions.gutter}`}>
                <g>
                    <line
                        className="date-and-count-chart__baseline"
                        x1="0"
                        y1={this.dimensions.height + this.dimensions.gutter}
                        x2={this.dimensions.width + 2 * this.dimensions.gutter}
                        y2={this.dimensions.height + this.dimensions.gutter}
                    />
                </g>
                <g>
                    {xTicks.map((item: number, i: number) => (
                        <line
                            className="date-and-count-chart__line"
                            key={`x-line-${i}`}
                            x1={x(item)}
                            y1={this.dimensions.gutter}
                            x2={x(item)}
                            y2={this.dimensions.height + this.dimensions.gutter}
                        />
                    ))}
                    {yTicks.map((item: number, i: number) => (
                        <line
                            className="date-and-count-chart__line"
                            key={`y-line-${i}`}
                            x1={this.dimensions.gutter}
                            y1={y(item)}
                            x2={this.dimensions.gutter + this.dimensions.width}
                            y2={y(item)}
                        />
                    ))}
                    {xTicks.map((item: Date, i: number) => (
                        <text
                            className="date-and-count-chart__line"
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
                    {this.props.source.map(item => (
                        <rect
                            className="date-and-count-chart__bar"
                            key={`rect-${new Date(item.date).getTime()}`}
                            x={x(new Date(item.date))}
                            y={
                                this.dimensions.height -
                                y(item.count) +
                                this.dimensions.gutter
                            }
                            height={y(item.count)}
                            width="1"
                        />
                    ))}
                </g>
            </svg>
        );
    }
}
