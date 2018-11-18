import {graphql, compose, gql} from 'react-apollo';
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

export default compose(
    graphql(assemblyIssueQuery, {
        props: (all: {ownProps: any, data?: {fetchMore: any, loading: boolean, AssemblyPlenary: any}}) => {
            return {
                plenaryItems: all.data.loading === false ? all.data.AssemblyPlenary : undefined,
                loading: all.data.loading,
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
