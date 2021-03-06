import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyCongressmenPage from './AssemblyCongressmenPage';
import withFilter from './withFilter';

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
            ministries {id name}
            parties {
                id
                name
                color
            }
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({data: {error, loading, Congressmen, Substitutes}}: any) => {
            return {congressmen: {
                error,
                loading,
                congressmen: loading === false ? Congressmen : [],
                substitutes: loading === false ? Substitutes : [],
            }}
        }
    })
)(withFilter(AssemblyCongressmenPage))
