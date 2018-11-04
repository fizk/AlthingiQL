import {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Assembly from './Assembly';
import PlenaryAgendaItem from './PlenaryAgendaItem';

export default new GraphQLObjectType({
    name: 'Plenary',
    fields: {
        id: {
            type: GraphQLInt,
            resolve: root => root.plenary_id,
        },
        assembly: {
            type: Assembly,
            resolve: (root) => ({ //@todo it becomes to slow to `fetch` each assembly
                assembly_id: root.assembly_id,
            }),
        },
        from: {
            type: GraphQLString,
        },
        to: {
            type: GraphQLString,
        },
        name: {
            type: GraphQLString,
        },
        agenda: {
            type: new GraphQLList(PlenaryAgendaItem),
            resolve: (root, _, {client}) => {
                return client.get(`/loggjafarthing/${root.assembly_id}/thingfundir/${root.plenary_id}/lidir`);
            },
        },
    },
});
