import {GraphQLString, GraphQLObjectType, GraphQLInt} from 'graphql';

export default new GraphQLObjectType({
    name: 'Party',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.party_id
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        abbr_short: {
            name: 'abbr_short',
            type: GraphQLString
        },
        abbr_long: {
            name: 'abbr_long',
            type: GraphQLString
        },
        color: {
            name: 'color',
            type: GraphQLString
        }
    }
});
