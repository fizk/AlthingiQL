import {graphql, compose, gql} from 'react-apollo';
import Cabinet from './Cabinet';

const cabinetsQuery = gql`
    query CabinetQuery ($cabinet : Int!) {
        Cabinet (cabinet: $cabinet) {
            id
            title
            period {from to}
            assemblies {
                id
                period {from to}
            }
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(cabinetsQuery, {
        props: (all: {data?: {loading: boolean, Cabinet: any}}) => ({ //@todo `any`
            cabinet: all.data.loading === false ? all.data.Cabinet : undefined,
            loading: all.data.loading,
        }),
        options: ({id}: {id: number}) => ({
            variables: {
                cabinet: id,
            },
        }),
    }),
)(Cabinet);
