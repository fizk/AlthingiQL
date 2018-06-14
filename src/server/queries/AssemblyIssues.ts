import {GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import Issue from '../types/Issue';
import Cursor, {CursorInput} from '../types/Cursor';

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
    resolve(root, {assembly, cursor, type, category}, {client}) {
        const queries = [];
        if (type) {
            queries.push(`type=${type}`);
        }

        if (category) {
            queries.push(`category=${category}`);
        }

        const queryString = queries.length > 0
            ? `?${queries.join('&')}`
            : '';

        return client.getPagination(`/loggjafarthing/${assembly}/thingmal${queryString}`, cursor);
    },
};
