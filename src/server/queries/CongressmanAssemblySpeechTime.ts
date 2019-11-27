import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";
import ValueCount from "../types/ValueCount";

export default {
    type: ValueCount,
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {congressman, assembly}: {congressman: number; assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/raedutimar`)
    },
};
