import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyCongressmanPanel from './AssemblyCongressmanPanel';

const queryAssemblyCongressmanSession = gql`
    query CongressmanAssemblySessions ($congressman: Int! $assembly: Int!) {
        CongressmanAssemblySessions(congressman: $congressman assembly: $assembly) {
            id
            type
            period {from to}
            constituency {id name}
        }
    }
`;

const queryAssemblyCongressmanVotes = gql`
    query CongressmanAssemblyVotes ($congressman: Int! $assembly: Int!) {
        CongressmanAssemblyVotes (congressman: $congressman assembly: $assembly) {
            count
            vote
        }
    }
`;

const queryAssemblyCongressmanIssues = gql`
    query CongressmanAssemblyPromote ($congressman: Int! $assembly: Int!) {
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

const queryAssemblyCongressman = gql`
    query congressmanAssemblySessions ($congressman: Int!) {
        Person(id: $congressman) {
            id
            name
            avatar {templateSrc}
        }
    }
`;

export default compose(
    graphql(queryAssemblyCongressmanSession, {
        props: ({data: {error, loading, CongressmanAssemblySessions}}: any) => {
            return {sessions: {
                error,
                loading,
                sessions: loading === false ? CongressmanAssemblySessions: []
            }}
        }
    }),
    graphql(queryAssemblyCongressmanVotes, {
        props: ({data: {error, loading, CongressmanAssemblyVotes}}: any) => {
            return {votes: {
                error,
                loading,
                votes: loading === false ? CongressmanAssemblyVotes : []
            }}
        }
    }),
    graphql(queryAssemblyCongressmanIssues, {
        props: ({data: {error, loading, CongressmanAssemblyPromote, CongressmanIssueTypePromotion, CongressmanAssemblyCategorySpeechTime}}: any) => {
            return {issues: {
                error,
                loading,
                promotions: loading === false ? CongressmanAssemblyPromote : [],
                types: loading === false ? CongressmanIssueTypePromotion : [],
                speeches: loading === false ? CongressmanAssemblyCategorySpeechTime : [],

            }}
        }
    }),
    graphql(queryAssemblyCongressman, {
        props: ({data: {loading, error, Person}}: any) => {
            return {person: {
                loading,
                error,
                person: loading === false ? Person : undefined,
            }}
        },
        options: ({assembly, congressman}: any) => ({
            variables: {
                assembly,
                congressman,
            },
        }),
    }),
)(AssemblyCongressmanPanel);
