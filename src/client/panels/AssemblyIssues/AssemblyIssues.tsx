import * as React from 'react';
import { Row, Column } from "../../elements/Grid";
import { SearchIssueWithStore } from "../../components/SearchIssue";
import Loading from "../../elements/Loading";
import Blank from "../../elements/Blank";
import IssuesMenu from "../../components/IssuesMenu";
import {
    BillBadge,
    InquiryBadge,
    MeetingPostponementBadge,
    OpinionBadge,
    ParliamentaryResolutionBadge,
    ReportBadge,
    RequestForReportBadge,
    WrittenInquiryBadge
} from "../../elements/IssueBadge";
import {Congressman as CongressmanType, Assembly as AssemblyType} from '../../../../@types'
import './index.scss';

type AssemblyIssuesProps = {
    issues?: {
        id?: number,
        assembly: AssemblyType,
        name?: string,
        status?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number,
        proponents: CongressmanType[]
    }[],
    assembly?: number,
    done?: boolean,
    loadMore?: (...args: any[]) => any,
    loading?: boolean,
    filter?: {
        type?: string,
        category?: string
    }
};

export default class AssemblyIssues extends React.Component<AssemblyIssuesProps, {}> {
    static defaultProps = {
        issues: [],
        assembly: undefined,
        filter: {
            type: undefined,
            category: undefined
        },
        done: true,
        loadMore: () => {},
        loading: false
    };
    render() {
        return (
            <Row>
                <Column sm={12} md={8}>
                    {this.props.issues.length !== 0 && (
                        <ul className="assembly-issues-panel__list">
                            {this.props.issues.map(
                                issue =>
                                    ({
                                        a: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--md"
                                            >
                                                <ParliamentaryResolutionBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        ),
                                        b: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                            >
                                                <RequestForReportBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        ),
                                        f: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                            >
                                                <MeetingPostponementBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        ),
                                        l: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--lg"
                                            >
                                                <BillBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        ),
                                        m: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                            >
                                                <InquiryBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        ),
                                        n: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                            >
                                                <OpinionBadge issue={issue} />
                                            </li>
                                        ),
                                        q: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                            >
                                                <WrittenInquiryBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        ),
                                        s: (
                                            <li
                                                key={`issue-${issue.id}`}
                                                className="assembly-issues-panel__list-item assembly-issues-panel__list-item--sm"
                                            >
                                                <ReportBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a, b) => b,
                                                        undefined
                                                    )}
                                                />
                                            </li>
                                        )
                                    }[issue.type])
                            )}
                        </ul>
                    )}
                    {this.props.loading === false &&
                        this.props.issues.length === 0 && <Blank />}
                    {this.props.loading === true && <Loading />}
                    {!this.props.done && (
                        <button onClick={this.props.loadMore}>load more</button>
                    )}
                </Column>
                <Column sm={1} md={4}>
                    <nav style={{ position: "sticky", top: 0 }}>
                        <SearchIssueWithStore assembly={this.props.assembly} />
                        <IssuesMenu
                            assembly={this.props.assembly}
                            filter={this.props.filter}
                        />
                    </nav>
                </Column>
            </Row>
        );
    }
}
