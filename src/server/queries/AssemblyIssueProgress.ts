import {GraphQLInt, GraphQLNonNull, GraphQLList} from 'graphql';
import IssueProgress from '../types/IssueProgress';

export default {
    type: new GraphQLList(IssueProgress),
    args: {
        issue: {
            type: new GraphQLNonNull(GraphQLInt),
        },
        assembly: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve(root, {issue, assembly}, {client}) {
        return client.get(`/loggjafarthing/${assembly}/thingmal/${issue}/ferli`);
    },
};
