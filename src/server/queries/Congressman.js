import Congressman from '../types/Congressman'
import {GraphQLInt, GraphQLNonNull} from "graphql";

export default {
    type: Congressman,
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(root, {congressman, assembly}, {client}) {
        return client.get(`/thingmenn/${congressman}`)
            .then(congressman => ({
                    ...congressman,
                    assembly_id: assembly
                })
            );
    }
}

