import {GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Period from './Period';
import Congressman from './Congressman';

export default new GraphQLObjectType({
    name: 'Assembly',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.assembly_id
        },
        period: {
            name: 'period',
            type: Period,
            resolve(root) {
                return {
                    from: root.from,
                    to: root.to,
                }
            }
        },
    }
})
