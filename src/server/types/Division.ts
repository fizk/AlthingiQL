import {GraphQLObjectType, GraphQLList} from 'graphql';
import Party from './Party';

export default new GraphQLObjectType({
    name: 'Division',
    fields: {
        majority: {
            name: 'majority',
            type: new GraphQLList(Party),
        },
        minority: {
            name: 'minority',
            type: new GraphQLList(Party),
        },

    },
});
