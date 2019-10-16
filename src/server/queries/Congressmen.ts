import Congressman from '../types/Congressman';
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Congressman),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        type: {
            type: GraphQLString,
        },
    },

    resolve(root: any, {assembly, type}: {assembly: number; type: string}, {client}: {client: Client}) {
        const query = (type)
            ? `?tegund=${type}`
            : '';
        return client.get(`/loggjafarthing/${assembly}/thingmenn${query}`);
    },
};
