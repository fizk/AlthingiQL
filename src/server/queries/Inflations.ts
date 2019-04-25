import {GraphQLInt, GraphQLList} from 'graphql';
import {GraphQLDate} from 'graphql-iso-date';
import Inflation from '../types/Inflation';

export default {
    type: new GraphQLList(Inflation),

    resolve(root, params, {client}) {
        return client.get(`/verdbolga`);
    },
};
