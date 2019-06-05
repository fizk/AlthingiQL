import Congressman from '../types/Congressman';
import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";

export default {
    type: Congressman,
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {congressman, assembly}: {congressman: number, assembly: number}, {client}: {client: Client}) {
        return client.get(`/thingmenn/${congressman}`)
            .then(congressmanObject => ({
                    ...congressmanObject,
                    assembly_id: assembly,
                }),
            );
    },
};
