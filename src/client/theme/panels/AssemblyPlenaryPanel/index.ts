import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyPlenaryPanel from './AssemblyPlenaryPanel';

const queryAssemblyPlenary = gql`    
    query AssemblyPlenar ($assembly: Int! $plenary: Int!){
        AssemblyPlenary (assembly: $assembly plenary: $plenary) {
            id
            plenaryId
            category
            iterationType
            iterationContinue
            comment
            commentType
            posedId
            answerer
            assembly {id}
            issue {
                __typename
                ... on IssueInterface {
                    assembly {id}
                    id
                    type {type category typeName typeSubName}
                    name
                }
                ... on IssueA {
                    proponents(count: 1) {
                        id
                        name
                        minister
                        party {id name color}
                        constituency {id name}
                    }
                    proponentsCount
                }
            }
            posedCongressman {... congressman}
            answererCongressman {... congressman}
            counterAnswererCongressman {... congressman}
            instigatorCongressman {... congressman}

        }
    }

    fragment congressman on Congressman {
        id
        name
        avatar {src templateSrc}
        party {id name color}
        constituency {id name}
    }
`;

export default compose(
    graphql(queryAssemblyPlenary, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({data: {error, loading, AssemblyPlenary}}: any) => {
            return {agenda: {
                error,
                loading,
                items: loading === false ? AssemblyPlenary : []
            }}
        }
    })
)(AssemblyPlenaryPanel);

