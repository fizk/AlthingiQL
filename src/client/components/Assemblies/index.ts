import {graphql, compose, gql} from 'react-apollo';
import Assemblies from './Assemblies';
import {AssemblySummary} from '../../../../@types';

// type AssemblySummary = {
//     id: number,
//     period: {
//         from?: string,
//         to?: string
//     },
//     division: {
//         majority?: {
//             id?: number,
//             name?: string,
//             color?: string
//         }[],
//         minority: {
//             id?: number,
//             name?: string,
//             color?: string
//         }[]
//     }
// }

const assembliesQuery = gql`
    query {
        Assemblies {
            id
            period {from to}
            division {
                majority {id name color}
                minority {id name color}
            }
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(assembliesQuery, {
        props: (all: {data?: {loading: boolean, Assemblies: AssemblySummary}}) => ({
            assemblies: all.data.loading === false ? all.data.Assemblies : undefined,
            loading: all.data.loading,
        }),
    }),
)(Assemblies);
