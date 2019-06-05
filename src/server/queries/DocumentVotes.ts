import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Vote from '../types/Vote';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Vote),
    args: {
        vote: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {assembly, issue, vote}: {assembly: number, issue: number, vote: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/atkvaedagreidslur/${vote}/atkvaedi`);
    },
};
