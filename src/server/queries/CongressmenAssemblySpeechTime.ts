import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import CongressmanValue from '../types/CongressmanValue';

export default {
    type: new GraphQLList(CongressmanValue),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        order: {
            type: new GraphQLNonNull(GraphQLString),
        },
        size: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

    resolve(root, {assembly, order, size}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/raedutimar?rod=${order}&fjoldi=${size}`)
            .then(json => json.map(congressman => ({
                congressman,
                value: congressman.value,
            })));
    },
};
