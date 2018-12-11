import {GraphQLInt, GraphQLList} from 'graphql';
import {GraphQLDate} from 'graphql-iso-date';
import Inflation from '../types/Inflation';

export default {
    type: new GraphQLList(Inflation),
    args: {
        assembly: {
            type: GraphQLInt,
        },
    },

    resolve(root, params, {client}) {
        return client.get(`/loggjafarthing/${params.assembly}/verdbolga`);
    },
};
