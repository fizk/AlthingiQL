import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";
import CongressmanAssembly from "../types/CongressmanAssembly";

export default {
    type: CongressmanAssembly,
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {congressman, assembly}: {congressman: number; assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}`)
    },
};
