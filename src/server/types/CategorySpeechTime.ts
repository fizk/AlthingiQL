import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';
import Category from './Category';
import SuperCategory from './SuperCategory';

export default new GraphQLObjectType({
    name: 'CategorySpeechTime',
    fields: {
        category: {
            type: Category,
            resolve: root => ({category_id: root.category_id}),
        },
        superCategory: {
            type: SuperCategory,
            resolve: root => ({super_category_id: root.super_category_id}),
        },
        title: {
            type: GraphQLString,
        },
        time: {
            type: GraphQLInt,
        },
    },
});
