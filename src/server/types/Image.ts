import {GraphQLObjectType, GraphQLString} from 'graphql';

export default new GraphQLObjectType({
    name: 'Image',
    fields: {
        src: {
            type: GraphQLString,
        },
        templateSrc: {
            type: GraphQLString,
        },
    },
});
