import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import Assembly from './Assembly';
import Congressman from './Congressman';
import CongressmanValue from './CongressmanValue';

export default new GraphQLObjectType({
    name: 'Issue',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.issue_id,
        },
        assembly: {
            type: Assembly,
            resolve: (root) => ({ //@todo it becomes to slow to `fetch` each assembly
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
            type: new GraphQLList(new GraphQLObjectType({
                name: 'VoteRange',
                fields: {
                    count: {
                        type: GraphQLInt,
                    },
                    date: {
                        type: GraphQLString,
                    },
                },
            })),
        },
        speechRange: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'SpeechRange',
                fields: {
                    count: {
                        type: GraphQLInt,
                    },
                    date: {
                        type: GraphQLString,
                    },
                },
            })),
        },
    },
});
