import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'VoteAggregate',
    fields: {
        count: {
            type: GraphQLInt,
        },
        vote: {
            type: GraphQLString,
        },
    }
})
