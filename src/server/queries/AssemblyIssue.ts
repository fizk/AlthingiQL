import {GraphQLInt, GraphQLNonNull} from 'graphql';
import Issue from '../types/Issue';
import IssueCategory from '../types/IssueCategory';
import {Client} from '../../../@types';

interface Arguments {
    issue: number;
    assembly: number;
    category: string;
}

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
            type: new GraphQLNonNull(IssueCategory),
        },
    },

    resolve(root: any, {issue, assembly, category}: Arguments, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${category}/${issue}`);
    },
};
