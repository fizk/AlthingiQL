import React from 'react';
import PropTypes from 'prop-types';
import {pie, arc} from 'd3-shape'
import {ISSUE_STATUS} from '../../utils/maps';
import classVariations from '../../utils/classVariations';
import './_index.scss';

class StatusPieChart extends React.Component {
    static propTypes = {
        source: PropTypes.arrayOf(PropTypes.shape({
            bill: PropTypes.shape({
                status: PropTypes.string,
            }),
            value: PropTypes.number
        })),
        formatValue: PropTypes.func,
    };

    static defaultProps = {
        source: [],
        formatValue: v => v,
    };

    constructor(props) {
        super(props);

        this.dimensions = {
            width: 620,
            height: 240,
            gutter: 20,
        }
    }

    midAngle(d) {
        return d.startAngle + (d.endAngle - d.startAngle) / 2;
    }

    render() {
        const pieData = pie().value(d => d.value)(this.props.source);
        const labelArc = arc()
            .innerRadius(40)
            .outerRadius((this.dimensions.height/2) + 20);
        const path = arc()
            .innerRadius(40)
            .outerRadius((this.dimensions.height/2) - (2 * this.dimensions.gutter));

        const arcs = pieData.map(item => {
            const [innerCentroidX, innerCentroidY] = path.centroid(item);
            const [outerCentroidX, outerCentroidY] = labelArc.centroid(item);
            return {
                path: path(item),
                data: item.data,
                dimensions: {
                    innerCentroid: {x: innerCentroidX, y: innerCentroidY},
                    outerCentroid: {x: outerCentroidX, y: outerCentroidY},
                    endAngle: item.endAngle,
                    startAngle: item.startAngle,
                    index: item.index,
                    padAngle: item.padAngle,
                },
            }
        });
        return (
            <svg className="status-pie-chart"
                 width={(this.dimensions.height) + (2 * this.dimensions.gutter)}
                 height={(this.dimensions.height) + (2 * this.dimensions.gutter)}
                 viewBox={`0 0 ${(this.dimensions.height) + (2 * this.dimensions.gutter)} ${(this.dimensions.height) + (2 * this.dimensions.gutter)}`}>>
                <g transform={`translate(${this.dimensions.height/2}, ${this.dimensions.height/2})`}>
                    {arcs.map(a => (
                        <g key={`arch-${a.data.bill.status}`} className="status-pie-chart__arch">
                            <path className={classVariations('status-pie-chart__path', [ISSUE_STATUS[a.data.bill.status]])} d={a.path} />
                        </g>
                    ))}
                </g>
            </svg>
        )
    }
}

export {StatusPieChart}
