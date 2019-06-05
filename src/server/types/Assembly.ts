import {GraphQLObjectType, GraphQLInt} from 'graphql';
import {DataSource} from '../../../@types'
import Period from './Period';
import Division from './Division';
import Cabinet from './Cabinet';

export default new GraphQLObjectType<DataSource.Assembly>({
    name: 'Assembly',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: root => root.assembly_id,
        },
        period: {
            name: 'period',
            type: Period,

            resolve: ({from, to}) => ({from, to}),
        },
        division: {
            name: 'division',
            type: Division,
            resolve: ({party}) => party,
        },
        cabinet: {
            name: 'cabinet',
            type: Cabinet,
            resolve: ({cabinet}) => cabinet,
        },
    },
});
