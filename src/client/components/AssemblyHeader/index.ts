import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
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


type Response = {
    Assembly: any[];
};

type InputProps = {
    assembly: number;
};

type Variables = {
    assembly: number;
};

interface Props {
    // loading?: any;
    // error?: any;
    assembly: any;
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyQuery, {
        props: ({data: {loading, Assembly}}: any) => ({
            assembly: loading === false ? Assembly : undefined,
            loading: loading,
        }),
        options: ({assembly}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyHeader);
