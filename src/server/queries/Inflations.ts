import {GraphQLList} from 'graphql';
import Inflation from '../types/Inflation';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Inflation),

    resolve(root: any, params: undefined, {client}: {client: Client}) {
        return client.get(`/verdbolga`);
    },
};
