import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import IssueProgress from '../types/IssueProgress';
import {Client} from "../../../@types";
import IssueCategory from "../types/IssueCategory";

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
            type: new GraphQLNonNull(IssueCategory),
        },
    },

    resolve(root: any, {issue, assembly, category}: {issue: number, assembly: number, category: string}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${category}/${issue}/ferli`);
    },
};
