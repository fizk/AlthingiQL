import React from 'react';
import PropTypes from 'prop-types';

export default class Assembly extends React.Component {
    static propTypes = {
        assembly: PropTypes.shape({
            id: PropTypes.number,
            period: PropTypes.shape({
                from: PropTypes.string,
                to: PropTypes.string,
            })
        }),
        summary: PropTypes.shape({
            categories: PropTypes.arrayOf(PropTypes.shape({
                categoryId: PropTypes.number,
                superCategoryId: PropTypes.number,
                title: PropTypes.string,
                count: PropTypes.number,
            })),
            parties: PropTypes.arrayOf(PropTypes.shape({
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
                time: PropTypes.number,
            })),
            bills: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                status: PropTypes.string,
            })),
            governmentBills: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                status: PropTypes.string,
            })),
            types: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                type: PropTypes.string,
                typeName: PropTypes.string,
                typeSubName: PropTypes.string,
            })),
            votes: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                date: PropTypes.string,
            })),
            speeches: PropTypes.arrayOf(PropTypes.shape({
                count: PropTypes.number,
                date: PropTypes.string,
            })),
            election: PropTypes.shape({
                id: PropTypes.number,
                date: PropTypes.string,
                title: PropTypes.string,
                description: PropTypes.string,
            }),
            electionResults: PropTypes.arrayOf(PropTypes.shape({
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                }),
                results: PropTypes.shape({
                    seats: PropTypes.number,
                    result: PropTypes.number,
                }),
            })),
        }),
    };

    static defaultProps = {
        assembly: {
            id: undefined,
            period: {
                from: undefined,
                to: undefined,
            }
        },
        summary: {
            categories: [],
            parties: [],
            bills: [],
            governmentBills: [],
            types: [],
            votes: [],
            speeches: [],
            election: {
                id: undefined,
                date: undefined,
                title: undefined,
                description: undefined,
            },
            electionResults: []
        },
    };

    render() {
        return (
            <div>
                <h1>{this.props.assembly.id}</h1>
                <time>{this.props.assembly.period.from}</time> -
                <time>{this.props.assembly.period.to}</time>

                <div>{this.props.summary.election && this.props.summary.election.title}</div>
                <div>{this.props.summary.election && this.props.summary.election.date}</div>
                <div>{this.props.summary.election && this.props.summary.election.description}</div>
                <table>
                    <caption>
                        <h2>Election results</h2>
                    </caption>
                    <thead>
                    <tr>
                        <td>party</td>
                        <td>result</td>
                        <td>seats</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.summary.electionResults.map((result, i) => (
                        <tr key={`party-${i}`}>
                            <td>{result.party.name}</td>
                            <td>{result.results.result}</td>
                            <td>{result.results.seats}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Party speech time</h2>
                    </caption>
                    <thead>
                    <tr>
                        <td>party</td>
                        <td>time</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.summary.parties.map((obj, i) => (
                        <tr key={`party-${obj.party.id}`}>
                            <td>{obj.party.name}</td>
                            <td>{obj.time}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Categories</h2>
                    </caption>
                    <thead>
                    <tr>
                        <td>name</td>
                        <td>count</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.summary.categories.map((category, i) => (
                        <tr key={`category-${category.id}`}>
                            <td>{category.title}</td>
                            <td>{category.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Bills</h2>
                    </caption>
                    <thead>
                        <tr>
                            <td>count</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.summary.bills.map(bill => (
                            <tr key={`bill-${bill.status}`}>
                                <td>{bill.count}</td>
                                <td>{bill.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Government Bills</h2>
                    </caption>
                    <thead>
                        <tr>
                            <td>count</td>
                            <td>status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.summary.governmentBills.map(bill => (
                            <tr key={`bill-${bill.status}`}>
                                <td>{bill.count}</td>
                                <td>{bill.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Issues by type</h2>
                    </caption>
                    <thead>
                        <tr>
                            <td>type</td>
                            <td>name</td>
                            <td>sub name</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.summary.types.map(type => (
                            <tr key={`type-${type.type}`}>
                                <td>{type.type}</td>
                                <td>{type.typeName}</td>
                                <td>{type.typeSubName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Votes</h2>
                    </caption>
                    <thead>
                    <tr>
                        <td>date</td>
                        <td>count</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.summary.votes.map((vote, i) => (
                            <tr key={`vote-${vote.date}-${i}`}>
                                <td>{vote.date}</td>
                                <td>{vote.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <table>
                    <caption>
                        <h2>Speeches</h2>
                    </caption>
                    <thead>
                    <tr>
                        <td>date</td>
                        <td>count</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.summary.speeches.map((speech, i) => (
                            <tr key={`speech-${speech.date}-${i}`}>
                                <td>{speech.date}</td>
                                <td>{speech.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
