import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Grid, Column, Row} from '../../elements/Grid';
import {Congressman} from '../../elements/Congressman';
import {H2} from "../../elements/Headline";
import {HorizontalChart} from "../../elements/HorizontalChart/index";
import {SessionChart} from "../../elements/SessionChart/index";
import {VoteResultPieChart} from "../../elements/VoteResultPieChart/index";

export default class AssemblyCongressman extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        congressman: PropTypes.number,
        person: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
        }),
        sessions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            type: PropTypes.string,
            constituency: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
            }),
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            })
        })),
        votes: PropTypes.arrayOf(PropTypes.shape({
            count: PropTypes.number,
            vote: PropTypes.string,
        })),
        promotedIssues: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            status: PropTypes.string,
            goal: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
            question: PropTypes.string,
        })),
        issueCount: PropTypes.arrayOf(PropTypes.shape({
            order: PropTypes.number,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
            documentType: PropTypes.string,
            count: PropTypes.number,
        })),
        categorySpeechTimes: PropTypes.arrayOf(PropTypes.shape({
            category: PropTypes.shape({
                id: PropTypes.number,
            }),
            superCategory: PropTypes.shape({
                id: PropTypes.number,
            }),
            title: PropTypes.string,
            time: PropTypes.number,
        })),
    };

    static defaultProps = {
        assembly: undefined,
        congressman: undefined,
        person: {
            id: undefined,
            name: undefined,
        },
        sessions: [],
        votes: [],
        promotedIssues: [],
        issueCount: [],
        categorySpeechTimes: []
    };

    chartPersentage(data) {
        const yesNo = data.filter(item => item.vote === 'já' || item.vote === 'nei');
        const impartial = data.filter(item => item.vote === 'greiðir ekki atkvæði');
        const notPresent = data.filter(item => item.vote === 'fjarverandi' || item.vote === 'f: óþekktur kóði' || item.vote === 'boðaði fjarvist');

        return [
            {vote: 'tók afstöðu', value: yesNo.reduce((a, b) => a + b.count, 0)},
            {vote: 'greiðir ekki atkvæði', value: impartial.reduce((a, b) => a + b.count, 0)},
            {vote: 'fjarverandi', value: notPresent.reduce((a, b) => a + b.count, 0)},
        ];
    }

    render() {
        return (
            <div>
                <Row>
                    <Column>
                        <Congressman congressman={this.props.person} />
                    </Column>
                </Row>

                <Row>
                    <Column>
                        {this.props.sessions.map(session => session.constituency.name).reduce((total, item) => {
                            if (total.indexOf(item) < 0) {total.push(item)}
                            return total;
                        }, []).join(', ')}
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <SessionChart source={this.props.sessions} />
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <VoteResultPieChart source={this.props.votes.map(vote => ({value: vote.count, vote: vote.vote}))} />
                    </Column>
                    <Column>
                        <VoteResultPieChart source={this.chartPersentage(this.props.votes)} formatValue={(value, total) => ` ${((value/total)*100).toFixed(2)}%`} />
                    </Column>
                </Row>

                <Row>
                    <Column>
                        <H2>Fyrsti flutingsmadur</H2>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>name</td>
                                    <td>sub name</td>
                                    <td>status</td>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.promotedIssues.map(issue => (
                                <tr key={`issue-${issue.id}`}>
                                    <td>
                                        <Link to={`/loggjafathing/${issue.assembly.id}/thingmal/${issue.id}`}>
                                            {issue.name}
                                        </Link>
                                    </td>
                                    <td>
                                        {issue.typeName}
                                    </td>
                                    <td>
                                        {issue.typeSubName}
                                    </td>
                                    <td>
                                        {issue.status}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <H2>Med-flutingsmadur</H2>
                        <table>
                            <thead>
                                <tr>
                                    <td>order</td>
                                    <td>type</td>
                                    <td>typeName</td>
                                    <td>typeSubName</td>
                                    <td>documentType</td>
                                    <td>count</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.issueCount.map(issue => (
                                    <tr key={`issue-${issue.order}-${issue.type}`}>
                                        <td>{issue.order}</td>
                                        <td>{issue.type}</td>
                                        <td>{issue.typeName}</td>
                                        <td>{issue.typeSubName}</td>
                                        <td>{issue.documentType}</td>
                                        <td>{issue.count}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Column>
                </Row>
                <Row>
                    <Column>
                        <H2>Rædutimi a málaflokka</H2>
                        <HorizontalChart source={this.props.categorySpeechTimes.map(item => ({label: item.title, value: item.time}))}/>
                    </Column>
                </Row>
            </div>
        )
    }
}
