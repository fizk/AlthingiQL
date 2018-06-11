import {GraphQLObjectType, GraphQLInt} from 'graphql';
import Period from './Period';
import Division from "./Division";

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
        division: {
            name: 'division',
            type: Division,
            resolve: root => root.party
        }

    }
})
