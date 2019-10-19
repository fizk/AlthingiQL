import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import AssemblyCongressman from './AssemblyCongressman';

const assembliesQuery = gql`
    query congressmanAssemblySessions ($congressman: Int! $assembly: Int!) {
        Person(id: $congressman) {
            id
            name
            avatar {templateSrc}
        }
        CongressmanAssemblySessions(congressman: $congressman assembly: $assembly) {
            id
            type
            period {from to}
            constituency {id name}
        }
        CongressmanAssemblyVotes (congressman: $congressman assembly: $assembly) {
            count
            vote
        }
        CongressmanAssemblyPromote(congressman: $congressman, assembly: $assembly) {
            ... on IssueInterface {
                ...issueInterface
            }
            ... on IssueA {
                ... issueA
            }
        }
        CongressmanIssueTypePromotion(assembly: $assembly congressman: $congressman) {
            order
            type
            typeName
            typeSubName
            documentType
            count
        }
        CongressmanAssemblyCategorySpeechTime (assembly: $assembly congressman: $congressman) {
            superCategory {
                id
                title
            }
            time
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
    graphql(assembliesQuery, {
        props: ({data: {
            loading,
            Person,
            CongressmanAssemblyPromote,
            CongressmanIssueTypePromotion,
            CongressmanAssemblySessions,
            CongressmanAssemblyVotes,
            CongressmanAssemblyCategorySpeechTime
        }}: any) => ({
            person: loading === false ? Person : undefined,
            promotedIssues: loading === false ? CongressmanAssemblyPromote : undefined,
            issueCount: loading === false ? CongressmanIssueTypePromotion : undefined,
            sessions: loading === false ? CongressmanAssemblySessions : undefined,
            votes: loading === false ? CongressmanAssemblyVotes : undefined,
            categorySpeechTimes: loading === false
                ? CongressmanAssemblyCategorySpeechTime
                : undefined,
            loading: loading,
        }),
        options: ({assembly, congressman}: any) => ({
            variables: {
                assembly,
                congressman,
            },
        }),
    }),
)(AssemblyCongressman);
