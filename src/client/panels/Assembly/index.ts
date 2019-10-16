import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import Assembly from './Assembly';

const queryAssemblySummary = gql`
    query assemblySummary ($assembly: Int!) {
        AssemblySummary(assembly: $assembly) {
            parties {
                party {id name color}
                time
            }
            averageAge
        }
    }  
`;

const queryAssemblyIssuesSummary = gql`
    query assemblyIssuesSummary ($assembly: Int!) {
        AssemblyIssuesSummary (assembly: $assembly) {
            bills {count status}
            governmentBills {count status}
            proposals {count status}
            types {count type {type typeName category typeSubName}}
            categories {count category {id title}}
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
        Inflation (assembly: $assembly) {
            id
            date
            value
        }
    }
`;

export default compose(
    graphql(queryAssemblyIssuesSummary, {
        props: ({data: {error, loading, AssemblyIssuesSummary}}: any) => {
            return {
                issuesSummary: {
                    error,
                    loading,
                    bills: loading === false ? AssemblyIssuesSummary.bills : [],
                    governmentBills: loading === false ? AssemblyIssuesSummary.governmentBills : [],
                    proposals: loading === false ? AssemblyIssuesSummary.proposals : [],
                    types: loading === false ? AssemblyIssuesSummary.types : [],
                    categories: loading === false ? AssemblyIssuesSummary.categories : [],
                }
            }
        },
        options: ({assembly}: any) => ({
            variables: {
                assembly: Number(assembly),
            },
        }),
    }),
    graphql(queryAssemblyIssuesSpeechDuration, {
        props: ({data: {error, loading, AssemblyIssuesSpeechDuration}}: any) => {
            return {
                issues: {
                    error,
                    loading,
                    issues: loading === false ? AssemblyIssuesSpeechDuration : [],
                }
            }
        },
        options: ({assembly}: any) => ({
            variables: {
                assembly: Number(assembly),
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
        options: ({assembly}: any) => ({
            variables: {
                assembly,
            },
        }),
    }),
    graphql(queryAssemblySummary, {
        props: ({data: {error, loading, AssemblySummary}}: any) => {
            return {
                assemblySummary: {
                    error,
                    loading,
                    averageAge: loading === false ? AssemblySummary.averageAge : 0,
                    parties: loading === false ? AssemblySummary.parties : [],
                }
            }
        },
        options: ({assembly}: any) => ({
            variables: {
                assembly: Number(assembly),
            },
        }),
    }),
    graphql(queryAssembly, {
        props: ({data: {loading, error, Assembly, Inflation}}: any) => ({
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
                inflation: loading === false ? Inflation : [],
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
)(Assembly);
