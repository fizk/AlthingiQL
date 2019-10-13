import * as React from 'react';
import Congressman from '../../elements/Congressman';
import VoteResultPieChart from '../../charts/VoteResultPieChart';
import DocumentCongressmanVotes from '../../components/DocumentCongressmanVotes';
import {
    Assembly as AssemblyType,
    Document as DocumentType,
    ServerFetchStatus,
    VoteResult,
    Issue as IssueType,
} from '../../../../@types';
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import AssemblyIssueNavigation from "../../elements/AssemblyIssueNavigation";
import './index.scss';

interface Props extends ServerFetchStatus {
    assembly: number;
    issue: number;
    category: string;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    issueProperties: ServerFetchStatus & {
        issue: IssueType;
    };
    documents: DocumentType[];
}

export default class IssueDocuments extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        assemblyProperties: {
            error: undefined,
            loading: false,
            assembly: {
                id: undefined,
                period: {
                    from: undefined,
                    to: undefined,
                },
                division: [],
                cabinet: {
                    title: undefined,
                    period: {from: undefined, to: undefined}
                }
            },
        },
        issue: undefined,
        issueProperties: {
            issue: {
                id: undefined,
                assembly: {id: undefined},
                name: undefined,
                type: {
                    type:  undefined,
                    category: undefined,
                    typeName: undefined,
                    typeSubName: undefined,
                },
                date: undefined,
            },
            loading: false,
            error: undefined,
        },
        documents: [],
        loading: false,
        error: undefined,
    };

    private formatVoteResults(vote: VoteResult) {
        const value = [];
        if (vote.yes) {
            value.push({
                vote: 'já',
                value: vote.yes,
            });
        }
        if (vote.no) {
            value.push({
                vote: 'nei',
                value: vote.no,
            });
        }
        if (vote.inaction) {
            value.push({
                vote: 'greiðir ekki atkvæði',
                value: vote.inaction,
            });
        }
        return value;
    }

    public render() {
        return (
            <main className="assembly-issue-documents-panel">
                <section className="assembly-issue-documents-panel__user">search and avatar</section>
                <nav className="assembly-issue-documents-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                    <AssemblyIssueNavigation
                        assembly={this.props.assembly}
                        issue={this.props.issue}
                        category={this.props.category}
                    />
                </nav>
                <header className="assembly-issue-documents-panel__header">
                    <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                    <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                </header>
                <aside className="assembly-issue-documents-panel__aside">
                    <h2>{this.props.issueProperties.issue.name}</h2>
                </aside>
                <section className="assembly-issue-documents-panel__items">
                    <ul>
                        {this.props.documents.map(document => (
                            <li key={document.id}>
                                <a href={document.url} target="_blank">
                                    {' '}
                                    {document.type}
                                </a>
                                <time>{document.date}</time>
                                <ul>
                                    {document.proponents.map(congressman => (
                                        <Congressman
                                            key={`proponents-${document.id}-${
                                                congressman.id
                                                }`}
                                            congressman={congressman}
                                            party={congressman.party}
                                        />
                                    ))}
                                </ul>
                                <table>
                                    <thead>
                                    <tr>
                                        <td>type</td>
                                        <td>result</td>
                                        <td>outcome</td>
                                        <td>committee</td>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {document.votes.map(vote => (
                                        <tr key={`vote-${vote.id}`}>
                                            <td>{vote.type}</td>
                                            <td>
                                                <VoteResultPieChart
                                                    source={this.formatVoteResults(
                                                        vote,
                                                    )}
                                                    formatValue={value =>
                                                        ` ${value}`
                                                    }
                                                />
                                            </td>
                                            <td>{vote.outcome}</td>
                                            <td>{vote.committee}</td>
                                            <td>
                                                {/*<DocumentCongressmanVotes*/}
                                                    {/*assembly={*/}
                                                        {/*this.props.assembly*/}
                                                    {/*}*/}
                                                    {/*issue={this.props.issue}*/}
                                                    {/*vote={vote.id}*/}
                                                {/*/>*/}
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <hr />
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="assembly-issue-documents-panel_stats"></section>
            </main>
        );
    }
}
