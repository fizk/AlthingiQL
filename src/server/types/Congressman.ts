import {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Party from './Party';
import Session from './Session';

export default new GraphQLObjectType({
    name: 'Congressman',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.congressman_id
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        party: {
            name: 'party',
            type: Party,
        },
        sessions: {
            name: 'sessions',
            type: new GraphQLList(Session),
            resolve(root, params, {client}) {
                return client.get(`/loggjafarthing/${root.assembly_id}/thingmenn/${root.congressman_id}/thingseta`);
            }
        }
    }
})
