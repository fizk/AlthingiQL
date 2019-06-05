import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import PlenaryAgendaItem from '../types/PlenaryAgendaItem';
import {Client} from "../../../@types";

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

  resolve(root: any, {assembly, plenary}: {assembly: number, plenary: number}, {client}: {client: Client}) {
      return client.get(`/loggjafarthing/${assembly}/thingfundir/${plenary}/lidir`);
    },
};
