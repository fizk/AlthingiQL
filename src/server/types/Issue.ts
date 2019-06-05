import {GraphQLUnionType} from 'graphql';
import IssueA from './IssueA';
import IssueB from './IssueB';

export default new GraphQLUnionType({
    name: 'Issue',
    types: [IssueA, IssueB],
    resolveType: data => data.category === 'A' ? IssueA : IssueB,
});
