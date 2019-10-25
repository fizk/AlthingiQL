import React from 'react';
import {Issue, ServerFetchStatus} from "../../../../../@types";
import {Link} from "react-router-dom";

interface Props {
    assembly: number;
    issues: ServerFetchStatus & {
        issues: Issue[];
        done: boolean;
    };
    filter: Map<string, string>;
    pagination: () => void;

}

export default class AssemblyIssuesPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                {!this.props.issues.error && this.props.issues.loading === false && (
                    <>
                    <ul>
                        {this.props.issues.issues.map(issue => (
                            <li key={issue.id}>
                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.type.category}/${issue.id}`}>
                                    {issue.id} {issue.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                        {!this.props.issues.done && (
                            <button onClick={this.props.pagination}>load more</button>
                        )}
                    </>

                )}
                {!this.props.issues.error && this.props.issues.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.issues.error && (
                    <div>Error...</div>
                )}
            </>
        )
    }
}
