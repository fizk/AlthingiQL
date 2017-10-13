import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Congressman from "./Congressman";

export default new GraphQLObjectType({
    name: 'Speech',
    fields: {
        id: {
            type: GraphQLString,
            resolve: (root) => root.speech_id,
        },
        plenaryId: {
            type: GraphQLString,
            resolve: (root) => root.plenary_id,
        },
        assemblyId: {
            type: GraphQLString,
            resolve: (root) => root.assembly_id,
        },
        issueId: {
            type: GraphQLString,
            resolve: (root) => root.issue_id,
        },
        congressman: {
            type: Congressman,
            resolve: root => root.congressman

        },
        congressmanType: {
            type: GraphQLString,
            resolve: (root) => root.congressman_type,
        },
        from: {
            type: GraphQLString,
        },
        to: {
            type: GraphQLString,
        },
        text: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
        iteration: {
            type: GraphQLString,
        },
        position: {
            type: GraphQLInt,
        },
    }
})
