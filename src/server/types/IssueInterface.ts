import {GraphQLInt, GraphQLString, GraphQLList, GraphQLInterfaceType} from 'graphql';
import Assembly from './Assembly';
import CongressmanValue from './CongressmanValue';
import Type from "./Type";

export default new GraphQLInterfaceType({
    name: 'IssueInterface',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
        },
        assembly: {
            type: Assembly,
        },
        type: {
            type: Type,
            resolve: (root) => ({...root}),
        },
        name: {
            type: GraphQLString,
        },
        speechCount: {
            type: GraphQLInt,
        },
        speechTime: {
            type: GraphQLInt,
        },
        speakers: {
            type: new GraphQLList(CongressmanValue),
        },
    },
});
