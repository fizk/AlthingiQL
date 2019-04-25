import {graphql, compose, gql} from 'react-apollo';
import Cabinets from './Cabinets';

const cabinetsQuery = gql`
    query {
        Cabinets  {
            id
            title
            period {from to}
        }
        Inflations {
            value
            date
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(cabinetsQuery, {
        props: (all: {data?: {loading: boolean, Cabinets: any, Inflations: any}}) => ({ //@todo `any`
            cabinets: all.data.loading === false ? all.data.Cabinets : undefined,
            inflation: all.data.loading === false ? all.data.Inflations : undefined,
            loading: all.data.loading,
        }),
    }),
)(Cabinets);
