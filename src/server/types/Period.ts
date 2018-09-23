import {GraphQLObjectType} from 'graphql';
import {GraphQLDate} from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'Period',
    fields: {
        from: {
            name: 'from',
            type: GraphQLDate,

            resolve(root) {
                return root.from ? new Date(root.from) : null;
            },
        },
        to: {
            name: 'to',
            type: GraphQLDate,

            resolve(root) {
                return root.to ? new Date(root.to) : null;
            },
        },
    },
});
