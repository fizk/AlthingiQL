import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import Assembly from './Assembly';
import CongressmanValue from './CongressmanValue';
import IssueInterface from './IssueInterface';
import {DataSource} from "../../../@types";
import IssueCategory from './IssueCategory';
import IssueType from './IssueType';
import Type from "./Type";

const IssueB: GraphQLObjectType = new GraphQLObjectType<DataSource.Issue>({
    name: 'IssueB',
    interfaces: [IssueInterface],
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: ({issue_id}) => issue_id,
        },
        assembly: {
            type: Assembly,
            resolve: ({assembly_id}) => ({assembly_id}),
        },
        name: {
            type: GraphQLString,
        },
        type: {
            type: Type,
            resolve: (root) => ({...root}),
        },
        speakers: {
            type: new GraphQLList(CongressmanValue),
            resolve({speakers}) {
                return speakers.map(item => ({
                    congressman: item,
                    value: item.value,
                }));
            },
        },
        speechCount: {
            type: GraphQLInt,
            resolve: ({speech_count}) => speech_count
        },
        speechTime: {
            type: GraphQLInt,
            resolve: ({speech_time}) => speech_time
        },
    }),
});

export default IssueB;
