import {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLFloat} from 'graphql';
import Party from './Party';
import DateCount from "./DateCount";

export default new GraphQLObjectType({
    name: 'AssemblyStatistics',
    fields: {

        votes: {
            type: new GraphQLList(DateCount),
        },
        speeches: {
            type: new GraphQLList(DateCount),
        },
        averageAge: {
            type: GraphQLFloat,
            resolve: ({average_age}) => average_age,
        },
        parties: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'PartyTimes',
                fields: {
                    party: {
                        type: Party,
                        resolve: root => root,
                    },
                    time: {
                        type: GraphQLInt,
                        resolve: root => root.total_time,
                    },
                },

            })),
            resolve: root => root.party_times,
        },
        election: {
            type: new GraphQLObjectType({
                name: 'Election',
                fields: {
                    id: {
                        type: GraphQLInt,
                        resolve: root => root.election_id,
                    },
                    date: {
                        type: GraphQLString,
                    },
                    title: {
                        type: GraphQLString,
                    },
                    description: {
                        type: GraphQLString,
                    },
                },
            }),
        },
        electionResults: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'ElectionResult',
                fields: {
                    party: {
                        type: Party,

                        resolve(root) {
                            const {seat, results, ...party} = root;
                            return party;
                        },
                    },
                    results: {
                        type: new GraphQLObjectType({
                            name: 'Results',
                            fields: {
                                seats: {
                                    type: GraphQLInt,
                                },
                                result: {
                                    type: GraphQLFloat,
                                },
                            },
                        }),

                        resolve(root) {
                            const {seat, results, ...party} = root;
                            return {seats: seat, result: results};
                        },
                    },
                },
            })),
            resolve: root => root.election_results,
        },
    },
});
