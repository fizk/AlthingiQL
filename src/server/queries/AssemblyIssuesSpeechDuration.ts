import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from 'graphql';
import IssueValue from '../types/IssueValue';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(IssueValue),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        size: {
            type: GraphQLInt,
        },
        order: {
            type: GraphQLString,
        },
    },

    resolve(root: any, {assembly, size, order}: {assembly: number; size: number; order: string}, {client}: {client: Client}) {
        const queryArray = [];

        if (order) {
            queryArray.push(`rod=${order}`);
        }

        if (size) {
            queryArray.push(`fjoldi=${size}`);
        }

        const queryString = queryArray.length > 0
            ? `?${queryArray.join('&')}`
            : '';

        return client.get(`/loggjafarthing/${assembly}/thingmal/raedutimar${queryString}`)
            .then(json => (json as Array<any>).map(item => ({
                issue: item,
                value: item.value,
            })));
    },
};
