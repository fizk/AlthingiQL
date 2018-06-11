import Congressman from '../types/Congressman'
import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";

export default {
    type: new GraphQLList(Congressman),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        type: {
            type: GraphQLString
        }

    },
    resolve(root, {assembly, type}, {client}) {
        const query = (type)
            ? `?tegund=${type}`
            : '';
        return client.get(`/loggjafarthing/${assembly}/thingmenn${query}`)
    }
}

