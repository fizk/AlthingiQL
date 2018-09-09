import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLNonNull} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Assembly from './Assembly';

import Committee from './Committee';
import Speech from './Speech';
import Document from './Document';
import Issue from './Issue';

export default new GraphQLObjectType({
    name: 'IssueProgress',
    fields: {
        issue: {
            type: new GraphQLNonNull(Issue),
            resolve: (root) => ({
                issue_id: root.issue_id,
            }),
        },
        assembly: {
            type: new GraphQLNonNull(Assembly),
            resolve: (root) => ({
                assembly_id: root.assembly_id,
            }),
        },
        committee: {
            type: Committee,
            resolve: root => {
                return root.committee_id
                    ? {
                        committee_id: root.committee_id,
                        committee_name: root.committee_name,
                    }
                    : null;
            },
        },
        speech: {
            type: Speech,
            resolve: root => {
                return root.speech_id
                    ? {speech_id: root.speech_id}
                    : null;
            },
        },
        document: {
            type: Document,
            resolve: root => ({document_id: root.document_id}),
        },
        title: {
            type: GraphQLString,
        },
        date: {
            type: new GraphQLNonNull(GraphQLDateTime),
            resolve: root => new Date(root.date),
        },
        type: {
            type: new GraphQLNonNull(GraphQLString),
        },
        completed: {
            type: new GraphQLNonNull(GraphQLBoolean),
        },
    },
});
