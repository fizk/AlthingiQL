import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'CategoryCount',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.category_id,
        },
        superCategoryId: {
            type: GraphQLInt,
            resolve: root => root.super_category_id,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        count: {
            type: GraphQLInt,
        },
    },
});
