import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';

export default new GraphQLObjectType({
    name: 'VoteResult',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.vote_id
        },
        issue_id: {
            type: GraphQLInt
        },
        assembly_id: {
            type: GraphQLInt
        },
        document_id: {
            type: GraphQLInt
        },
        date: {
            type: GraphQLString
        },
        type: {
            type: GraphQLString
        },
        outcome: {
            type: GraphQLString
        },
        method: {
            type: GraphQLString
        },
        yes: {
            type: GraphQLInt
        },
        no: {
            type: GraphQLInt
        },
        inaction: {
            type: GraphQLInt
        },
        committee: {
            type: GraphQLString,
            resolve: root => root.committee_to
        }
    }
})
