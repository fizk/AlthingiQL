import {GraphQLObjectType} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'PeriodTime',
    fields: {
        from: {
            name: 'from',
            type: GraphQLDateTime,
            resolve(root) {
                return root.from ? new Date(root.from) : null;
            },
        },
        to: {
            name: 'to',
            type: GraphQLDateTime,
            resolve(root) {
                return root.to ? new Date(root.to) : null;
            },
        },
    },
});
