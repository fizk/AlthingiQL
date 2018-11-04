import Plenary from '../types/Plenary';
import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';

export default {
    type: new GraphQLList(Plenary),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

  resolve(root, {assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingfundir`);
    },
};
