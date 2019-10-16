import {GraphQLList} from 'graphql';
import Cabinet from '../types/Cabinet';
import {Client} from "../../../@types";

export default {
    type: new GraphQLList(Cabinet),

    resolve(root: any, params: any, {client}: {client: Client}) {
        return client.get('/raduneyti');
    },
};
