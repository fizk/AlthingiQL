import {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLFloat} from 'graphql';
import Party from './Party';
import Category from "./Category";
import Type from "./Type";
import StatusValue from "./StatusValue";

export default new GraphQLObjectType({
    name: 'AssemblyIssuesSummary',
    fields: {
        bills: {
            type: new GraphQLList(StatusValue),
        },
        governmentBills: {
            type: new GraphQLList(StatusValue),
            resolve: ({government_bills}) => government_bills,
        },
        proposals: {
            type: new GraphQLList(StatusValue),
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
            }))
        }
    },
});
