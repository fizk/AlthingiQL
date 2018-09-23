import {GraphQLInt, GraphQLNonNull} from 'graphql';
import AssemblySummary from '../types/AssemblySummary';

export default {
    type: AssemblySummary,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/samantekt`);
    },
};
