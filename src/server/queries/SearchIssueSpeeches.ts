import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import Speech from '../types/Speech';
import {Client} from "../../../@types";

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

    resolve(root: any, {issue, assembly, query}: {issue: number; assembly: number; query: string}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/raedur?leit=${encodeURI(query)}`);
    },
};
