import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'VoteRange',
    fields: {
        count: {
            type: GraphQLInt,
        },
        date: {
            type: GraphQLString,
        },
    },
});
