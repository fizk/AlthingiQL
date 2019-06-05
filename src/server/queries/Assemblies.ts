import Assembly from '../types/Assembly';
import {GraphQLList} from 'graphql';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Assembly),

    resolve(root: any, params: any, {client}: {client: Client}) {
        return client.get('/loggjafarthing');
    },
};
