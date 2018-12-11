import {graphql, compose, gql} from 'react-apollo';
import AssemblyHeader from './AssemblyHeader';
import {Assembly as AssemblyType} from '../../../../@types';

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

export default compose<any>( //@todo `any`
    graphql(assemblyQuery, {
        props: (all: {data?: {loading: boolean, Assembly: AssemblyType}}) => ({
            assembly: all.data.loading === false ? all.data.Assembly : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyHeader);
