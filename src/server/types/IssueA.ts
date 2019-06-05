import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import Assembly from './Assembly';
import Congressman from './Congressman';
import CongressmanValue from './CongressmanValue';
import IssueInterface from './IssueInterface';
import SpeechRange from './SpeechRange';
import VoteRange from './VoteRange';
import {DataSource} from "../../../@types";


const IssueA: GraphQLObjectType = new GraphQLObjectType<DataSource.Issue>({
    name: 'IssueA',
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
        subName: {
            type: GraphQLString,
            resolve: (root) => root.sub_name,
        },
        type: {
            type: GraphQLString,
        },
        typeName: {
            type: GraphQLString,
            resolve: (root) => root.type_name,
        },
        typeSubName: {
            type: GraphQLString,
            resolve: (root) => root.type_subname,
        },
        status: {
            type: GraphQLString,
        },
        question: {
            type: GraphQLString,
        },
        goal: {
            type: GraphQLString,
        },
        majorChanges: {
            type: GraphQLString,
            resolve: (root) => root.major_changes,
        },
        changesInLaw: {
            type: GraphQLString,
            resolve: (root) => root.changes_in_law,
        },
        costsAndRevenues: {
            type: GraphQLString,
            resolve: (root) => root.costs_and_revenues,
        },
        deliveries: {
            type: GraphQLString,
        },
        additionalInformation: {
            type: GraphQLString,
            resolve: (root) => root.additional_information,
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
        proponents: {
            type: new GraphQLList(Congressman),
            args: {
                count: {
                    type: GraphQLInt,
                    defaultValue: undefined,
                },
            },
            resolve: (root, {count}) => {
                return (root.proponents || []).slice(0, count);
            },
        },
        proponentsCount: {
            type: GraphQLInt,
            resolve: root => (root.proponents || []).length,
        },
        voteRange: {
            type: new GraphQLList(VoteRange),
        },
        speechRange: {
            type: new GraphQLList(SpeechRange),
        },
    },
});

export default IssueA;
