import {GraphQLObjectType, GraphQLSchema} from 'graphql';
import queries from './queries';
// import mutations from './mutations';

// @ts-ignore //@todo this is weird, arguments in resolver can't be typed
export default new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        // @ts-ignore
        fields: queries,
    }),
    // mutation: new GraphQLObjectType({
    //     name: 'Mutation',
    //     fields: mutations
    // })
});
