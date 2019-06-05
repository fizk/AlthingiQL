import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'VoteCount',
    fields: {
        vote: {
            type: GraphQLString,
        },
        count: {
            type: GraphQLInt,
        },
    },
});
