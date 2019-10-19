import {GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Category from "./Category";
import Type from "./Type";
import StatusValue from "./StatusValue";

export default new GraphQLObjectType({
    name: 'AssemblyIssuesSummary',
    fields: {
        bills: {
            type: new GraphQLList(StatusValue),
            resolve: ({bills}) => bills || []
        },
        governmentBills: {
            type: new GraphQLList(StatusValue),
            resolve: ({government_bills}) => government_bills || [],
        },
        proposals: {
            type: new GraphQLList(StatusValue),
            resolve: ({proposals}) => proposals || []
        },
        types:  {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'TypeValue',
                fields: {
                    count: {
                        type: GraphQLInt,
                    },
                    type: {
                        type: Type,
                        resolve: (root) => ({...root}),
                    }
                },
            })),
            resolve: ({types}) => types || [],
        },
        categories: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'CategoryValue',
                fields: {
                    count: {
                        type: GraphQLInt,
                    },
                    category: {
                        type: Category,
                        resolve: (root) => ({...root}),
                    }
                }
            })),
            resolve: ({categories}) => categories || []
        }
    },
});
