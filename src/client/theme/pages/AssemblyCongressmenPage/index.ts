import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyCongressmenPage from './AssemblyCongressmenPage';

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
        Substitutes: Congressmen(assembly: $assembly type: substitute) {
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
        props: ({data: {error, loading, Congressmen, Substitutes}}: any) => {
            return {congressmen: {
                error,
                loading,
                congressmen: loading === false ? Congressmen : [],
                substitutes: loading === false ? Substitutes : [],
            }}
        }
    })
)(AssemblyCongressmenPage)
