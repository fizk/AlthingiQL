import {graphql, compose, gql} from 'react-apollo';
import Assemblies from './Assemblies';

const assembliesQuery = gql`
    query {
        Assemblies {
            id
            period {
                from
                to
            }
        }
    }
`;

export default compose(
    graphql(assembliesQuery, {
        props: all => ({
            assemblies: all.data.loading === false ? all.data.Assemblies : undefined,
            loading: all.data.loading,
        })
    })
)(Assemblies);

