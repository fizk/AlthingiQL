import React from 'react';
import PieChart from "../../elements/PieChart";
import classVariations from "../../../utils/classVariations";
import {ComponentRenderStatus, VoteSummary} from "../../../../../@types";
import './index.scss';

interface Props extends ComponentRenderStatus {
    votes: VoteSummary[];
}

export default class VoteRatioChart extends React.Component<Props> {
    map: {[key: string]: string} = {
        'absence': 'Boðaði fjarvist',
        'announced_absence': 'Fjarverandi',
        'neutral': 'Greiddi ekki atkvæði',
        'partisan': 'Greiddi atkvæði',
    };

    render(): React.ReactNode {
        return (
            <div className="vote-ratio-chart">
                <div className="vote-ratio-chart__pie">
                    {!this.props.error && !this.props.loading && (
                        <PieChart size={100}
                                  source={this.props.votes &&this.props.votes.map(vote => ({
                                      value: vote.count,
                                      key: vote.vote,
                                  }))}/>
                    )}
                    {!this.props.error && this.props.loading && (
                        <PieChart size={100}
                                  source={[{
                                      value: 1,
                                      key: 'default',
                                  }]}/>
                    )}
                    {this.props.error &&  (
                        <PieChart size={100}
                                  source={[{
                                      value: 1,
                                      key: 'error',
                                  }]}/>
                    )}

                </div>
                <div className="vote-ratio-chart__legend">
                    <table className="vote-ratio-chart__legend-table">
                        <tbody>
                            {!this.props.error && !this.props.loading && this.props.votes.map((vote, i) => (
                                <tr key={i}>
                                    <td className="vote-ratio-chart__legend-count">
                                        {vote.count}
                                    </td>
                                    <td className="vote-ratio-chart__legend-label">
                                        <div className={classVariations('vote-ratio-chart__dot', [vote.vote])} />
                                    </td>
                                    <td className="vote-ratio-chart__legend-vote">
                                        {this.map[vote.vote]}
                                    </td>
                                </tr>
                            ))}
                            {/*{!this.props.error && this.props.loading === true && [1,2,3,4].map((vote, i) => (*/}
                                {/*<tr key={i}>*/}
                                    {/*<td>0</td>*/}
                                    {/*<td>-</td>*/}
                                {/*</tr>*/}
                            {/*))}*/}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
