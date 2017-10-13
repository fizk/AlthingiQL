import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date'

export default new GraphQLObjectType({
    name: 'Document',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: (root) => root.document_id
        },
        issueId: {
            type: GraphQLInt,
            resolve: (root) => root.issue_id
        },
        assemblyId: {
            type: GraphQLInt,
            resolve: (root) => root.assembly_id
        },
        date: {
            // type: GraphQLDateTime,
            type: GraphQLString,
        },
        url: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
    }
})
