import {GraphQLInt, GraphQLObjectType} from 'graphql';

export default new GraphQLObjectType({
    name: 'Category',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.category_id,
        },
    },
});
