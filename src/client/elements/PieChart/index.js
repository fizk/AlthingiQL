import React from 'react';
import PropTypes from 'prop-types';
import {pie, arc} from 'd3-shape'
import './_index.scss';
import classVariations from '../../utils/classVariations';

export default class PieChart extends React.PureComponent {
    static propTypes = {
        source: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            key: PropTypes.string,
            color: PropTypes.string,
        })),
    };

    static defaultProps = {
        source: [],
    };

    dimensions = {
        width: 100,
    };

    render() {
        const pieData = pie().value(d => d.value)(this.props.source);

        const path = arc()
            .innerRadius(30)
            .outerRadius((this.dimensions.width/2));

        const arcs = pieData.map(item => {
            const [innerCentroidX, innerCentroidY] = path.centroid(item);

            return {
                path: path(item),
                data: item.data,
                dimensions: {
                    innerCentroid: {x: innerCentroidX, y: innerCentroidY},
                    endAngle: item.endAngle,
                    startAngle: item.startAngle,
                    index: item.index,
                    padAngle: item.padAngle,
                },
            }
        });

        return (
            <svg className="party-pie-chart"
                width={this.dimensions.width}
                height={this.dimensions.width}
                viewBox={`0 0 ${this.dimensions.width} ${this.dimensions.width}`}>
                <g transform={`translate(${this.dimensions.width/2}, ${this.dimensions.width/2})`}>
                    {arcs.map(a => (
                        <g key={`arch-${a.data.value}-${a.data.color}`} className="party-pie-chart__arch">
                            <path className={classVariations('party-pie-chart__path', [a.data.key])} d={a.path}/>
                        </g>
                    ))}
                </g>
            </svg>
        )
    }
}
