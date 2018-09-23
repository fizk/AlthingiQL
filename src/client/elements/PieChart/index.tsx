import * as React from 'react';
import {MouseEvent} from 'react';
import {pie, arc} from 'd3-shape';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface Props {
    source?: Array<{
        value: number,
        key?: string,
        color?: string
        label?: string,
    }>;
    formatValue?: (label: string, value: number, total: number) => string;
}

interface State {
    isLabel: boolean;
    label: string;
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
        formatValue: label => label,
    };

    public dimensions = {
        width: 100,
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
            label: this.props.formatValue(data.label, data.value, this.props.source.reduce((p, c) => p + c.value, 0)),
            position: {
                left: event.clientX - event.currentTarget.getBoundingClientRect().left,
                top: event.clientY - event.currentTarget.getBoundingClientRect().top,
            },
        });
    };

    public handleLeave = (): void => {
        this.setState({
            isLabel: true,
            label: undefined,
            position: {
                left: 0,
                top: 0,
            },
        });
    };

    public render() {
        const pieData = pie<any>().value(d => d.value)(this.props.source); //@todo `any`
        const path = arc()
            .innerRadius(30)
            .outerRadius(this.dimensions.width / 2);
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
                <svg
                    width={this.dimensions.width}
                    height={this.dimensions.width}
                    viewBox={`0 0 ${this.dimensions.width} ${this.dimensions.width}`}>
                    <g transform={`translate(${this.dimensions.width / 2}, ${this.dimensions.width / 2})`}>
                        {arcs.map(a => (
                            <g key={`arch-${a.data.value}-${a.data.key}-${a.data.color}`} className="pie-chart__arch">
                                <path fill={a.data.color}
                                    onMouseOver={event => this.handleEnter(event, a.data)}
                                    onMouseOut={() => this.handleLeave()}
                                    className={classVariations('pie-chart__path', [a.data.key])}
                                    d={a.path}
                                />
                            </g>
                        ))}
                    </g>
                </svg>
            </div>
        );
    }
}
