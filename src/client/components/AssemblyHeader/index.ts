import {graphql, compose, gql} from 'react-apollo';
import AssemblyHeader from './AssemblyHeader';

interface AssemblySummary {
    id: number;
    period: {
        from?: string,
        to?: string,
    };
    division: {
        majority?: Array<{
            id?: number,
            name?: string,
            color?: string,
        }>,
        minority: Array<{
            id?: number,
            name?: string,
            color?: string,
        }>,
    };
}

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

export default compose<any>( //@todo `any`
    graphql(assemblyQuery, {
        props: (all: {data?: {loading: boolean, Assembly: AssemblySummary}}) => ({
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
