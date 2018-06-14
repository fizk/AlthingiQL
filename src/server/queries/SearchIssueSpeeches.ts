import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import Speech from '../types/Speech';

export default {
    type: new GraphQLList(Speech),
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        query: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve(root, {issue, assembly, query}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/raedur?leit=${encodeURI(query)}`);
    },
};
