import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql';
import Category from './Category';
import SuperCategory from './SuperCategory';

export default new GraphQLObjectType({
    name: 'SuperCategorySpeechTime',
    fields: {
        superCategory: {
            type: SuperCategory,
            resolve: root => ({super_category_id: root.super_category_id, title: root.title}),
        },
        time: {
            type: GraphQLInt,
        },
    },
});
