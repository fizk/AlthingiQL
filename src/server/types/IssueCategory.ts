import {GraphQLEnumType} from 'graphql';

export default new GraphQLEnumType({
    name: 'IssueCategory',
    values: {
        A: {
            value: 'A'
        },
        B: {
            value: 'B'
        },
        a: {
            value: 'A'
        },
        b: {
            value: 'B'
        },
    }
})
