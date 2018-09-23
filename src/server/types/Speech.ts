import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Congressman from './Congressman';
import PeriodTime from './PeriodTime';
import Assembly from './Assembly';
import Issue from './Issue';

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
        assembly: {
            type: Assembly,
            resolve: root => ({assembly_id: root.assembly_id}),
        },
        issue: {
            type: Issue,
            resolve: root => ({issue_id: root.issue_id}),
        },
        congressman: {
            type: Congressman,
            resolve: root => root.congressman,

        },
        congressmanType: {
            type: GraphQLString,
            resolve: (root) => root.congressman_type,
        },
        period: {
            type: PeriodTime,
            resolve: root => ({from: root.from, to: root.to}),
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
    },
});
