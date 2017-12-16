import React from 'react';
import PropTypes from 'prop-types';
import {scaleLinear} from 'd3-scale';
import './_index.scss';

export class HorizontalChart extends React.Component {
    static propTypes = {
        source: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            label: PropTypes.string,
        }))
    };

    static defaultProps = {
        source: []
    };

    constructor(props) {
        super(props);

        this.dimensions = {
            width: 1024,
            height: 240,
            gutter: 20,
            labelSpace: 200,
            barHeight: 20,
        }
    }

    render() {

        const values = this.props.source.map(item => item.value);
        const max = Math.max(...values);
        const height = (values.length * this.dimensions.barHeight) + this.dimensions.gutter;

        const x = scaleLinear()
            .domain([0, max])
            .range([this.dimensions.gutter + this.dimensions.labelSpace, this.dimensions.width]);

        const xTicks = x.ticks();

        return (
            <svg className="horizontal-chart"
                 width={(this.dimensions.width) + (2 * this.dimensions.gutter)}
                 height={(height) + (3 * this.dimensions.gutter)}
                 viewBox={`0 0 ${(this.dimensions.width) + (2 * this.dimensions.gutter)} ${(height) + (3 * this.dimensions.gutter)}`}>
                <g>
                    <line className="horizontal-chart__baseline"
                          x1="0"
                          y1={height + this.dimensions.gutter}
                          x2={(this.dimensions.width) + (2 * this.dimensions.gutter)}
                          y2={height + this.dimensions.gutter}/>
                </g>
                <g>
                    {this.props.source.map((item, i) => (
                        <text key={`label-${item.label}`}
                              x={0}
                              y={(i * this.dimensions.barHeight) + this.dimensions.gutter}
                        >{item.label}</text>
                    ))}
                </g>
                <g>
                    {xTicks.map((item, i) => (
                        <line className="horizontal-chart__line"
                              key={`x-line-${i}`}
                              x1={x(item)}
                              y1={this.dimensions.gutter}
                              x2={x(item)}
                              y2={height + this.dimensions.gutter}/>
                    ))}
                    {xTicks.map((item, i) => (
                        <text className="horizontal-chart__line"
                              key={`x-label-${i}`}
                              x={x(item)}
                              y={height + (this.dimensions.gutter) + (this.dimensions.gutter)}>
                            <tspan x={x(item)} dy="0">{item}</tspan>
                        </text>
                    ))}
                </g>
                <g>
                    {this.props.source.map((item, i) => (
                        <rect className="horizontal-chart__bar"
                            key={`rect-${item.label}-${i}`}
                            x={this.dimensions.gutter + this.dimensions.labelSpace}
                            y={i * this.dimensions.barHeight}
                            fill={`#000`}
                            height={this.dimensions.barHeight}
                            width={x(item.value) - this.dimensions.gutter - this.dimensions.labelSpace }
                        />
                    ))}
                </g>
            </svg>
        )
    }
}
