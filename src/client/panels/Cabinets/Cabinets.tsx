import * as React from 'react';
import {Fragment} from 'react';
import {
    Cabinet as CabinetType,
    Inflation as InflationType,
    Period as PeriodType,
} from '../../../../@types';
import {Link} from 'react-router-dom';
import InflationChart from '../../elements/InflationChart';

interface Props {
    cabinets: CabinetType[];
    inflation: InflationType[];
}

interface State {
    period: PeriodType;
}

export default class Cabinets extends React.Component<Props, State> {
    public static defaultProps = {
        cabinets: [],
        inflation: [],
    };

    public state = {
        period: {
            from: undefined,
            to: undefined,
        },
    };

    public render() {
        return (
            <Fragment>
                <ul>
                    {this.props.cabinets.map(cabinet => (
                        <li onMouseOver={() => {
                            this.setState({period: cabinet.period});
                        }} onMouseOut={() => {
                            this.setState({period: {from: undefined, to: undefined}});
                        }}>
                            <Link to={`/raduneyti/${cabinet.id}`}>{cabinet.title}</Link>
                        </li>
                    ))}
                </ul>
                <InflationChart inflation={this.props.inflation} period={this.state.period}/>
            </Fragment>
        );
    }
}
