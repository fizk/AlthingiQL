import {GraphQLString, GraphQLObjectType, GraphQLInt} from 'graphql';
import Party from './Party';
import Assembly from "./Assembly";

export default new GraphQLObjectType({
    name: 'Congressman',
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
        party: {
            name: 'party',
            type: Party,
        },
        assembly: {
            type: Assembly
        }
    }
})
