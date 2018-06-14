import * as React from 'react';
import { pie, arc } from "d3-shape";
import './index.scss';

type PartyPieChartProps = {
    source?: {
        party?: {
            id?: number,
            name?: string,
            color?: string
        },
        value?: number
    }[],
    formatValue?: (...args: any[]) => any
};

export default class PartyPieChart extends React.Component<PartyPieChartProps, {}> {
    static defaultProps = {
        source: [],
        formatValue: v => v
    };

    dimensions = {
        width: 620,
        height: 240,
        gutter: 20
    };

    constructor(props) {
        super(props);

    }
    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }
    render() {
        const pieData = pie<any>().value(d => d.value)(this.props.source); //@todo `any`
        const labelArc = arc()
            .innerRadius(40)
            .outerRadius(this.dimensions.height / 2 + 20);
        const path = arc()
            .innerRadius(40)
            .outerRadius(
                this.dimensions.height / 2 - 2 * this.dimensions.gutter
            );
        const arcs = pieData.map(item => {
            const [innerCentroidX, innerCentroidY] = path.centroid(item as any);
            const [outerCentroidX, outerCentroidY] = labelArc.centroid(item as any);
            return {
                path: path(item as any),
                data: item.data,
                dimensions: {
                    innerCentroid: { x: innerCentroidX, y: innerCentroidY },
                    outerCentroid: { x: outerCentroidX, y: outerCentroidY },
                    endAngle: item.endAngle,
                    startAngle: item.startAngle,
                    index: item.index,
                    padAngle: item.padAngle
                }
            };
        });
        return (
            <svg
                className="party-pie-chart"
                width={this.dimensions.width + 2 * this.dimensions.gutter}
                height={this.dimensions.height + 2 * this.dimensions.gutter}
                viewBox={`0 0 ${this.dimensions.width +
                    2 * this.dimensions.gutter} ${this.dimensions.height +
                    2 * this.dimensions.gutter}`}
            >
                >
                <g
                    transform={`translate(${this.dimensions.width / 2}, ${this
                        .dimensions.height / 2})`}
                >
                    {arcs.map(a => (
                        <g
                            key={`arch-${a.data.party.id}`}
                            className="party-pie-chart__arch"
                        >
                            <path
                                className="party-pie-chart__path"
                                d={a.path}
                                fill={`#${a.data.party.color}`}
                            />
                            <line
                                stroke="black"
                                x1={a.dimensions.innerCentroid.x}
                                y1={a.dimensions.innerCentroid.y}
                                x2={a.dimensions.outerCentroid.x}
                                y2={a.dimensions.outerCentroid.y}
                            />
                            <text
                                textAnchor={
                                    this.midAngle(a.dimensions) < Math.PI
                                        ? "start"
                                        : "end"
                                }
                                x={a.dimensions.outerCentroid.x}
                                y={a.dimensions.outerCentroid.y}
                            >
                                <tspan>{a.data.party.name}</tspan>
                                <tspan>
                                    {this.props.formatValue(a.data.value)}
                                </tspan>
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        );
    }
}
