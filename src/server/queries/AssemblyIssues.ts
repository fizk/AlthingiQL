import {GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType,} from 'graphql';
import Issue from '../types/Issue';
import Cursor, {CursorInput} from '../types/Cursor';
import IssueCategory from '../types/IssueCategory';
import IssueType from '../types/IssueType';
import {Client} from '../../../@types';

interface Arguments {
    assembly: number;
    cursor: {from: string, to: string}
    types: string[];
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
        types: {
            type: new GraphQLList(IssueType),
        },
        category: {
            type: IssueCategory,
        },
    },

    resolve(root: any, {assembly, cursor, types, category}: Arguments, {client}: {client: Client}) {
        const queryString = (types || []).length > 0
            ? `?type=${types.join(',')}`
            : '';

        const categoryParam = category ? `/${category}` : '';

        return client.getPagination(`/loggjafarthing/${assembly}/thingmal${categoryParam}${queryString}`, cursor);
    },
};
