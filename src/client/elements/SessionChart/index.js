import React from 'react';
import PropTypes from 'prop-types';
import {scaleTime, scaleLinear} from 'd3-scale';
import {timeMonth} from 'd3-time';
import './_index.scss';

const Map = {
    'varamaður': 'a6d1fd',
    'með varamann': 'bbbbbb',
    'þingmaður': '77bc48',
};

class SessionChart extends React.Component {
    static propTypes = {
        source: PropTypes.arrayOf(PropTypes.shape({
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            }),
            type: PropTypes.string,
        }))
    };

    static defaultProps = {
        source: []
    };

    constructor(props) {
        super(props);

        this.dimensions = {
            width: 920,
            height: 240,
            gutter: 20,
        }
    }

    minMaxDates(list) {

        const fromDates = list.map(item => new Date(item.period.from));
        const toDates = list.map(item => item.period.to ? new Date(item.period.to) : new Date());

        return {
            min: new Date(Math.min.apply(null,fromDates)),
            max: new Date(Math.max.apply(null,toDates)),
        }
    }

    render() {

        const minMaxDates = this.minMaxDates(this.props.source);

        const x = scaleTime()
            .domain([minMaxDates.min, minMaxDates.max])
            .range([this.dimensions.gutter, this.dimensions.width]);

        const xTicks = x.ticks(timeMonth.every(1));

        return (
            <svg className="date-and-count-chart"
                 width={(this.dimensions.width) + (2 * this.dimensions.gutter)}
                 height={(this.dimensions.height) + (3 * this.dimensions.gutter)}
                 viewBox={`0 0 ${(this.dimensions.width) + (2 * this.dimensions.gutter)} ${(this.dimensions.height) + (3 * this.dimensions.gutter)}`}>
                <g>
                    <line className="date-and-count-chart__baseline"
                          x1="0"
                          y1={this.dimensions.height + this.dimensions.gutter}
                          x2={(this.dimensions.width) + (2 * this.dimensions.gutter)}
                          y2={this.dimensions.height + this.dimensions.gutter}/>
                </g>
                <g>
                    {xTicks.map((item, i) => (
                        <line className="date-and-count-chart__line"
                              key={`x-line-${i}`}
                              x1={x(item)}
                              y1={this.dimensions.gutter}
                              x2={x(item)}
                              y2={this.dimensions.height + this.dimensions.gutter}/>
                    ))}
                    {xTicks.map((item, i) => (
                        <text className="date-and-count-chart__line"
                              key={`x-label-${i}`}
                              x={x(item)}
                              y={this.dimensions.height + (this.dimensions.gutter) + (this.dimensions.gutter)}>
                            <tspan x={x(item)} dy="0">{item.getMonth()+1}</tspan>
                            <tspan x={x(item)} dy="15">{item.getFullYear()}</tspan>
                        </text>
                    ))}
                </g>
                <g>
                    {this.props.source.map((period, i) => (
                        <rect
                            key={`rect-${new Date(period.period.from).getTime()}-${i}`}
                            x={x(new Date(period.period.from))}
                            y="10"
                            fill={`#${Map[period.type]}`}
                            height={100}
                            width={x(period.period.to ? new Date(period.period.to) : new Date()) - (x(new Date(period.period.from))) }
                        />
                    ))}
                </g>

            </svg>
        )
    }
}

export {SessionChart}
