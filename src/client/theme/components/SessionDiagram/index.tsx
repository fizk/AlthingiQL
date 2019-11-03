import React from 'react';
import {ComponentRenderStatus, Session} from "../../../../../@types";
import {scaleTime} from 'd3-scale';
import classVariations from '../../../utils/classVariations';
import {timeMonth} from "d3-time";
import './index.scss';

interface Props extends ComponentRenderStatus {
    sessions: Session[];
}

export default class SessionDiagram extends React.Component<Props> {
    map: {[key: string]: string} = {
        'varamaður': 'substitute',
        'með varamann': 'with-substitute',
        'þingmaður': 'congressman',
    };
    render(): React.ReactNode {

        const from = !this.props.error ? this.props.sessions.map(session => new Date(session.period.from)) : [0];
        const to = !this.props.error ? this.props.sessions.map(session => session.period.to ? new Date(session.period.to) : new Date()) : [0];

        const min = Math.min.apply(this, from as unknown as number[]);
        const max = Math.max.apply(this, to as unknown as number[]);

        const x = scaleTime()
            .domain([min, max])
            .range([0, 300]);
        const xTicks: Date[] = x.ticks(timeMonth.every(1) as unknown as number);

        return (
            <svg width={340} height={45}>
                {!this.props.error && !this.props.loading && (
                    <>
                        <g transform="translate(40, 0)">
                            {this.props.sessions.map(session => (
                                <rect key={session.id} className={classVariations('session-diagram__bar', [this.map[session.type]])}
                                      x={x(new Date(session.period.from))} y={0} height={13}
                                    width={x(
                                        session.period.to
                                            ? new Date(session.period.to)
                                            : new Date(),
                                    ) - x(new Date(session.period.from))}
                                />
                            ))}
                        </g>
                        <g transform="translate(40, 35)">
                            {xTicks.map((item, i: number) => (
                                <text className="session-diagram__label"
                                      key={`x-label-${i}`}
                                      x={x(item)}
                                      y={10}>
                                    {/*{item.getMonth() + 1}*/}
                                    {item.toLocaleString('default', { month: 'short' })[0]}
                                </text>
                            ))}
                        </g>
                    </>
                )}
                {!this.props.error && this.props.loading && (
                    <g transform="translate(40, 0)">
                        <rect className={classVariations('session-diagram__bar', [this.map['með varamann']])}
                              x={0}
                              y={0}
                              height={13}
                              width={300}
                        />
                    </g>
                )}
                {this.props.error &&  (
                    <g transform="translate(40, 0)">
                        <rect className={classVariations('session-diagram__bar', ['error'])}
                              x={0}
                              y={0}
                              height={13}
                              width={300}
                        />
                    </g>
                )}
                <g transform="translate(0, 30)">
                    <line x1={0} y1={0} x2={340} y2={0} className="session-diagram__line" />
                </g>
            </svg>

        )
    }
}
