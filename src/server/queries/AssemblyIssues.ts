import {GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import Issue from '../types/Issue';
import Cursor, {CursorInput} from '../types/Cursor';
import {Client} from "../../../@types";

interface Arguments {
    assembly: number;
    cursor: {from: string, to: string}
    type: string;
    category: string;
}

export default {
    type: new GraphQLObjectType({
        name: 'AssemblyIssues',
        fields: {
            issues: {
                type: new GraphQLList(Issue),
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
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        cursor: {
            type: CursorInput,
        },
        type: {
            type: GraphQLString,
        },
        category: {
            type: GraphQLString,
        },
    },

    resolve(root: any, {assembly, cursor, type, category}: Arguments, {client}: {client: Client}) {
        const queries = [];
        if (type) {
            queries.push(`type=${type}`);
        }

        const queryString = queries.length > 0
            ? `?${queries.join('&')}`
            : '';

        const categoryParam = category ? `/${category}` : '';

        return client.getPagination(`/loggjafarthing/${assembly}/thingmal${categoryParam}${queryString}`, cursor);
    },
};
