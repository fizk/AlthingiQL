import {GraphQLObjectType, GraphQLInt, GraphQLList, GraphQLString, GraphQLFloat} from 'graphql';
import Party from './Party';

export default new GraphQLObjectType({
    name: 'AssemblySummary',
    fields: {
        bills: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'Bills',
                fields: {
                    count: {
                        type: GraphQLInt,
                    },
                    status: {
                        type: GraphQLString,
                    },
                },
            })),
        },
        governmentBills: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'GovernmentBills',
                fields: {
                    count: {
                        type: GraphQLInt,
                    },
                    status: {
                        type: GraphQLString,
                    },
                },
            })),
            resolve: root => root.government_bills,
        },
        types:  {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'Types',
                fields: {
                    count: {
                        type: GraphQLInt,
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
                },
            })),
        },
        votes: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'Votes',
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
        speeches: {
            type: new GraphQLList(new GraphQLObjectType({
                name: 'SpeechCount',
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
