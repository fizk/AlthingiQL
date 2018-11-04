import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import PlenaryAgendaItem from '../types/PlenaryAgendaItem';

export default {
    type: new GraphQLList(PlenaryAgendaItem),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        plenary: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },

  resolve(root, {assembly, plenary}, {client}) {
      return client.get(`/loggjafarthing/${assembly}/thingfundir/${plenary}/lidir`);
    },
};
