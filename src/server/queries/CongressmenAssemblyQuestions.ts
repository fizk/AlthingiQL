import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import CongressmanValue from '../types/CongressmanValue';
import {Client} from "../../../@types";

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

    resolve(root: any, {assembly, order, size}: {assembly: number, order: string, size: number}, {client}: {client: Client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmenn/fyrirspurnir?rod=${order}&fjoldi=${size}`)
            .then(json => (json as Array<any>).map(congressman => ({
                congressman,
                value: congressman.value,
            })));
    },
};
