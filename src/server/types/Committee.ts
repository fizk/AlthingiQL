import {GraphQLInt, GraphQLObjectType, GraphQLString} from 'graphql';
import {DataSource} from '../../../@types'

const Committee: GraphQLObjectType =  new GraphQLObjectType<DataSource.Committee>({
    name: 'Committee',
    fields: () => ({
        id: {
            type: GraphQLInt,
            resolve: ({committee_id}) => committee_id,
        },
        name: {
            type: GraphQLString,
            resolve: ({name}) => name,
        },
    }),
});

export default Committee;
