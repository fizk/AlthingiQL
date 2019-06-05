import {GraphQLInt, GraphQLNonNull, GraphQLString} from 'graphql';
import Issue from '../types/Issue';
import {Client} from "../../../@types";


export default {
    type: Issue,
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        category: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },

    resolve(root: any, {issue, assembly, category}: {issue: number, assembly: number, category: string}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${category}/${issue}`);
    },
};
