import {GraphQLInt, GraphQLList, GraphQLNonNull} from "graphql";
import CategorySpeechTime from "../types/CategorySpeechTime";

export default {
    type: new GraphQLList(CategorySpeechTime),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(root, {congressman, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/malaflokkar`)
    }
}

