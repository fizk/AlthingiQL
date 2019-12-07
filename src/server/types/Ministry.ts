import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {DataSource} from '../../../@types'
import Period from './Period';
import Division from './Division';
import Cabinet from './Cabinet';

export default new GraphQLObjectType<DataSource.Ministry>({
    name: 'Ministry',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: root => root.ministry_id,
        },
        name: {
            name: 'name',
            type: GraphQLString,
            resolve: root => root.name,
        },
        abbrShort: {
            name: 'abbrShort',
            type: GraphQLString,
            resolve: root => root.abbr_short,
        },
        abbrLong: {
            name: 'abbrLong',
            type: GraphQLString,
            resolve: root => root.abbr_long,
        },
        first: {
            name: 'first',
            type: GraphQLInt,
            resolve: root => root.first,
        },
        last: {
            name: 'last',
            type: GraphQLInt,
            resolve: root => root.last,
        }

    },
});
