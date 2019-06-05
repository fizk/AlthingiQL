import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import Assemblies from './Assemblies';

const assembliesQuery = gql`
    query {
        Assemblies {
            id
            period {from to}
            division {
                majority {id name color}
                minority {id name color}
            }
        }
    }
`;

type Response = {
    AssemblyType: any; //@todo
};

type InputProps = {

};

type Variables = {

};

interface Props {
    // loading?: any;
    // error?: any;
    assemblies: any[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assembliesQuery, {
        props: ({data: {loading, Assemblies}}: any) => ({
            assemblies: loading === false ? Assemblies : undefined,
            loading: loading,
        }),
    }),
)(Assemblies);
