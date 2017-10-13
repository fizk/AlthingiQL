import {GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from "graphql";
import Issue from '../types/Issue'

export default {
    type: new GraphQLObjectType({
        name: 'AssemblyIssues',
        fields: {
            issues: {
                type: new GraphQLList(Issue),
                resolve: root => root.data

            },
            cursor: {
                type: GraphQLString,
                resolve: root => root.cursor
            },
        }
    }),
    args: {
        assembly: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        cursor: {
            type: GraphQLString
        }
    },
    resolve(root, {assembly, cursor}, {client}) {
        return client.getPagination(`/loggjafarthing/${assembly}/thingmal`, cursor).then(response => {
            return response;
        }).catch(console.log);
    }
}
