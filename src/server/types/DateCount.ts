import {GraphQLObjectType, GraphQLInt} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date'

export default new GraphQLObjectType({
    name: 'DateCount',
    fields: {
        date: {
            type: GraphQLDateTime,
        },
        count: {
            type: GraphQLInt,
        },

    },
});
