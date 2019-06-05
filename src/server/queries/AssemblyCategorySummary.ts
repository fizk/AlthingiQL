import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import CategoryCount from '../types/CategoryCount';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(CategoryCount),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {assembly}: {assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/efnisflokkar`);
    },
};
