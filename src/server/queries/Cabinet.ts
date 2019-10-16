import {GraphQLInt, GraphQLNonNull} from 'graphql';
import Cabinet from '../types/Cabinet';
import {Client} from "../../../@types";

export default {
    type: Cabinet,
    args: {
        cabinet: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {cabinet}: {cabinet: number}, {client}: {client: Client}) {
        return client.get(`/raduneyti/${cabinet}`);
    },
};
