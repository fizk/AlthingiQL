import {GraphQLEnumType} from 'graphql';

export default new GraphQLEnumType({
    name: 'CongressmanSessionType',
    values: {
        withSubstitute: {value: 'með varamann'},
        substitute: {value: 'varamaður'},
        mp: {value: 'þingmaður'},
    }
})
