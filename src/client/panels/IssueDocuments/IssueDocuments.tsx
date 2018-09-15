import * as React from 'react';
import { Row, Column } from "../../elements/Grid";
import Congressman from "../../elements/Congressman";
import VoteResultPieChart from "../../elements/VoteResultPieChart";
import DocumentCongressmanVotes from "../../components/DocumentCongressmanVotes";
import {Congressman as CongressmanType} from "../../../../@types";

type IssueDocumentsProps = {
    assembly?: number,
    issue?: number,
    documents?: {
        id?: number,
        url?: string,
        date?: string,
        type?: string,
        proponents: CongressmanType[],
        votes?: {
            id?: number,
            type?: string,
            outcome?: string,
            yes?: number,
            no?: number,
            inaction?: number,
            committee?: string
        }[]
    }[]
};

export default class IssueDocuments extends React.Component<IssueDocumentsProps, {}> {
    static defaultProps = {
        assembly: undefined,
        issue: undefined,
        documents: []
    };
    formatVoteResults(vote) {
        const value = [];
        if (vote.yes) {
            value.push({
                vote: "já",
                value: vote.yes
            });
        }
        if (vote.no) {
            value.push({
                vote: "nei",
                value: vote.no
            });
        }
        if (vote.inaction) {
            value.push({
                vote: "greiðir ekki atkvæði",
                value: vote.inaction
            });
        }
        return value;
    }
    render() {
        return (
            <Row>
                <Column>
                    <ul>
                        {this.props.documents.map(document => (
                            <li key={document.id}>
                                <a href={document.url} target="_blank">
                                    {" "}
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
                                                            vote
                                                        )}
                                                        formatValue={value =>
                                                            ` ${value}`
                                                        }
                                                    />
                                                </td>
                                                <td>{vote.outcome}</td>
                                                <td>{vote.committee}</td>
                                                <td>
                                                    <DocumentCongressmanVotes
                                                        assembly={
                                                            this.props.assembly
                                                        }
                                                        issue={this.props.issue}
                                                        vote={vote.id}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <hr />
                            </li>
                        ))}
                    </ul>
                    <h2>{this.props.issue}</h2>
                </Column>
            </Row>
        );
    }
}
