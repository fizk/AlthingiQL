import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import Assembly from './Assembly';
import CongressmanValue from './CongressmanValue';
import IssueInterface from './IssueInterface';
import SpeechRange from './SpeechRange';
import {DataSource} from "../../../@types";

const IssueB: GraphQLObjectType = new GraphQLObjectType<DataSource.Issue>({
    name: 'IssueB',
    interfaces: [IssueInterface],
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.issue_id,
        },
        assembly: {
            type: Assembly,
            resolve: (root) => ({
                assembly_id: root.assembly_id,
            }),
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

            resolve(root) {
                return root.speakers.map(item => ({
                    congressman: item,
                    value: item.time,
                }));
            },
        },
        speechRange: {
            type: new GraphQLList(SpeechRange),
        },
    },
});

export default IssueB;
