import {graphql, compose} from 'react-apollo';
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

type Response = {
    AssemblyPlenaries: any[];
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
    plenaries: any[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyIssueQuery, {
        props: ({data: {loading, AssemblyPlenaries}}: any) => {
            return {
                plenaries: loading === false ? AssemblyPlenaries : undefined,
                loading: loading,
            };
        },
        options: ({assembly}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(AssemblyPlenaries);
