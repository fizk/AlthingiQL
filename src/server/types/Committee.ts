import {GraphQLInt, GraphQLObjectType, GraphQLString} from "graphql";

export default new GraphQLObjectType({
    name: 'Committee',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.committee_id
        },
        name: {
            type: GraphQLString,
            resolve: root => root.committee_name
        },
    },
})

