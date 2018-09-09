import {GraphQLObjectType, GraphQLInt, GraphQLNonNull} from 'graphql';
import Issue from './Issue';

export default new GraphQLObjectType({
    name: 'IssueValue',
    fields: {
        issue: {
            type: new GraphQLNonNull(Issue),
        },
        value: {
            type: GraphQLInt,
        },
    },
});
