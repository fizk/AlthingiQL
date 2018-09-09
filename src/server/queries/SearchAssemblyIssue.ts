import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import Issue from '../types/Issue';

export default {
    type: new GraphQLList(Issue),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        query: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve(root, {assembly, query}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal?leit=${encodeURI(query)}`);
    },
};
