import {GraphQLInt, GraphQLList, GraphQLNonNull} from 'graphql';
import Vote from '../types/Vote';

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
    resolve(root, {assembly, issue, vote}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/atkvaedagreidslur/${vote}/atkvaedi`);
    },
};
