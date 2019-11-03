import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyCongressmenPanel from './AssemblyCongressmenPanel';

const assemblyCongressmanQuery = gql`
    query ($assembly: Int!) {
        Congressmen(assembly: $assembly type: mp) {
            id
            name
            avatar {templateSrc}
            assembly {
                id
            }
            constituency {id name}
            party {
                id
                name
                color
            }
        }
    }
`;



export default compose(
    graphql(assemblyCongressmanQuery, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({data: {error, loading, Congressmen}}: any) => {
            return {congressmen: {
                    error,
                    loading,
                    congressmen: loading === false ? Congressmen : [],
                }}
        }
    })
)(AssemblyCongressmenPanel)

