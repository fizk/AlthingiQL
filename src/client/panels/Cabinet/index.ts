import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
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

type Response = {
    Cabinets: any[];
    Inflations: any[];
};

type InputProps = {
    id: number;
};

type Variables = {
    cabinet: number;
};

interface Props {
    // loading?: any;
    // error?: any;
    cabinet: any;
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(cabinetsQuery, {
        props: ({data: {loading, Cabinet}}: any) => ({ //@todo `any`
            cabinet: loading === false ? Cabinet : undefined,
            loading: loading,
        }),
        options: ({id}) => ({
            variables: {
                cabinet: id,
            },
        }),
    }),
)(Cabinet);
