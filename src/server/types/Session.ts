import {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Party from './Party';
import Period from "./Period";
import Constituency from "./Constituency";

export default new GraphQLObjectType({
    name: 'Session',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve (root) {
                return root.session_id
            }
        },
        type: {
            name: 'type',
            type: GraphQLString
        },
        constituency: {
            name: 'constituency',
            type: Constituency,
            resolve(root, params, {client}) {
                return client.get(`/kjordaemi/${root.constituency_id}`)
            }
        },
        party: {
            name: 'party',
            type: Party,
            resolve (root, params, {client}) {
                return client.get(`/thingflokkar/${root.party_id}`).catch(error => undefined);
            }
        },
        period: {
            name: 'period',
            type: Period,
            resolve (root) {
                return {
                    from: root.from,
                    to: root.to,
                }
            }
        }
    },
})
