import {GraphQLObjectType, GraphQLString} from 'graphql';
import IssueCategory from "./IssueCategory";
import IssueType from "./IssueType";

export default new GraphQLObjectType({
    name: 'Type',
    fields: {
        type: {
            type: IssueType,
        },
        category: {
            type: IssueCategory,
        },
        typeName: {
            type: GraphQLString,
            resolve: ({type_name}) => type_name,
        },
        typeSubName: {
            type: GraphQLString,
            resolve: ({type_subname}) => type_subname,
        },
    },
});
