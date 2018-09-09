import {GraphQLObjectType, GraphQLInt, GraphQLString} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Congressman from './Congressman';

export default new GraphQLObjectType({
    name: 'Vote',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.vote_item_id,
        },
        voteId: {
            type: GraphQLInt,
            resolve: root => root.vote_id,
        },
        vote: {
            type: GraphQLString,
        },
        congressman: {
            type: Congressman,
        },
    },
});
