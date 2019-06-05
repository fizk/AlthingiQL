import Assembly from '../types/Assembly';
import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";

export default {
    type: Assembly,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

  resolve(root: any, {assembly}: {assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}`);
    },
};
