import Person from '../types/Person'
import {GraphQLInt, GraphQLNonNull} from "graphql";

export default {
    type: Person,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve(root, params, {client}) {
        return client.get(`/thingmenn/${params.id}`);
    }
}

