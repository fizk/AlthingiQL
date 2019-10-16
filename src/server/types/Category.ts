import {GraphQLInt, GraphQLObjectType, GraphQLString, GraphQLNonNull} from 'graphql';

export default new GraphQLObjectType({
    name: 'Category',
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({category_id}) => category_id,
        },

        superId: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: ({super_category_id}) => super_category_id,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLInt,
        },
    },
});
