import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";
import AssemblyIssuesSummary from "../types/AssemblyIssuesSummary";

export default {
    type: AssemblyIssuesSummary,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {assembly}: {assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/samantekt/thingmal`);
    },
};
