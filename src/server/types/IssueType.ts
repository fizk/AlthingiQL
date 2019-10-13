import {GraphQLEnumType} from 'graphql';

export default new GraphQLEnumType({
    name: 'CategoryType',
    values: {
        n: {value: 'n'},
        b: {value: 'b'},
        l: {value: 'l'},
        m: {value: 'm'},
        q: {value: 'q'},
        s: {value: 's'},
        v: {value: 'v'},
        a: {value: 'a'},
        f: {value: 'f'},
        ff: {value: 'ff'},
        ft: {value: 'ft'},
        um: {value: 'um'},
        ud: {value: 'ud'},
        uu: {value: 'uu'},
    }
})
