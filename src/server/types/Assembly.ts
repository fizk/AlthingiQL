import {GraphQLObjectType, GraphQLInt} from 'graphql';
import Period from './Period';
import Division from './Division';
import Cabinet from './Cabinet';

export default new GraphQLObjectType({
    name: 'Assembly',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.assembly_id,
        },
        period: {
            name: 'period',
            type: Period,

            resolve(root) {
                return {
                    from: root.from,
                    to: root.to,
                };
            },
        },
        division: {
            name: 'division',
            type: Division,
            resolve: root => root.party,
        },
        cabinet: {
            name: 'cabinet',
            type: Cabinet,
            resolve: root => root.cabinet,
        },
    },
});
