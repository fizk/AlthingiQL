import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";
import Party from "../types/Party";

export default {
    type: Party,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve(root: null, {id}:  {id: number}, {client}: {client: Client}) {
        return client.get(`/thingflokkar/${id}`);
    },
};
