import {graphql, compose, gql} from 'react-apollo';
import AssemblyHeader from './AssemblyHeader';

const assemblyQuery = gql`
    query assembly ($assembly: Int!) {
        Assembly(assembly: $assembly) {
            id
            period {
                from
                to
            }
            division {
                majority {
                    id
                    name
                    color
                }
                minority {
                    id
                    name
                    color
                }
            }
        }
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: all => ({
            assembly: all.data.loading === false ? all.data.Assembly : undefined,
            loading: all.data.loading
        }),
        options: ({assembly}) => ({
            variables: {
                assembly: assembly
            }
        })
    })
)(AssemblyHeader)
