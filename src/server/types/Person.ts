import {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Party from './Party';

export default new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.congressman_id
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        parties: {
            name: 'parties',
            type: new GraphQLList(Party),
        }
    }
})
