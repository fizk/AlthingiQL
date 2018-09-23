import * as React from 'react';
import { Row, Column } from '../../elements/Grid';
import { SearchIssueWithStore } from '../../components/SearchIssue';
import Loading from '../../elements/Loading';
import Blank from '../../elements/Blank';
import IssuesMenu from '../../components/IssuesMenu';
import classVariations from '../../utils/classVariations';
import {
    BillBadge,
    InquiryBadge,
    MeetingPostponementBadge,
    OpinionBadge,
    ParliamentaryResolutionBadge,
    ReportBadge,
    RequestForReportBadge,
    WrittenInquiryBadge,
} from '../../elements/IssueBadge';
import {Congressman as CongressmanType, Assembly as AssemblyType} from '../../../../@types';
import './index.scss';

interface Props {
    issues?: Array<{
        id?: number,
        assembly: AssemblyType,
        name?: string,
        status?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number,
        proponents: CongressmanType[],
    }>;
    assembly?: number;
    done?: boolean;
    loadMore?: (...args: any[]) => any;
    loading?: boolean;
    filter?: {
        type?: string,
        category?: string,
    };
}

export default class AssemblyIssues extends React.Component<Props, {}> {
    public static defaultProps = {
        issues: [],
        assembly: undefined,
        filter: {
            type: undefined,
            category: undefined,
        },
        done: true,
        loadMore: () => {},
        loading: false,
    };

    public render() {
        return (
            <Row>
                <Column sm={12} md={8}>
                    {this.props.issues.length !== 0 && (
                        <ul className="assembly-issues-panel__list">
                            {this.props.issues.map(issue => ({
                                a: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['md'])}
                                        key={`issue-${issue.id}`}>
                                        <ParliamentaryResolutionBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                                b: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                        key={`issue-${issue.id}`}>
                                        <RequestForReportBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                                f: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                        key={`issue-${issue.id}`} >
                                        <MeetingPostponementBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                                l: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['lg'])}
                                        key={`issue-${issue.id}`} >
                                        <BillBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                                m: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                        key={`issue-${issue.id}`} >
                                        <InquiryBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                                n: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                        key={`issue-${issue.id}`} >
                                        <OpinionBadge issue={issue} />
                                    </li>
                                ),
                                q: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                        key={`issue-${issue.id}`} >
                                        <WrittenInquiryBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                                s: (
                                    <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                        key={`issue-${issue.id}`} >
                                        <ReportBadge
                                            issue={issue}
                                            congressman={issue.proponents.reduce(
                                                (a, b) => b,
                                                undefined,
                                            )}
                                        />
                                    </li>
                                ),
                            }[issue.type]),
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
                    <nav style={{ position: 'sticky', top: 0 }}>
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
