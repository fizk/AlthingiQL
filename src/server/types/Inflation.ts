import {GraphQLObjectType, GraphQLInt, GraphQLFloat} from 'graphql';
import {GraphQLDate} from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'Inflation',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
        },
        value: {
            name: 'value',
            type: GraphQLFloat,
        },
        date: {
            name: 'date',
            type: GraphQLDate,
        },
    },
});
