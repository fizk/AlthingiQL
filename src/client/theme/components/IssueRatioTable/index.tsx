import React from 'react';
import {ComponentRenderStatus, IssueCount} from "../../../../../@types";
import PieChart from "../../elements/PieChart";
import classVariations from "../../../utils/classVariations";
import './index.scss'

interface Props extends ComponentRenderStatus {
    issues: IssueCount[];
}

export default class IssueRatioTable extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <div className="issue-ratio-table">
                <div className="issue-ratio-table__pie">
                    {!this.props.error && !this.props.loading && (
                        <PieChart size={100}
                                  source={this.props.issues &&this.props.issues.map(vote => ({
                                      value: vote.count,
                                      key: vote.type,
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
                <div className="issue-ratio-table__legend">
                    <table className="issue-ratio-table__legend-table">
                    <tfoot>
                        <tr>
                            <td className="issue-ratio-table__legend-table-count">
                                {!this.props.error && !this.props.loading && this.props.issues.reduce((accumulated, item) => (accumulated + item.count), 0)}
                            </td>
                            <td>&nbsp;</td>
                        </tr>
                    </tfoot>
                    <tbody>
                    {!this.props.error && !this.props.loading && this.props.issues.map(issue => (
                        <tr key={issue.type}>
                            <td className="issue-ratio-table__legend-table-count">{issue.count}</td>
                            {/*<td>{issue.documentType}</td>*/}
                            {/*<td>{issue.order}</td>*/}
                            <td className="vote-ratio-chart__legend-label">
                                <div className={classVariations('issue-ratio-table__legend-table-dot', [issue.type])} />
                            </td>
                            <td>{issue.type}</td>
                            {/*<td>{issue.typeName}</td>*/}
                            {/*<td>{issue.typeSubName}</td>*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
