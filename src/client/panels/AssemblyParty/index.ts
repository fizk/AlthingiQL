import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import AssemblyParty from './AssemblyParty';

const partyQuery = gql`
    query party ($party: Int!) {
        Party (id: $party) {
            id
            name
            abbr_short
            abbr_long
            color
        }
    }
`;

const assemblyPartyQuery = gql`
    query AssemblyPartyIssues ($assembly: Int! $party: Int!) {
        AssemblyPartyIssues (assembly: $assembly party: $party) {
            ... on IssueInterface {
                ...issueInterface
            }
            ... on IssueA {
                ... issueA
            }
        }
    }

    fragment issueInterface on IssueInterface {
        id
        name
        type {type category typeName typeSubName}
        speechCount
        speechTime
        assembly {id}
    }

    fragment issueA on IssueA {
        subName
        status
        proponents(count: 1) {
            id
            name
            avatar {templateSrc}
            party {id name color}
            constituency {id name abbr_short}
        }
        proponentsCount
    }
`;

const queryAssembly = gql`
    query assembly ($assembly: Int!) {
        Assembly(assembly: $assembly) {
            id
            division {
                majority {color}
                minority {color}
            }
            cabinet {
                title
                period {from to}
            }
            period {
                from
                to
            }
        }
    }
`;

export default compose(
    graphql(queryAssembly, {
        props: ({data: {loading, error, Assembly}}: any) => ({
            assemblyProperties: {
                assembly: loading === false ? Assembly : {
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
                loading,
                error,
            }
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly: Number(assembly),
            },
        }),
    }),
    graphql(assemblyPartyQuery, {
        props: ({data: {loading, error, AssemblyPartyIssues}}: any) => ({
            issues: loading === false ? AssemblyPartyIssues : undefined,
            loading,
            error,
        }),
        options: ({assembly, party}: any) => {
            return {
            variables: {
                assembly: Number(assembly),
                party: Number(party),
            },
        }},
    }),
    graphql(partyQuery, {
        props: ({data: {loading, error, Party}}: any) => ({
            loading,
            error,
            party: loading === false ? Party : undefined,
        }),
        options: ({party}: any) => ({
            variables: {
                party: Number(party),
            },
        })
    }),
)(AssemblyParty);
