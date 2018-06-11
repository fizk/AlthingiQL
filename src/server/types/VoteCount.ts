import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Congressman from "./Congressman";

export default new GraphQLObjectType({
    name: 'VoteCount',
    fields: {
        vote: {
            type: GraphQLString,
        },
        count: {
            type: GraphQLInt
        }
    }
})
