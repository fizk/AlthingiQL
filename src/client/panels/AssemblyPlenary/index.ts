import {graphql, compose} from 'react-apollo';
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
                id
                category
                name
                subName
                type
                assembly {
                    id
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
`;

type Response = {
    AssemblyPlenary: any[];
};

type InputProps = {
    assembly: number
    plenary: number
};

type Variables = {
    assembly: number
    plenary: number
};

interface Props {
    // loading?: any;
    // error?: any;
    plenaryItems: any[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyIssueQuery, {
        props: ({data: {loading, AssemblyPlenary}}: any) => {
            return {
                plenaryItems: loading === false ? AssemblyPlenary : undefined,
                loading: loading,
            };
        },
        options: ({assembly, plenary}) => ({
            variables: {
                assembly,
                plenary,
            },
        }),
    }),
)(AssemblyPlenary);
