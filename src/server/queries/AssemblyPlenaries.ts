import Plenary from '../types/Plenary';
import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Plenary),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {assembly}: {assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingfundir`);
    },
};
