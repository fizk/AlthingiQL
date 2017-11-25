import React from 'react';
import PropTypes from 'prop-types';
import {Row, Column} from '../../elements/Grid';
import {Congressman} from '../../elements/Congressman';
import {Paper} from "../../elements/Paper";
import {SearchIssueWithStore} from '../../components/SearchIssue';
import {Loading} from "../../elements/Loading/index";
import {Blank} from "../../elements/Blank/index";
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

export default class AssemblyIssues extends React.Component {
    static propTypes = {
        issues: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            status: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string
                })
            }))
        })),
        assembly: PropTypes.number,
        done: PropTypes.bool,
        loadMore: PropTypes.func,
        loading: PropTypes.bool,
        filter: PropTypes.shape({
            type: PropTypes.string,
            category: PropTypes.string,
        })
    };

    static defaultProps = {
        issues: [],
        assembly: undefined,
        filter: {
            type: undefined,
            category: undefined,
        },
        done: true,
        loadMore: () => {},
        loading: false
    };

    render() {
        console.log(this.props.filter);
        return (
            <Row>
                <Column sm="9">
                    <Paper>
                        {this.props.issues.length !== 0 && (
                            <ul className="assembly-issues-panel__list">
                                {this.props.issues.map(issue => (
                                    <li key={`issue-${issue.id}`} className="assembly-issues-panel__list-item">
                                        {{
                                            'a': (
                                                <ParliamentaryResolutionBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </ParliamentaryResolutionBadge>
                                            ),
                                            'b': (
                                                <RequestForReportBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </RequestForReportBadge>
                                            ),
                                            'f': (
                                                <MeetingPostponementBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </MeetingPostponementBadge>
                                            ),
                                            'l': (
                                                <BillBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </BillBadge>
                                            ),
                                            'm': (
                                                <InquiryBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </InquiryBadge>
                                            ),
                                            'n': (
                                                <OpinionBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </OpinionBadge>
                                            ),
                                            'q': (
                                                <WrittenInquiryBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </WrittenInquiryBadge>
                                            ),
                                            's': (
                                                <ReportBadge issue={issue}>
                                                    <ul>
                                                        {issue.proponents.map((proponent, i) => (
                                                            <Congressman key={`proponent-${proponent.id}-${i}`}
                                                                         congressman={proponent} party={proponent.party} />
                                                        ))}
                                                    </ul>
                                                    {issue.proponentsCount}
                                                </ReportBadge>
                                            ),
                                        }[issue.type]}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {this.props.loading === false && this.props.issues.length === 0 && (
                            <Blank/>
                        )}
                        {this.props.loading === true && (
                            <Loading/>
                        )}
                    </Paper>
                    {!this.props.done && <button onClick={this.props.loadMore}>load more</button>}
                </Column>
                <Column sm="3">
                    <nav style={{position: 'sticky', top: 0}}>
                        <SearchIssueWithStore assembly={this.props.assembly} />
                        <IssuesMenu assembly={this.props.assembly} filter={this.props.filter}/>
                    </nav>
                </Column>
            </Row>
        )
    }
}
