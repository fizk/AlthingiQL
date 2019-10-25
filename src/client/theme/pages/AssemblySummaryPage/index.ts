import AssemblySummaryPage from './AssemblySummaryPage';
import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';

const queryAssemblies = gql`
    query queryAssemblies {
        Assemblies {
            id
            period {from to}
        }
    }
`;

const queryAssemblyIssuesSummary = gql`
    query queryAssemblyIssuesSummary ($assembly: Int!) {
        AssemblyIssuesSummary (assembly: $assembly) {
            bills {count status}
            governmentBills {count status}
            proposals {count status}
            types {count type {type typeName category typeSubName}}
            categories {count category {id title}}
        }
    }
`;

const queryAssemblyInflation = gql`
    query queryAssemblyInflation ($assembly: Int!) {
        Inflation (assembly: $assembly) {
            id
            date
            value
        }
    }
`;

const queryCongressmenPerformance = gql`
    query congressmenAssemblyBills ($assembly: Int!) {
        CongressmenAssemblyBills (assembly: $assembly order: "desc" size: 5) {
            ...congressmanValue
        }
        CongressmenAssemblyQuestions (assembly: $assembly order: "desc" size: 5) {
            ...congressmanValue
        }
        CongressmenAssemblyResolutions (assembly: $assembly order: "desc" size: 5) {
            ...congressmanValue
        }
        CongressmenAssemblySpeechTime (assembly: $assembly order: "desc" size: 5) {
            ...congressmanValue
        }
    }

    fragment congressmanValue on CongressmanValue {
        value
        congressman {
            id
            name
            avatar {templateSrc}
            party {id name color}
            constituency {id name abbr_short}
        }
    }
`;

const queryAssemblyPartySpeechTimes = gql`
    query queryAssemblyPartySpeechTimes ($assembly: Int!) {
        AssemblySummary(assembly: $assembly) {
            parties {
                party {id name color}
                time
            }
        }
    }
`;

const queryAssemblyIssuesSpeechDuration = gql`
    query AssemblyIssuesSpeechDuration ($assembly: Int!) {
        AssemblyIssuesSpeechDuration (assembly: $assembly order: "desc" size: 5){
            issue {
                ... on IssueInterface {
                    ...issueInterface
                }
                ... on IssueA {
                    ... issueA
                }
            }
            value
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

export default compose(
    graphql(queryAssemblies, {
        props: ({data: {error, loading, Assemblies}}: any) => {
            return {assemblies: {
                error,
                loading,
                assemblies: loading === false ? Assemblies : []
            }}
        }
    }),
    graphql(queryAssemblyIssuesSummary, {
        props: ({data: {error, loading, AssemblyIssuesSummary}}: any) => {
            return {issueStatistics: {
                error,
                loading,
                bills: loading === false ? AssemblyIssuesSummary.bills : [],
                governmentBills: loading === false ? AssemblyIssuesSummary.governmentBills : [],
                proposals: loading === false ? AssemblyIssuesSummary.proposals : [],
                types: loading === false ? AssemblyIssuesSummary.types : [],
                categories: loading === false ? AssemblyIssuesSummary.categories : [],
            }}
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly
            },
        }),
    }),
    graphql(queryAssemblyInflation, {
        props: ({data: {error, loading, Inflation}}: any) => {
            return {inflation: {
                inflation: loading === false ? Inflation : [],
                loading,
                error,
            }}
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly
            },
        }),
    }),
    graphql(queryCongressmenPerformance, {
        props: ({data: {error, loading, CongressmenAssemblyBills, CongressmenAssemblyQuestions, CongressmenAssemblyResolutions, CongressmenAssemblySpeechTime}}: any) => {
            return {
                congressmenPerformance: {
                    error,
                    loading,
                    bills: loading === false ? CongressmenAssemblyBills : [],
                    questions: loading === false ? CongressmenAssemblyQuestions : [],
                    resolutions: loading === false ? CongressmenAssemblyResolutions : [],
                    speeches: loading === false ? CongressmenAssemblySpeechTime : [],
                }
            }
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly
            },
        }),
    }),
    graphql(queryAssemblyPartySpeechTimes, {
        props: ({data: {error, loading, AssemblySummary}}: any) => {
            return {
                speechTimes: {
                    error,
                    loading,
                    parties: loading === false ? AssemblySummary.parties : []
                }
            }
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly
            },
        }),
    }),
    graphql(queryAssemblyIssuesSpeechDuration, {
        props: ({data: {error, loading, AssemblyIssuesSpeechDuration}}: any) => {
            return {
                issueTimes: {
                    error,
                    loading,
                    issues: loading === false ? AssemblyIssuesSpeechDuration : []
                }
            }
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly
            },
        }),
    }),
)(AssemblySummaryPage)

