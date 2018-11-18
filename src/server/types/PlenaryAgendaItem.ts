import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';
import Assembly from './Assembly';
import Congressman from './Congressman';
import Issue from './Issue';
// import Plenary from "./Plenary";

export default new GraphQLObjectType({
    name: 'PlenaryAgendaItem',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.item_id,
        },
        plenaryId: {
            type: GraphQLInt,
            resolve: root => root.plenary_id,
        },
        // plenary: {
        //     type: Plenary,
        //     resolve: (root) => ({ //@todo it becomes to slow to `fetch` each assembly
        //         plenary_id: root.plenary_id,
        //     }),
        // },
        assembly: {
            type: Assembly,
            resolve: (root) => ({ //@todo it becomes to slow to `fetch` each assembly
                assembly_id: root.assembly_id,
            }),
        },
        category: {
            type: GraphQLString,
        },
        iterationType: {
            type: GraphQLString,
            resolve: root => root.iteration_type,
        },
        iterationContinue: {
            type: GraphQLString,
            resolve: root => root.iteration_continue,
        },
        iterationComment: {
            type: GraphQLString,
            resolve: root => root.iteration_comment,
        },
        comment: {
            type: GraphQLString,
            resolve: root => root.item_id,
        },
        commentType: {
            type: GraphQLString,
            resolve: root => root.comment_type,
        },
        posedId: {
            type: GraphQLInt,
            resolve: root => root.posed_id,
        },
        answerer: {
            type: GraphQLString,
        },
        issue: {
            type: Issue,
        },
        posedCongressman: {
            type: Congressman,
            resolve: root => root.posed_congressman,
        },
        answererCongressman: {
            type: Congressman,
            resolve: root => root.answerer_congressman,
        },
        counterAnswererCongressman: {
            type: Congressman,
            resolve: root => root.counter_answerer_congressman,
        },
        instigatorCongressman: {
            type: Congressman,
            resolve: root => root.instigator_congressman,
        },
    },
});
