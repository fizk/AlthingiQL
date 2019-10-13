import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
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

const queryAssembly = gql`
    query assembly ($assembly: Int!) {
        Assembly(assembly: $assembly) {
            id
            division {
                majority {color}
                minority {color}
            }
            cabinet {
                title
                period {from to}
            }
            period {
                from
                to
            }
        }
    }
`;

export default compose(
    graphql(queryAssembly, {
        props: ({data: {loading, error, Assembly}}: any) => ({
            assemblyProperties: {
                assembly: loading === false ? Assembly : {
                    id: undefined,
                    period: {
                        from: undefined,
                        to: undefined,
                    },
                    division: [],
                    cabinet: {
                        title: undefined,
                        period: {from: undefined, to: undefined}
                    }
                },
                loading,
                error,
            }
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly: Number(assembly),
            },
        }),
    }),
    graphql(assemblyIssueQuery, {
        props: ({data: {loading, AssemblyPlenaries}}: any) => {
            return {
                plenaries: loading === false ? AssemblyPlenaries : undefined,
                loading: loading,
            };
        },
        options: ({assembly}: any) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyPlenaries);
