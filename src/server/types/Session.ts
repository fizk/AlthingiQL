import {GraphQLString, GraphQLObjectType, GraphQLInt} from 'graphql';
import Party from './Party';
import Period from './Period';
import Constituency from './Constituency';
import Congressman from './Congressman';
import Assembly from './Assembly';

export default new GraphQLObjectType({
    name: 'Session',
    fields: () => ({
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve(root) {
                return root.session_id;
            },
        },
        congressman: {
            type: Congressman,
            resolve: root => ({congressman_id: root.congressman_id}),
        },
        assembly: {
            type: Assembly,
            resolve: root => ({assembly_id: root.assembly_id}),
        },
        constituency: {
            name: 'constituency',
            type: Constituency,
            resolve(root, params, {client}) {
                return client.get(`/kjordaemi/${root.constituency_id}`);
            },
        },
        party: {
            name: 'party',
            type: Party,
            resolve(root, params, {client}) {
                return client.get(`/thingflokkar/${root.party_id}`).catch(error => undefined);
            },
        },
        period: {
            type: Period,
            resolve: root => ({from: root.from, to: root.to}),
        },
        type: {
            name: 'type',
            type: GraphQLString,
        },
        abbr: {
            type: GraphQLString,
        },
    }),
});
