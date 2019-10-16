import {GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import Speech from '../types/Speech';
import Cursor, {CursorInput} from '../types/Cursor';
import {Client} from "../../../@types";

interface Arguments {
    issue: number;
    assembly: number;
    category: string;
    speech: string;
    cursor: {from: string; to: string};
}

export default {
    type: new GraphQLObjectType({
        name: 'IssueSpeeches',
        fields: {
            speeches: {
                type: new GraphQLList(Speech),
                resolve: root => root.data,

            },
            cursor: {
                type: Cursor,
            },
            done: {
                type: GraphQLBoolean,
            },
        },
    }),
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        category: {
            type: new GraphQLNonNull(GraphQLString),
        },
        speech: {
            type: GraphQLString,
        },
        cursor: {
            type: CursorInput,
        },
    },

    resolve(root: any, {issue, assembly, category, speech, cursor}: Arguments, {client}: {client: Client}) {
        return speech
            ? client.getPagination(`/loggjafarthing/${assembly}/thingmal/${category}/${issue}/raedur/${speech}`, cursor)
            : client.getPagination(`/loggjafarthing/${assembly}/thingmal/${category}/${issue}/raedur`, cursor);
    },
};
