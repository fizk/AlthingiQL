import Assembly from '../types/Assembly'
import {GraphQLInt, GraphQLNonNull} from "graphql";

export default {
    type: Assembly,
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(root, {assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}`);
    }
}

