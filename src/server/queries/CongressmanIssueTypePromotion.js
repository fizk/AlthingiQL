import {GraphQLInt, GraphQLList, GraphQLNonNull} from "graphql";
import IssueTypeCount from "../types/IssueTypeCount";

export default {
    type: new GraphQLList(IssueTypeCount),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(root, {congressman, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/thingmal-samantekt`)
    }
}

