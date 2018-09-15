import {graphql, compose, gql} from 'react-apollo';
import Assemblies from './Assemblies';
import {AssemblyStatistics} from '../../../../@types';

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
        props: (all: {data?: {loading: boolean, Assemblies: AssemblyStatistics}}) => ({
            assemblies: all.data.loading === false ? all.data.Assemblies : undefined,
            loading: all.data.loading,
        }),
    }),
)(Assemblies);
