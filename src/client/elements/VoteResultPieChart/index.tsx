import * as React from 'react';
import {pie, arc} from 'd3-shape';
import './index.scss';

const Map = {
    'fjarverandi': '888888',
    'greiðir ekki atkvæði': 'ece773',
    'já': '68cf68',
    'nei': 'd85465',
    'tók afstöðu': '123456',
};

interface Props {
    source?: Array<{
        vote?: string,
        value?: number,
    }>;
    formatValue?: (...args: any[]) => any;
}

export default class VoteResultPieChart extends React.Component<Props, {}> {
    public static defaultProps = {
        source: [],
        formatValue: v => v,
    };

    public dimensions = {
        width: 620,
        height: 240,
        gutter: 20,
    };

    private midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    public render() {
        const total = this.props.source.reduce((a, b) => a + b.value, 0);
        const pieData = pie<any>().value(d => d.value)(this.props.source); //@todo `any`
        const labelArc = arc()
            .innerRadius(40)
            .outerRadius(this.dimensions.height / 2 + 20);
        const path = arc()
            .innerRadius(40)
            .outerRadius(
                this.dimensions.height / 2 - 2 * this.dimensions.gutter,
            );
        const arcs = pieData.map((item) => {
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
                    padAngle: item.padAngle,
                },
            };
        });
        return (
            <svg
                className="party-pie-chart"
                width={this.dimensions.width + 2 * this.dimensions.gutter}
                height={this.dimensions.height + 2 * this.dimensions.gutter}
                viewBox={`0 0 ${this.dimensions.width +
                    2 * this.dimensions.gutter} ${this.dimensions.height +
                    2 * this.dimensions.gutter}`}>
                <g
                    transform={`translate(${this.dimensions.width / 2}, ${this
                        .dimensions.height / 2})`}>
                    {arcs.map(a => (
                        <g
                            key={`arch-${a.data.vote}`}
                            className="party-pie-chart__arch"
                        >
                            <path
                                className="party-pie-chart__path"
                                d={a.path}
                                fill={`#${Map[a.data.vote]}`}
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
                                        ? 'start'
                                        : 'end'
                                }
                                x={a.dimensions.outerCentroid.x}
                                y={a.dimensions.outerCentroid.y}
                            >
                                <tspan>{a.data.vote}</tspan>
                                <tspan>
                                    {this.props.formatValue(
                                        a.data.value,
                                        total,
                                    )}
                                </tspan>
                            </text>
                        </g>
                    ))}
                </g>
            </svg>
        );
    }
}
