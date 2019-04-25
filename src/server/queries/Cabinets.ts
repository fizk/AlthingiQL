import {GraphQLList} from 'graphql';
import Cabinet from '../types/Cabinet';

export default {
    type: new GraphQLList(Cabinet),

    resolve(root, params, {client}) {
        return client.get('/raduneyti');
    },
};
