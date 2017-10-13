import {GraphQLInt, GraphQLList, GraphQLNonNull} from "graphql";
import Speech from '../types/Speech'

export default {
    type: new GraphQLList(Speech),
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        },
    },
    resolve(root, {issue, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/raedur`);
    }
}
