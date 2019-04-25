import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Cabinet from '../types/Cabinet';

export default {
    type: Cabinet,
    args: {
        cabinet: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {cabinet}, {client}) {
        return client.get(`/raduneyti/${cabinet}`);
    },
};
