import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'VoteAggregate',
    fields: {
        count: {
            type: GraphQLInt,
        },
        vote: {
            type: GraphQLString,
        },
    },
});
