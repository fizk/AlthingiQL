import {graphql, compose, gql} from 'react-apollo';
import Assembly from './Assembly';

const assemblyQuery = gql`
    query assembly ($assembly: Int!) {
        Assembly(assembly: $assembly) {
            id
            period {
                from
                to
            }
        }
#        AssemblySummary(assembly: $assembly) {
#            parties {
#                party {
#                    id
#                    name
#                    color
#                }
#                time
#            }
#            bills {
#                count
#                status
#            }
#            governmentBills {
#                count
#                status
#            }
#            types {
#                count
#                type
#                typeName
#                typeSubName
#            }
#            votes {
#                count
#                date
#            }
#            speeches {
#                count
#                date
#            }
#            election {
#                id
#                date
#                title
#                description
#            }
#            electionResults {
#                party {
#                    id
#                    name
#                    color
#                }
#                results {
#                    seats
#                    result
#                }
#            }
#        }
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
        AssemblyIssuesSpeechDuration (assembly: $assembly size: 6 order: "desc") {
            issue {
                id
                assembly {id}
                category
                name
                type
                subName
                type
                typeName
                typeSubName
                status
                goal
                proponentsCount
                proponents (count: 1) {
                    id
                    name
                    avatar {templateSrc}
                    party {
                        id
                        name
                        color
                    }
                }
            }
            value
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

export default compose<any>( //@todo `any`
    graphql(assemblyQuery, {
        props: (all: {data?: {
                loading: boolean,
                Assembly: any,
                AssemblySummary: any,
                CongressmanSpeekMost: any,
                CongressmanSpeekLeast: any,
                CongressmenAssemblyQuestions: any,
                CongressmenAssemblyResolutions: any,
                CongressmenAssemblyBills: any,
                AssemblyIssuesSpeechDuration: any,
            }}) => ({
            assembly: all.data.loading === false ? all.data.Assembly : undefined,
            summary: all.data.loading === false ? all.data.AssemblySummary : undefined,
            speakMost: all.data.loading === false ? all.data.CongressmanSpeekMost : undefined,
            speakLeast: all.data.loading === false ? all.data.CongressmanSpeekLeast : undefined,
            questioner: all.data.loading === false ? all.data.CongressmenAssemblyQuestions : undefined,
            resolutionaries: all.data.loading === false ? all.data.CongressmenAssemblyResolutions : undefined,
            bills: all.data.loading === false ? all.data.CongressmenAssemblyBills : undefined,
            issues: all.data.loading === false ? all.data.AssemblyIssuesSpeechDuration : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(Assembly);
