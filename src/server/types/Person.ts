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
                return {
                    src: `http://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                    templateSrc: process.env.IMAGE_SERVER
                        ? `${process.env.IMAGE_SERVER}/unsafe/{size}/smart/https://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg` // tslint:disable-line
                        : `https://www.althingi.is/myndir/mynd/thingmenn/${root.congressman_id}/org/mynd.jpg`,
                };
            },
        },
    },
});
