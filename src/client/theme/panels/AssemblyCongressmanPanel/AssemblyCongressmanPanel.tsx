import React from 'react';
import {
    IssueCount,
    ServerFetchStatus,
    Session,
    SuperCategorySpeechTime,
    VoteSummary,
    Person,
    Issue
} from "../../../../../@types";
import {Link} from "react-router-dom";

interface Props {
    assembly: number;
    congressman: number;
    sessions: ServerFetchStatus & {
        sessions: Session[];
    };
    votes: ServerFetchStatus & {
        votes: VoteSummary[];
    };
    issues: ServerFetchStatus & {
        promotions: Issue[];
        types: IssueCount[];
        speeches: SuperCategorySpeechTime[];
    };
    person: ServerFetchStatus & {
        person: Person;
    };
}

export default class AssemblyCongressmanPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                {!this.props.person.error && this.props.person.loading === false && (
                    <h2>{this.props.person.person.name}</h2>
                )}
                {!this.props.person.error && this.props.person.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.person.error &&  (
                    <div>Error...</div>
                )}


                {!this.props.issues.error && this.props.issues.loading === false && (
                    <>
                        <h3>Categories</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>time</td>
                                <td>title</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.issues.speeches.map((category, i) => (
                                <tr key={i}>
                                    <td>{category.time}</td>
                                    <td>{category.superCategory.title}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <h3>Issue Count</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>count</td>
                                <td>documentType</td>
                                <td>order</td>
                                <td>type</td>
                                <td>typeName</td>
                                <td>typeSubName</td>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.issues.types.map(issue => (
                                    <tr key={issue.type}>
                                        <td>{issue.count}</td>
                                        <td>{issue.documentType}</td>
                                        <td>{issue.order}</td>
                                        <td>{issue.type}</td>
                                        <td>{issue.typeName}</td>
                                        <td>{issue.typeSubName}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <h3>Promoted issues</h3>
                        <ul>
                        {this.props.issues.promotions.map(issue => (
                            <li key={issue.id}>
                                {issue.id} <Link to={`/loggjafarthing/${this.props.assembly}/thingmal/${issue.type.category}/${issue.id}`}>{issue.name}</Link>
                            </li>
                        ))}
                        </ul>
                    </>
                )}
                {!this.props.issues.error && this.props.issues.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.issues.error &&  (
                    <div>Error...</div>
                )}


                {!this.props.sessions.error && this.props.sessions.loading === false && (
                    <>
                        <h3>Sessions</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>from</td>
                                <td>to</td>
                                <td>type</td>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.sessions.sessions.map(session => (
                                <tr key={session.id}>
                                    <td>{session.period.from}</td>
                                    <td>{session.period.to}</td>
                                    <td>{session.type}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </>
                )}
                {!this.props.sessions.error && this.props.sessions.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.sessions.error &&  (
                    <div>Error...</div>
                )}


                {!this.props.votes.error && this.props.votes.loading === false && (
                    <>
                        <h3>Votes</h3>
                        <ul>
                            {this.props.votes.votes.map((vote, i) => (
                                <li key={i}>{vote.count} {vote.vote}</li>
                            ))}
                        </ul>
                    </>
                )}
                {!this.props.votes.error && this.props.votes.loading === true && (
                    <div>Loading...</div>
                )}
                {this.props.votes.error && (
                    <div>Error...</div>
                )}
            </>
        )
    }
}
