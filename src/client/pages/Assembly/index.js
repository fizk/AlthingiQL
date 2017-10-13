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
            categories {
                id
                superCategoryId
                title
                title
                count
            }
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
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: all => ({
            assembly: all.data.loading === false ? all.data.Assembly : undefined,
            summary: all.data.loading === false ? all.data.AssemblySummary : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}) => ({
            variables: {
                assembly: assembly
            }
        })
    })
)(Assembly)
