import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Assembly from './Assembly';

const queryAssemblySummary = gql`
    query queryAssemblySummary ($assembly: Int!) {
        AssemblySummary(assembly: $assembly) {
            parties {
                party {
                    id
                    name
                    color
                }
                time
            }
            bills {
                count
                status
            }
            governmentBills {
                count
                status
            }
            types {
                count
                category
                type
                typeName
                typeSubName
            }
            votes {
                count
                date
            }
            speeches {
                count
                date
            }
            averageAge
            election {
                id
                date
                title
                description
            }
            electionResults {
                party {
                    id
                    name
                    color
                }
                results {
                    seats
                    result
                }
            }
        }
    }
`;

const queryIssueDuration = gql`
    query AssemblyIssuesSpeechDuration ($assembly: Int!) {
        AssemblyIssuesSpeechDuration (assembly: $assembly size: 6 order: "desc") {
            issue {
                __typename
                ... on IssueInterface {
                    id
                    category
                    name
                    type
                    typeName
                    assembly {id}
                }
                ... on IssueA {...issueA}
            }
            value
        }
    }
    fragment issueA on IssueA {
        proponentsCount
        proponents(count: 1) {
            id
            name
            avatar {templateSrc}
            party {id name color}
        }
    }
`;

const queryCongressmanPerformance = gql`
    query queryCongressmanPerformance ($assembly: Int!) {
        CongressmanSpeekLeast: CongressmenAssemblySpeechTime (assembly: $assembly order: "asc" size: 5) {
            ... congressmanWithValue
        }
        CongressmanSpeekMost: CongressmenAssemblySpeechTime (assembly: $assembly order: "desc" size: 5) {
            ... congressmanWithValue
        }
        CongressmenAssemblyQuestions (assembly: $assembly order: "desc" size: 5) {
            ... congressmanWithValue
        }
        CongressmenAssemblyResolutions (assembly: $assembly order: "desc" size: 5) {
            ... congressmanWithValue
        }
        CongressmenAssemblyBills (assembly: $assembly order: "desc" size: 5) {
            ... congressmanWithValue
        }
    }
    fragment congressmanWithValue on CongressmanValue  {
        value
        congressman {
            id
            name
            avatar {templateSrc}
            assembly {id}
            party {id name color}
        }
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
    graphql(queryCongressmanPerformance, {
        props: (all: any) => ({
            speakMost: all.data.loading === false ? all.data.CongressmanSpeekMost : undefined,
            speakLeast: all.data.loading === false ? all.data.CongressmanSpeekLeast : undefined,
            questioner: all.data.loading === false ? all.data.CongressmenAssemblyQuestions : undefined,
            resolutionaries: all.data.loading === false ? all.data.CongressmenAssemblyResolutions : undefined,
        }),
    }),
    graphql(queryIssueDuration, {
        props: (all: any) => ({
            issues: all.data.loading === false ? all.data.AssemblyIssuesSpeechDuration : undefined,
        }),
    }),
    graphql(queryAssemblySummary, {
        props: (all: any) => ({
            summary: all.data.loading === false ? all.data.AssemblySummary : undefined,
        }),
    }),
    graphql(queryAssembly, {
        props: (all: any) => ({
            assembly: all.data.loading === false ? all.data.Assembly : undefined,
            inflation: all.data.loading === false ? all.data.Inflation : undefined,
            bills: all.data.loading === false ? all.data.CongressmenAssemblyBills : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(Assembly);
