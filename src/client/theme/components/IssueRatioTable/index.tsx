import React from 'react';
import {ComponentRenderStatus, IssueCount} from "../../../../../@types";
import './index.scss'

interface Props extends ComponentRenderStatus {
    issues: IssueCount[];
}

export default class IssueRatioTable extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <table className="issue-ratio-table">
                <thead>
                    <tr>
                        <td className="issue-ratio-table__count-label">Fjoldi</td>
                        {/*<td>documentType</td>*/}
                        {/*<td>order</td>*/}
                        <td className="issue-ratio-table__type-label">Flokkur</td>
                        {/*<td>typeName</td>*/}
                        {/*<td>typeSubName</td>*/}
                    </tr>
                </thead>
                <tbody>
                {!this.props.error && this.props.loading === false && this.props.issues.map(issue => (
                    <tr key={issue.type}>
                        <td className="issue-ratio-table__count">{issue.count}</td>
                        {/*<td>{issue.documentType}</td>*/}
                        {/*<td>{issue.order}</td>*/}
                        <td className="issue-ratio-table__type">{issue.type}</td>
                        {/*<td>{issue.typeName}</td>*/}
                        {/*<td>{issue.typeSubName}</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        )
    }
}
