import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyPlenariesPage from './AssemblyPlenariesPage';


const queryAssemblyPlenaries = gql`
    query AssemblyPlenaries ($assembly: Int!){
        AssemblyPlenaries (assembly: $assembly) {
            id
            from
            to
            name
        }
    }
`;

export default compose(
    graphql(queryAssemblyPlenaries, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({data: {error, loading, AssemblyPlenaries}}: any) => {
            return {plenaries: {
                error,
                loading,
                plenaries: loading === false ? AssemblyPlenaries : []
            }}
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly,
            },
        }),
    })
)(AssemblyPlenariesPage);
