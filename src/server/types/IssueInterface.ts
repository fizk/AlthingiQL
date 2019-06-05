import {GraphQLInt, GraphQLString, GraphQLList, GraphQLInterfaceType} from 'graphql';
import Assembly from './Assembly';
import CongressmanValue from './CongressmanValue';
import SpeechRange from './SpeechRange';

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
        category: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        type: {
            type: GraphQLString,
        },
        typeName: {
            type: GraphQLString,
            resolve: (root) => root.type_name,
        },
        date: {
            type: GraphQLString,
            // type: GraphQLDateTime,
        },
        speakers: {
            type: new GraphQLList(CongressmanValue),
        },
        speechRange: {
            type: new GraphQLList(SpeechRange),
        },
    },
});
