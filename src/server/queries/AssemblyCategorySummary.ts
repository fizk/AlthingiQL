import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import CategoryCount from '../types/CategoryCount';

export default {
    type: new GraphQLList(CategoryCount),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve(root, {assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/efnisflokkar`);
    },
};
