import {GraphQLString, GraphQLObjectType, GraphQLInt, GraphQLList} from 'graphql';
import Party from './Party';
import Assembly from './Assembly';
import Image from './Image';
import Constituency from "./Constituency";
import Ministry from "./Ministry";

export default new GraphQLObjectType({
    name: 'Congressman',
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
        birth: {
            type: GraphQLString,
        },
        party: {
            name: 'party',
            type: Party,
        },
        parties: {
            name: 'party',
            type: GraphQLList(Party),
        },
        ministries: {
            name: 'ministries',
            type: GraphQLList(Ministry),
        },
        constituency: {
            type: Constituency
        },
        assembly: {
            type: Assembly,
        },
        avatar: {
            type: Image,
            resolve: (root) => {
                return {
                    src: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                    templateSrc: process.env.IMAGE_SERVER
                        ? `${process.env.IMAGE_SERVER}/unsafe/{size}/smart/www.althingi.is/myndir/thingmenn-cache/${root.congressman_id}/${root.congressman_id}-220.jpg` // tslint:disable-line
                        : `https://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                };
            },
        },
    },
});
