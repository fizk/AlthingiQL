import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import AssemblyCongressmen from './AssemblyCongressmen';

const assemblyCongressmanQuery = gql`
    query ($assembly: Int!) {
        Congressmen(assembly: $assembly type: "thingmadur") {
            id
            name
            party {
                id
                name
                color
            }
        }
        Substitutes: Congressmen(assembly: $assembly type: "varamadur") {
            id
            name
            party {
                id
                name
                color
            }
        }
    }
`;

export default compose(
    graphql(assemblyCongressmanQuery, {
        props: all => ({
            congressmen: all.data.loading === false ? all.data.Congressmen : undefined,
            substitutes: all.data.loading === false ? all.data.Substitutes : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}) => ({
            variables: {
                assembly: assembly
            }
        })
    })
)(AssemblyCongressmen)
