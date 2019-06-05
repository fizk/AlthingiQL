import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'SpeechRange',
    fields: {
        count: {
            type: GraphQLInt,
        },
        date: {
            type: GraphQLString,
        },
    },
});
