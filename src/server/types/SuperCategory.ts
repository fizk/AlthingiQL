import {GraphQLInt, GraphQLObjectType} from 'graphql';

export default new GraphQLObjectType({
    name: 'SuperCategory',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.super_category_id,
        },
    },
});
