import * as React from 'react';
import { pie, arc } from 'd3-shape';
import { ISSUE_STATUS } from '../../utils/maps';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface Props {
    source: Array<{
        bill?: {
            status?: string;
        };
        value?: number;
    }>;
    formatValue?: (...args: any[]) => any;
}

export default class StatusPieChart extends React.Component<Props, {}> {
    public static defaultProps = {
        source: [],
        formatValue: (v: any) => v,
    };

    public dimensions = {
        width: 620,
        height: 240,
        gutter: 20,
    };

    private midAngle(d: any) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    public render() {
        const pieData = pie<any>().value(d => d.value)(this.props.source); //@todo `any`
        const labelArc = arc()
            .innerRadius(40)
            .outerRadius(this.dimensions.height / 2 + 20);
        const path = arc()
            .innerRadius(40)
            .outerRadius(
                this.dimensions.height / 2 - 2 * this.dimensions.gutter,
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
                    padAngle: item.padAngle,
                },
            };
        });
        return (
            <svg
                className="status-pie-chart"
                width={this.dimensions.height + 2 * this.dimensions.gutter}
                height={this.dimensions.height + 2 * this.dimensions.gutter}
                viewBox={`0 0 ${this.dimensions.height +
                    2 * this.dimensions.gutter} ${this.dimensions.height +
                    2 * this.dimensions.gutter}`}>
                <g
                    transform={`translate(${this.dimensions.height / 2}, ${this
                        .dimensions.height / 2})`}
                >
                    {arcs.map(a => (
                        <g
                            key={`arch-${a.data.bill.status}`}
                            className="status-pie-chart__arch"
                        >
                            <path
                                className={classVariations(
                                    'status-pie-chart__path',
                                    [ISSUE_STATUS[a.data.bill.status]],
                                )}
                                d={a.path || undefined}
                            />
                        </g>
                    ))}
                </g>
            </svg>
        );
    }
}
