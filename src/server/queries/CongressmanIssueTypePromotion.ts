import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import IssueTypeCount from '../types/IssueTypeCount';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(IssueTypeCount),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {congressman, assembly}: {congressman: number, assembly: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/thingmal-samantekt`);
    },
};
