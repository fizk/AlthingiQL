import {GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString} from 'graphql';
import Period from './Period';
import Assembly from './Assembly';
import {DataSource} from '../../../@types'

const Cabinet: GraphQLObjectType = new GraphQLObjectType<DataSource.Cabinet>({
    name: 'Cabinet',
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: root => root.cabinet_id,
        },
        title: {
            type: GraphQLString,
        },
        description: {
            type: GraphQLString,
        },
        period: {
            name: 'period',
            type: Period,
            resolve: ({from, to}) => ({from, to}),
        },
        assemblies: {
            name: 'assemblies',
            type: new GraphQLList(Assembly),
            resolve: ({assemblies}) => (assemblies || []),
        },
    }),
});

export default Cabinet;
