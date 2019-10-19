import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'SuperCategory',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.super_category_id,
        },
        title: {
            type: GraphQLString,
        }
    },
});
