import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import Issue from '../types/Issue';
import {Client} from '../../../@types';

interface Arguments {
    party: number;
    assembly: number;
}

export default {
    type: new GraphQLList(Issue),
    args: {
        party: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root: any, {party, assembly}: Arguments, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingflokkar/${party}/thingmal`);
    },
};
