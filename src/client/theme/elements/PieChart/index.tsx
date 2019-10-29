import * as React from 'react';
import {pie, arc} from 'd3-shape';
import classVariations from '../../../utils/classVariations';
import './index.scss';

interface Props {
    source: Data[];
    // formatValue?: (...args: any[]) => any;
    variations?: string[];
    size?: number;
    onEnter?: (event: React.SyntheticEvent<SVGPathElement>, data: Data, total: number) => void;
    onLeave?: (event: React.SyntheticEvent<SVGPathElement>, data: Data, total: number) => void;
}

interface Data {
    value: number;
    key?: string;
    color?: string | null | undefined;
    label?: string;
}

export default class PieChart extends React.PureComponent<Props> {
    public static defaultProps = {
        source: [],
        variations: [],
        onEnter: (): void => {},
        onLeave: (): void => {},
    };

    public render(): React.ReactNode {

        const total = this.props.source.reduce((acc, value) => acc + value.value, 0);

        const size = this.props.size || Number(Object.entries({
            31: (this.props.variations || []).indexOf('sm') >= 0,
            39: (this.props.variations || []).indexOf('md') >= 0,
            48: (this.props.variations || []).indexOf('lg') >= 0,
        }).reduce((prev, [key, value]) => (value ? String(key) : prev), '48'));

        const pieData = pie<Data>().value(d => d.value)(this.props.source);
        const path = arc()
            .innerRadius(size / 2)
            .outerRadius(size / 4);
        const arcs = pieData.map(item => {
            const [innerCentroidX, innerCentroidY] = path.centroid(item as any);
            return {
                path: path(item as any),
                data: item.data,
                dimensions: {
                    innerCentroid: { x: innerCentroidX, y: innerCentroidY },
                    endAngle: item.endAngle,
                    startAngle: item.startAngle,
                    index: item.index,
                    padAngle: item.padAngle,
                },
            };
        });
        return (
            <div className="pie-chart">
                <svg width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}>
                    <g transform={`translate(${size / 2}, ${size / 2})`}>
                        {arcs.map(a => (
                            <g key={`arch-${a.data.value}-${a.data.key}-${a.data.color}`} className="pie-chart__arch">
                                <path fill={a.data.color || ''}
                                      onMouseOver={event => this.props.onEnter && this.props.onEnter(event, a.data, total)}
                                      onMouseOut={event => this.props.onLeave && this.props.onLeave(event, a.data, total)}
                                      className={classVariations('pie-chart__path', [a.data.key || ''])}
                                      d={a.path || undefined}
                                />
                            </g>
                        ))}
                    </g>
                    {this.props.children}
                </svg>
            </div>
        );
    }
}
