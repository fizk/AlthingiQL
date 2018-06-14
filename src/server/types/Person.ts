import {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Party from './Party';
import Image from './Image';

export default new GraphQLObjectType({
    name: 'Person',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.congressman_id,
        },
        name: {
            name: 'name',
            type: GraphQLString,
        },
        parties: {
            name: 'parties',
            type: new GraphQLList(Party),
        },
        avatar: {
            type: Image,
            resolve: (root) => {
                // if (typeof __IMAGE_SERVER__  === 'undefined') {
                    return {
                        src: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                        templateSrc: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                    };
                // } else {
                //     return {
                //         src: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                //         templateSrc: (__IMAGE_SERVER__ || '') + `/unsafe/{width}x{height}/smart/
                // http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                //     }
                // }
            },
        },
    },
});
