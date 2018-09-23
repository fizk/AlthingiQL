import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Issue from '../types/Issue';

export default {
    type: new GraphQLList(Issue),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {congressman, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/thingmal`);
    },
};
