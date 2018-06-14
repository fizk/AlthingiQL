import {GraphQLObjectType, GraphQLInt, GraphQLNonNull} from 'graphql';
import Congressman from './Congressman';

export default new GraphQLObjectType({
    name: 'CongressmanValue',
    description: 'Every time a congressman has a value attached to him/her, like speech time or issue count',
    fields: () => ({
        congressman: {
            name: 'congressman',
            type: new GraphQLNonNull(Congressman),
        },
        value: {
            name: 'value',
            type: GraphQLInt,
        },
    }),
});
