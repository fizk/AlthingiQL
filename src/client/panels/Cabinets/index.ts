import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
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

type Response = {
    Cabinets: any[];
    Inflations: any[];
};

type InputProps = {

};

type Variables = {

};

interface Props {
    // loading?: any;
    // error?: any;
    cabinets: any[];
    inflation: any[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(cabinetsQuery, {
        props: ({data: {loading, Cabinets, Inflations}}: any) => ({ //@todo `any`
            cabinets: loading === false ? Cabinets : undefined,
            inflation: loading === false ? Inflations : undefined,
            loading: loading,
        }),
    }),
)(Cabinets);
