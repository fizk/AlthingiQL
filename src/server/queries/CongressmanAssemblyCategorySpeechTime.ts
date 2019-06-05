import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import CategorySpeechTime from '../types/CategorySpeechTime';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(CategorySpeechTime),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {congressman, assembly}: {congressman: number, assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/malaflokkar`);
    },
};
