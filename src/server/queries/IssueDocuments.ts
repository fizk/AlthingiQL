import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Document from '../types/Document';

export default {
    type: new GraphQLList(Document),
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {issue, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/thingskjal`);
    },
};
