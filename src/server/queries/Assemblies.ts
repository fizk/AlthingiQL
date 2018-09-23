import Assembly from '../types/Assembly';
import {GraphQLList} from 'graphql';

export default {
    type: new GraphQLList(Assembly),

    resolve(root, params, {client}) {
        return client.get('/loggjafarthing');
    },
};
