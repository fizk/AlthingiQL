import Person from '../types/Person';
import {GraphQLInt, GraphQLNonNull} from 'graphql';
import {Client} from "../../../@types";

export default {
    type: Person,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve(root: null, {id}:  {id: number}, {client}: {client: Client}) {
        return client.get(`/thingmenn/${id}`);
    },
};
