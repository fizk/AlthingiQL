import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';
import IssueCategory from "./IssueCategory";
import IssueType from "./IssueType";

export default new GraphQLObjectType({
    name: 'StatusValue',
    fields: {
        count: {
            type: GraphQLInt,
        },
        status: {
            type: GraphQLString,
        },
    },
});
