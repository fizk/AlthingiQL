import {graphql, compose, gql} from 'react-apollo';
import AssemblyPlenaries from './AssemblyPlenaries';

const assemblyIssueQuery = gql`
    query Assembly ($assembly: Int!) {
        AssemblyPlenaries (assembly: $assembly) {
            id
            from
            to
            name
            assembly {
                id
            }
        }
    }
`;

export default compose(
    graphql(assemblyIssueQuery, {
        props: (all: {ownProps: any, data?: {fetchMore: any, loading: boolean, AssemblyPlenaries: any}}) => {
            return {
                plenaries: all.data.loading === false ? all.data.AssemblyPlenaries : undefined,
                loading: all.data.loading,
            };
        },
        options: ({assembly}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyPlenaries);
