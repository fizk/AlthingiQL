import * as React from 'react';
import {Fragment} from 'react';
import { Row, Column } from '../../elements/Grid';
import SearchIssue from '../../components/SearchIssue';
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
import {Issue as IssueType} from '../../../../@types';
import Section from '../../elements/Section';
import './index.scss';
import {Link} from 'react-router-dom';

interface Props {
    assembly: number;
    issues: IssueType[];
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
            <Section>
                <div className="assembly-issues-panel">
                    <article className="assembly-issues-panel__content">
                        {this.props.issues.length !== 0 && (
                            <ul className="assembly-issues-panel__list">
                                {this.props.issues.map(issue => (
                                    <Fragment key={`${issue.assembly.id}${issue.id}${issue.category}`}>
                                        {issue.type === 'a' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['md'])}
                                                key={`issue-${issue.id}`}>
                                                <ParliamentaryResolutionBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 'b' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                                key={`issue-${issue.id}`}>
                                                <RequestForReportBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 'f' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                                key={`issue-${issue.id}`} >
                                                <MeetingPostponementBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 'l' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['lg'])}
                                                key={`issue-${issue.id}`} >
                                                <BillBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 'm' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                                key={`issue-${issue.id}`} >
                                                <InquiryBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 'n' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                                key={`issue-${issue.id}`} >
                                                <OpinionBadge issue={issue} />
                                            </li>
                                        )}
                                        {issue.type === 'q' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                                key={`issue-${issue.id}`} >
                                                <WrittenInquiryBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 's' && (
                                            <li className={classVariations('assembly-issues-panel__list-item', ['sm'])}
                                                key={`issue-${issue.id}`} >
                                                <ReportBadge
                                                    issue={issue}
                                                    congressman={issue.proponents.reduce(
                                                        (a: any, b) => b,
                                                        undefined,
                                                    )}
                                                />
                                            </li>
                                        )}
                                        {issue.type === 'v' && (
                                            <li>
                                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.category}/${issue.id}`} >
                                                {issue.name} | {issue.type}
                                                </Link>
                                            </li>
                                        )}
                                        {issue.type === 'ff' && (
                                            <li>
                                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.category}/${issue.id}`} >
                                                    {issue.name} | {issue.type}
                                                </Link>
                                            </li>
                                        )}
                                        {issue.type === 'ft' && (
                                            <li>
                                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.category}/${issue.id}`} >
                                                    {issue.name} | {issue.type}
                                                </Link>
                                            </li>
                                        )}

                                        {issue.type === 'um' && (
                                            <li>
                                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.category}/${issue.id}`} >
                                                    {issue.name} | {issue.type}
                                                </Link>
                                            </li>
                                        )}
                                        {issue.type === 'ud' && (
                                            <li>
                                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.category}/${issue.id}`} >
                                                    {issue.name} | {issue.type}
                                                </Link>
                                            </li>
                                        )}
                                        {issue.type === 'uu' && (
                                            <li>
                                                <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.category}/${issue.id}`} >
                                                    {issue.name} | {issue.type}
                                                </Link>
                                            </li>
                                        )}
                                    </Fragment>
                                ))}

                            </ul>
                        )}
                        {this.props.loading === false &&
                            this.props.issues.length === 0 && <Blank />}
                        {this.props.loading === true && <Loading />}
                        {!this.props.done && (
                            <button onClick={this.props.loadMore}>load more</button>
                        )}
                    </article>
                    <aside className="assembly-issues-panel__aside">
                        <nav style={{ position: 'sticky', top: 16 }}>
                            <SearchIssue assembly={this.props.assembly} />
                            <IssuesMenu
                                assembly={this.props.assembly}
                                filter={this.props.filter}
                            />
                        </nav>
                    </aside>
                </div>
            </Section>
        );
    }
}
