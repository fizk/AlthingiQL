import Congressman from '../types/Congressman';
import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";
import CongressmanSessionType from "../types/CongressmanSessionType";

export default {
    type: new GraphQLList(Congressman),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        type: {
            type: CongressmanSessionType,
        },
    },

    resolve(root: any, {assembly, type}: {assembly: number; type: string}, {client}: {client: Client}) {
        const query = (type)
            ? `?tegund=${encodeURIComponent(type)}`
            : '';
        return client.get(`/loggjafarthing/${assembly}/thingmenn${query}`);
    },
};
