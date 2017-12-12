import React from 'react';
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
            assembly {id}
            party {id name color}
        }
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: all => ({
            assembly: all.data.loading === false ? all.data.Assembly : undefined,
            summary: all.data.loading === false ? all.data.AssemblySummary : undefined,
            speakMost: all.data.loading === false ? all.data.CongressmanSpeekMost : undefined,
            speakLeast: all.data.loading === false ? all.data.CongressmanSpeekLeast : undefined,
            questioner: all.data.loading === false ? all.data.CongressmenAssemblyQuestions : undefined,
            resolutionaries: all.data.loading === false ? all.data.CongressmenAssemblyResolutions : undefined,
            bills: all.data.loading === false ? all.data.CongressmenAssemblyBills : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}) => ({
            variables: {
                assembly: assembly
            }
        })
    })
)(Assembly)
