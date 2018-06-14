import {GraphQLInt, GraphQLNonNull} from 'graphql';
import Issue from '../types/Issue';

export default {
    type: Issue,
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve(root, {issue, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}`);
    },
};
