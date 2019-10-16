import {GraphQLInt, GraphQLNonNull} from 'graphql';
import AssemblySummary from '../types/AssemblySummary';
import {Client} from "../../../@types";

export default {
    type: AssemblySummary,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {assembly}: {assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/samantekt`);
    },
};
