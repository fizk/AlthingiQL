import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Assembly from "./Assembly";
import Congressman from "./Congressman";

export default new GraphQLObjectType({
    name: 'IssueTypeCount',
    fields: {
        order: {
            type: GraphQLInt,

        },
        type: {
            type: GraphQLString
        },
        typeName: {
            type: GraphQLString,
            resolve: root => root.type_name
        },
        typeSubName: {
            type: GraphQLString,
            resolve: root => root.type_subname
        },
        documentType: {
            type: GraphQLString,
            resolve: root => root.document_type
        },
        count: {
            type: GraphQLInt
        }
    }
})
