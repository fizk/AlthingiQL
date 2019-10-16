import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import AssemblyPlenary from './AssemblyPlenary';

const assemblyIssueQuery = gql`
    query Assembly ($assembly: Int!, $plenary: Int!) {
        AssemblyPlenary (assembly: $assembly, plenary: $plenary) {
            id
            plenaryId
            assembly {id}
            category
            iterationType
            iterationContinue
            iterationComment
            comment
            commentType
            posedId
            answerer
            issue {
                ... on IssueInterface {
                    ...issueInterface
                }
                ... on IssueA {
                    ... issueA
                }
            }
            posedCongressman {
                id
                name
                party {name}
                avatar {templateSrc}
            }
            answererCongressman {
                id
                name
                party {name}
                avatar {templateSrc}
            }
            counterAnswererCongressman {
                id
                name
                party {name}
                avatar {templateSrc}
            }
            instigatorCongressman {
                id
                name
                party {name}
                avatar {templateSrc}
            }
        }
    }

    fragment issueInterface on IssueInterface {
        id
        name
        type {type category typeName typeSubName}
        speechCount
        speechTime
        assembly {id}
    }

    fragment issueA on IssueA {
        subName
        status
        proponents(count: 1) {
            id
            name
            avatar {templateSrc}
            party {id name color}
            constituency {id name abbr_short}
        }
        proponentsCount
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
        props: ({data: {loading, AssemblyPlenary}}: any) => {
            return {
                plenaryItems: loading === false ? AssemblyPlenary : undefined,
                loading: loading,
            };
        },
        options: ({assembly, plenary}: any) => ({
            variables: {
                assembly,
                plenary,
            },
        }),
    }),
)(AssemblyPlenary);
