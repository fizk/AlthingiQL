import React from 'react';
import PropTypes from 'prop-types';
import {pie, arc} from 'd3-shape'
import './_index.scss';

class SeatChart extends React.Component {
    static propTypes = {
        source: PropTypes.arrayOf(PropTypes.shape({
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
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
            radius: 10,
        }
    }

    render() {

        const seatList = this.props.source.map(item => {
           return Array.from({...item, length: item.value}).map(party => ({color: item.party.color}));
        }).reduce((total, amount) => total.concat(amount), []);

        const perColumn = 10;

        let rowCount = 0;
        let columnCount = 0;
        const seatPosition = seatList.map(item => {
            const obj = {
                ...item,
                position: {
                    x: rowCount,
                    y: columnCount
                }
            };

            columnCount = (rowCount === (perColumn - 1)) ? columnCount + 1 : columnCount;
            rowCount = (rowCount === (perColumn - 1)) ? 0 : rowCount + 1;

            return obj;
        });

        return (
            <svg className="party-pie-chart"
                width={(this.dimensions.width) + (2 * this.dimensions.gutter)}
                height={(this.dimensions.height) + (2 * this.dimensions.gutter)}
                viewBox={`0 0 ${(this.dimensions.width) + (2 * this.dimensions.gutter)} ${(this.dimensions.height) + (2 * this.dimensions.gutter)}`}>>
                <g>
                    {seatPosition.map((item, i) => (
                        <circle key={`circle-${i}`}
                                cx={(item.position.x * (this.dimensions.radius * 3)) + this.dimensions.radius}
                                cy={(item.position.y * (this.dimensions.radius * 3)) + this.dimensions.radius}
                                r={this.dimensions.radius} fill={`#${item.color}`}/>
                    ))}
                </g>
            </svg>
        )
    }
}

export {SeatChart}
