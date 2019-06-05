import {GraphQLInt, GraphQLNonNull, GraphQLList, GraphQLString} from 'graphql';
import IssueProgress from '../types/IssueProgress';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(IssueProgress),
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
        return client.get(`/loggjafarthing/${assembly}/thingmal/${category}/${issue}/ferli`);
    },
};
