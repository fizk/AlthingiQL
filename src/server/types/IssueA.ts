import {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} from 'graphql';
import {GraphQLDateTime} from 'graphql-iso-date';
import Assembly from './Assembly';
import CongressmanValue from './CongressmanValue';
import IssueInterface from './IssueInterface';
import {DataSource} from '../../../@types';
import Type from "./Type";
import Proponent from "./Proponent";

const IssueA: GraphQLObjectType = new GraphQLObjectType<DataSource.Issue>({
    name: 'IssueA',
    interfaces: [IssueInterface],
    fields: () => ({
        id: {
            name: 'id',
            type: GraphQLInt,
            resolve: ({issue_id}) => issue_id,
        },
        assembly: {
            type: Assembly,
            resolve: ({assembly_id}) => ({assembly_id}),
        },
        name: {
            type: GraphQLString,
        },
        subName: {
            type: GraphQLString,
            resolve: ({sub_name}) => sub_name,
        },
        type: {
            type: Type,
            resolve: (root) => ({...root}),
        },
        documentType: {
            type: GraphQLString,
            resolve: ({document_type}) => document_type,
        },
        documentURL: {
            type: GraphQLString,
            resolve: ({document_url}) => document_url,
        },
        status: {
            type: GraphQLString,
        },
        question: {
            type: GraphQLString,
        },
        goal: {
            type: GraphQLString,
        },
        majorChanges: {
            type: GraphQLString,
            resolve: ({major_changes}) => major_changes,
        },
        changesInLaw: {
            type: GraphQLString,
            resolve: ({changes_in_law}) => changes_in_law,
        },
        costsAndRevenues: {
            type: GraphQLString,
            resolve: ({costs_and_revenues}) => costs_and_revenues,
        },
        deliveries: {
            type: GraphQLString,
        },
        additionalInformation: {
            type: GraphQLString,
            resolve: ({additional_information}) => additional_information,
        },
        date: {
            type: GraphQLDateTime,
        },
        speechCount: {
            type: GraphQLInt,
            resolve: ({speech_count}) => speech_count
        },
        speechTime: {
            type: GraphQLInt,
            resolve: ({speech_time}) => speech_time
        },
        speakers: {
            type: new GraphQLList(CongressmanValue),
            resolve(root) {
                return root.speakers.map(item => ({
                    congressman: item,
                    value: item.value,
                }));
            },
        },
        proponents: {
            type: new GraphQLList(Proponent),
            args: {
                count: {
                    type: GraphQLInt,
                    defaultValue: undefined,
                },
            },
            resolve: ({proponents}, {count}) => {
                return (proponents || []).slice(0, count);
            },
        },
        proponentsCount: {
            type: GraphQLInt,
            resolve: ({proponents}) => (proponents || []).length,
        },
        links: {
            type: new GraphQLList(IssueA),
            resolve: (root, _, {client}) => {
                return Promise.all(root.issue_links.map((item) => {
                    return client.get(`/loggjafarthing/${item.assembly_id}/thingmal/${item.category}/${item.issue_id}`)
                }))
            }
        }
    }),
});

export default IssueA;
