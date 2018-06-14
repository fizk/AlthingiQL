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

export default compose<any>( //@todo `any`
    graphql(assembliesQuery, {
        props: (all: {data?: {
                loading: boolean,
                Person: any,
                CongressmanAssemblyPromote: any,
                CongressmanIssueTypePromotion: any,
                CongressmanAssemblySessions: any,
                CongressmanAssemblyVotes: any,
                CongressmanAssemblyCategorySpeechTime: any,
            }}) => ({
            person: all.data.loading === false ? all.data.Person : undefined,
            promotedIssues: all.data.loading === false ? all.data.CongressmanAssemblyPromote : undefined,
            issueCount: all.data.loading === false ? all.data.CongressmanIssueTypePromotion : undefined,
            sessions: all.data.loading === false ? all.data.CongressmanAssemblySessions : undefined,
            votes: all.data.loading === false ? all.data.CongressmanAssemblyVotes : undefined,
            categorySpeechTimes: all.data.loading === false ? all.data.CongressmanAssemblyCategorySpeechTime : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly, congressman}: {assembly: number, congressman: number}) => ({
            variables: {
                assembly: assembly,
                congressman: congressman,
            }
        })
    })
)(AssemblyCongressman)
