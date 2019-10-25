import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import AssemblyCongressmen from './AssemblyCongressmen';

const assemblyCongressmanQuery = gql`
    query ($assembly: Int!) {
        Congressmen(assembly: $assembly type: mp) {
            id
            name
            avatar {templateSrc}
            assembly {
                id
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
            party {
                id
                name
                color
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
    graphql(assemblyCongressmanQuery, {
        props: ({data: {loading, error, Congressmen, Substitutes}}: any) => ({
            congressmen: loading === false ? Congressmen : undefined,
            substitutes: loading === false ? Substitutes : undefined,
            loading,
            error,
        }),
        options: ({assembly}: any) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyCongressmen);
