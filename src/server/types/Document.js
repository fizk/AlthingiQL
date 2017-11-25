import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date'
import Congressman from "./Congressman";
import VoteResult from "./VoteResult";

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
        proponents: {
            type: new GraphQLList(Congressman)
        },
        votes: {
            type: new GraphQLList(VoteResult)
        }
    }
})
