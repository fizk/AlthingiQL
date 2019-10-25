import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyPartiesPage from './AssemblyPartiesPage';

/**
 * @todo maybe it would be better to have a dedicated query for this
 */
const queryAssemblyParties = gql`
    query AssemblySummary ($assembly: Int!) {
        AssemblySummary(assembly: $assembly) {
            parties {
                party {name color id}
            }
        }
    }
`;

export default compose(
    graphql(queryAssemblyParties, {
        props: ({data: {error, loading, AssemblySummary}}: any) => {
            return {parties: {
                error,
                loading,
                parties: loading === false ? AssemblySummary.parties : []
            }}
        },
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly
            },
        }),
    })
)(AssemblyPartiesPage);

