import React from 'react';
import PropTypes from 'prop-types';

export default class AssemblyIssue extends React.Component {
    static propTypes = {
        issue: PropTypes.shape({
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
            majorChanges: PropTypes.string,
            changesInLaw: PropTypes.string,
            costsAndRevenues: PropTypes.string,
            deliveries: PropTypes.string,
            additionalInformation: PropTypes.string,
            date: PropTypes.string,
            proponents: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                party: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    color: PropTypes.string,
                })
            })),
            speakers: PropTypes.arrayOf(PropTypes.shape({
                congressman: PropTypes.shape({
                    id: PropTypes.number,
                    name: PropTypes.string,
                    party: PropTypes.shape({
                        id: PropTypes.number,
                        name: PropTypes.string,
                        color: PropTypes.string,
                    })
                }),
                duration: PropTypes.number,
            })),

        }),
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            name: undefined,
            status: undefined,
            goal: undefined,
            subName: undefined,
            type: undefined,
            typeName: undefined,
            typeSubName: undefined,
            question: undefined,
            majorChanges: undefined,
            changesInLaw: undefined,
            costsAndRevenues: undefined,
            deliveries: undefined,
            additionalInformation: undefined,
            date: undefined,
            proponents: [],
            speakers: [],
        },
    };

    render() {
        return (
            <div>
                <h2>{this.props.issue.name} - {this.props.issue.date}</h2>
                <h3>{this.props.issue.subName}</h3>
                <h4>{this.props.issue.typeName}</h4>
                <p>{this.props.issue.goal}</p>
                <p>{this.props.issue.majorChanges}</p>
                <p>{this.props.issue.changesInLaw}</p>
                <p>{this.props.issue.costsAndRevenues}</p>
                <p>{this.props.issue.deliveries}</p>
                <p>{this.props.issue.additionalInformation}</p>

                <h4>Proponents</h4>
                <ul>
                    {this.props.issue.proponents.map(congressman => (
                        <li key={`congressman-${congressman.id}`}>
                            {congressman.name} - {congressman.party && congressman.party.name}
                        </li>
                    ))}
                </ul>
                <h4>Speakers</h4>
                <ul>
                    {this.props.issue.speakers.map(item => (
                        <li key={`congressman-${item.congressman.id}`}>
                            {item.congressman.name} - {item.duration} - {item.congressman.party && item.congressman.party.name}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
