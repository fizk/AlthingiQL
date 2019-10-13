import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
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
            cabinet {
                id
                title
                period {from to}
            }
        }
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: ({data: {loading, Assembly}}: any) => ({
            assembly: loading === false ? Assembly : undefined,
            loading: loading,
        }),
        options: ({assembly}: any) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyHeader);
