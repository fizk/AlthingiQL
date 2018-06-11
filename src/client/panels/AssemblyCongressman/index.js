import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import AssemblyCongressman from './AssemblyCongressman';

const assembliesQuery = gql`
    query congressmanAssemblySessions ($congressman: Int! $assembly: Int!) {
        Person(id: $congressman) {
            id
            name
            avatar {templateSrc}
        }
        CongressmanAssemblySessions(congressman: $congressman assembly: $assembly) {
            id
            type
            period {from to}
            constituency {id name}
        }
        CongressmanAssemblyVotes (congressman: $congressman assembly: $assembly) {
            count
            vote
        }
        CongressmanAssemblyPromote(congressman: $congressman, assembly: $assembly) {
            id
            assembly {id}
            question
            name
            subName
            type
            typeName
            typeSubName
            status
            goal
        }
        CongressmanIssueTypePromotion(assembly: $assembly congressman: $congressman) {
            order
            type
            typeName
            typeSubName
            documentType
            count
        }
        CongressmanAssemblyCategorySpeechTime (assembly: $assembly congressman: $congressman) {
            category {
                id
            }
            superCategory {
                id
            }
            title
            time
        }
    }
`;

export default compose(
    graphql(assembliesQuery, {
        props: all => ({
            person: all.data.loading === false ? all.data.Person : undefined,
            promotedIssues: all.data.loading === false ? all.data.CongressmanAssemblyPromote : undefined,
            issueCount: all.data.loading === false ? all.data.CongressmanIssueTypePromotion : undefined,
            sessions: all.data.loading === false ? all.data.CongressmanAssemblySessions : undefined,
            votes: all.data.loading === false ? all.data.CongressmanAssemblyVotes : undefined,
            categorySpeechTimes: all.data.loading === false ? all.data.CongressmanAssemblyCategorySpeechTime : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly, congressman}) => ({
            variables: {
                assembly: assembly,
                congressman: congressman,
            }
        })
    })
)(AssemblyCongressman)
