import * as React from 'react';
import {MouseEvent} from 'react';
import {pie, arc} from 'd3-shape';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface Props {
    source: Data[];
    formatValue?: (...args: any[]) => any;
    variations?: string[];
}

interface State {
    isLabel: boolean;
    label: string | undefined;
    position: {
        top: number
        left: number,
    };
}

interface Data {
    value: number;
    key?: string;
    color?: string;
    label?: string;
}

export default class PieChart extends React.PureComponent<Props, State> {
    public static defaultProps = {
        source: [],
        formatValue: (v: any) => v,
        variations: [],
    };

    public state = {
        isLabel: false,
        label: undefined,
        position: {
            top: 0,
            left: 0,
        },
    };

    public handleEnter = (event: MouseEvent<SVGPathElement>, data: Data): void => {
        this.setState({
            isLabel: true,
            label: this.props.formatValue && this.props.formatValue(data.label, data.value, this.props.source.reduce((p, c) => p + c.value, 0)),
            position: {
                left: event.clientX - event.currentTarget.getBoundingClientRect().left,
                top: event.clientY - event.currentTarget.getBoundingClientRect().top,
            },
        });
    };

    public handleLeave = (): void => {
        this.setState({
            isLabel: false,
            label: undefined,
            position: {
                left: 0,
                top: 0,
            },
        });
    };

    public render() {

        const size: number = Number(Object.entries({
            23: (this.props.variations || []).indexOf('sm') >= 0,
            32: (this.props.variations || []).indexOf('md') >= 0,
            46: (this.props.variations || []).indexOf('lg') >= 0,
        }).reduce((prev, [key, value]) => (value ? String(key) : prev), '46'));

        const pieData = pie<any>().value(d => d.value)(this.props.source); //@todo `any`
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
                {this.state.isLabel && (
                    <div className="pie-chart__label"
                        style={{top: this.state.position.top, left: this.state.position.left}}>
                        {this.state.label}
                    </div>
                )}
                <svg width={size}
                    height={size}
                    viewBox={`0 0 ${size} ${size}`}>
                    <g transform={`translate(${size / 2}, ${size / 2})`}>
                        {arcs.map(a => (
                            <g key={`arch-${a.data.value}-${a.data.key}-${a.data.color}`} className="pie-chart__arch">
                                <path fill={a.data.color}
                                    onMouseOver={event => this.handleEnter(event, a.data)}
                                    onMouseOut={() => this.handleLeave()}
                                    className={classVariations('pie-chart__path', [a.data.key])}
                                    d={a.path || undefined}
                                />
                            </g>
                        ))}
                    </g>
                </svg>
            </div>
        );
    }
}
