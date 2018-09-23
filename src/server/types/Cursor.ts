import {GraphQLInputObjectType, GraphQLInt, GraphQLNonNull, GraphQLObjectType} from 'graphql';

export default new GraphQLObjectType({
    name: 'Cursor',
    fields: {
        from: {
            name: 'from',
            type: new GraphQLNonNull(GraphQLInt),
        },
        to: {
            name: 'from',
            type: GraphQLInt,
        },
    },
});

export const CursorInput = new GraphQLInputObjectType({
    name: 'CursorInput',
    fields: {
        from: {
            name: 'from',
            type: new GraphQLNonNull(GraphQLInt),
        },
        to: {
            name: 'from',
            type: GraphQLInt,
        },
    },
});
