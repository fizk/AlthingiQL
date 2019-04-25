import {GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import Period from './Period';
import Assembly from './Assembly';

export default new GraphQLObjectType({
    name: 'Cabinet',
    fields: () => ({
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
        assemblies: {
            name: 'assemblies',
            type: new GraphQLList(Assembly),

            resolve(root) {
                return root.assemblies || [];
            },
        },
    }),
});
