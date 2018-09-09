import {graphql, compose, gql} from 'react-apollo';
import AssemblyCongressmen from './AssemblyCongressmen';

const assemblyCongressmanQuery = gql`
    query ($assembly: Int!) {
        Congressmen(assembly: $assembly type: "thingmadur") {
            id
            name
            avatar {templateSrc}
            assembly {
                id
            }
            party {
                id
                name
                color
            }
        }
        Substitutes: Congressmen(assembly: $assembly type: "varamadur") {
            id
            name
            avatar {templateSrc}
            assembly {
                id
            }
            party {
                id
                name
                color
            }
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(assemblyCongressmanQuery, {
        props: (all: {data?: {loading: boolean, Congressmen: any, Substitutes: any}}) => ({
            congressmen: all.data.loading === false ? all.data.Congressmen : undefined,
            substitutes: all.data.loading === false ? all.data.Substitutes : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyCongressmen);
