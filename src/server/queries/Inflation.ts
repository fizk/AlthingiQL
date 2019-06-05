import {GraphQLInt, GraphQLList} from 'graphql';
import Inflation from '../types/Inflation';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Inflation),
    args: {
        assembly: {
            type: GraphQLInt,
        },
    },

    resolve(root: any, {assembly}: {assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/verdbolga`);
    },
};
