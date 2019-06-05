import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Document from '../types/Document';
import {Client} from "../../../@types";

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

    resolve(root: any, {issue, assembly}: {issue: number, assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/a/${issue}/thingskjal`);
    },
};
