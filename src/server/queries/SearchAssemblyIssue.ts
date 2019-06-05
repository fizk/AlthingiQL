import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import Issue from '../types/Issue';
import {Client} from "../../../@types";

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

    resolve(root: any, {assembly, query}: {assembly: number, query: string}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal?leit=${encodeURI(query)}`);
    },
};
