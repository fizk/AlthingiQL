import {GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import Issue from '../types/Issue'
import Cursor, {CursorInput} from "../types/Cursor";
import IssueValue from "../types/IssueValue";

export default {
    type: new GraphQLList(IssueValue),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        size: {
            type: GraphQLInt
        },
        order: {
            type: GraphQLString,
        },
    },
    resolve(root, {assembly, size, order}, {client}) {
        const queryArray = [];

        if (order) {
            queryArray.push(`rod=${order}`)
        }

        if (size) {
            queryArray.push(`fjoldi=${size}`)
        }

        const queryString = queryArray.length > 0
            ? `?${queryArray.join('&')}`
            : '';

        return client.get(`/loggjafarthing/${assembly}/thingmal/raedutimar${queryString}`)
            .then(json => json.map(item => ({
                issue: item,
                value: item.value
            })))
    }
}
