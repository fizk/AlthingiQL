import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Session from '../types/Session';

export default {
    type: new GraphQLList(Session),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {congressman, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/thingseta`);
    },
};
