import {GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import Speech from '../types/Speech';
import Cursor, {CursorInput} from "../types/Cursor";

export default {
    type: new GraphQLObjectType({
        name: 'IssueSpeeches',
        fields: {
            speeches: {
                type: new GraphQLList(Speech),
                resolve: root => root.data

            },
            cursor: {
                type: Cursor,
            },
            done: {
                type: GraphQLBoolean,
            }
        }
    }),
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        speech: {
            type: GraphQLString
        },
        cursor: {
            type: CursorInput
        }
    },
    resolve(root, {issue, assembly, speech, cursor}, {client}) {
        return speech
            ? client.getPagination(`/loggjafarthing/${assembly}/thingmal/${issue}/raedur/${speech}`, cursor)
            : client.getPagination(`/loggjafarthing/${assembly}/thingmal/${issue}/raedur`, cursor);
    }
}
