import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import VoteAggregate from '../types/VoteAggregate';

export default {
    type: new GraphQLList(VoteAggregate),
    args: {
        congressman: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {congressman, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/${congressman}/atvaedagreidslur`);
    },
};
