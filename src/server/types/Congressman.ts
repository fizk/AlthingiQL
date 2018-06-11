import {GraphQLString, GraphQLObjectType, GraphQLInt} from 'graphql';
import Party from './Party';
import Assembly from "./Assembly";
import Image from "./Image";

export default new GraphQLObjectType({
    name: 'Congressman',
    fields: {
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: (root) => root.congressman_id
        },
        name: {
            name: 'name',
            type: GraphQLString
        },
        party: {
            name: 'party',
            type: Party,
        },
        assembly: {
            type: Assembly
        },
        avatar: {
            type: Image,
            resolve: (root) => {
                return {
                    src: '',
                    templateSrc: '',
                }
                // if (typeof __IMAGE_SERVER__  === 'undefined') {
                //     return {
                //         src: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                //         templateSrc: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                //     }
                // } else {
                //     return {
                //         src: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                //         templateSrc: (__IMAGE_SERVER__ || '') + `/unsafe/{width}x{height}/smart/http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                //     }
                // }
            }
        }
    }
})
