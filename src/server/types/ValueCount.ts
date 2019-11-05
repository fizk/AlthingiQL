import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'ValueCount',
    fields: {
        value: {
            type: GraphQLString,
        },
        count: {
            type: GraphQLInt,
        },
    },
});
