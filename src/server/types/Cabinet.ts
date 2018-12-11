import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';
import Period from './Period';

export default new GraphQLObjectType({
    name: 'Cabinet',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.cabinet_id,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        period: {
            name: 'period',
            type: Period,

            resolve(root) {
                return {
                    from: root.from,
                    to: root.to,
                };
            },
        },
    },
});
