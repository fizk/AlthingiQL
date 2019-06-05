import * as React from 'react';
import {Party as PartyType} from '../../../../@types';
import './index.scss';

interface Props {
    source: Source[];
    formatValue?: (...args: any[]) => any;
}

interface Source {
    party: PartyType,
    value: number,
}

export default class SeatChart extends React.Component<Props, {}> {
    public static defaultProps = {
        source: [],
        formatValue: (v: any) => v,
    };

    public dimensions = {
        width: 620,
        height: 240,
        gutter: 20,
        radius: 10,
    };

    constructor(props: Props) {
        super(props);

    }

    public render() {
        const seatList = this.props.source
            .map(item => {
                return Array.from({ ...item, length: item.value } as any)
                    .map(party => ({ color: item.party.color })); //@todo
            })
            .reduce((total, amount) => total.concat(amount), []);
        const perColumn = 10;
        let rowCount = 0;
        let columnCount = 0;
        const seatPosition = seatList.map(item => {
            const obj = {
                ...item,
                position: {
                    x: rowCount,
                    y: columnCount,
                },
            };
            columnCount =
                rowCount === perColumn - 1 ? columnCount + 1 : columnCount;
            rowCount = rowCount === perColumn - 1 ? 0 : rowCount + 1;
            return obj;
        });
        return (
            <svg
                className="party-pie-chart"
                width={this.dimensions.width + 2 * this.dimensions.gutter}
                height={this.dimensions.height + 2 * this.dimensions.gutter}
                viewBox={`0 0 ${this.dimensions.width +
                    2 * this.dimensions.gutter} ${this.dimensions.height +
                    2 * this.dimensions.gutter}`}>
                <g>
                    {seatPosition.map((item, i) => (
                        <circle
                            key={`circle-${i}`}
                            cx={
                                item.position.x * (this.dimensions.radius * 3) +
                                this.dimensions.radius
                            }
                            cy={
                                item.position.y * (this.dimensions.radius * 3) +
                                this.dimensions.radius
                            }
                            r={this.dimensions.radius}
                            fill={`#${item.color}`}
                        />
                    ))}
                </g>
            </svg>
        );
    }
}
