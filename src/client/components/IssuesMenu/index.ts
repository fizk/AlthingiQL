import {graphql, compose, gql} from 'react-apollo';
import IssuesMenu from './IssuesMenu';

type AssemblyCategorySummary = {
    id: number
    superCategoryId: number
    title: string
    count: number
}

const assemblyQuery = gql`
    query assemblyIssue($assembly: Int!) {
        AssemblyCategorySummary(assembly: $assembly) {
            id
            superCategoryId
            title
            count
        }
        AssemblySummary(assembly: $assembly) {
            types {
                count
                type
                typeName
                typeSubName
            }
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(assemblyQuery, {
        props: (all: {data?: {loading: boolean, AssemblyCategorySummary: AssemblyCategorySummary, AssemblySummary: any}}) => ({ //@todo `any`
            types: all.data.loading === false ? all.data.AssemblySummary.types : undefined,
            categories: all.data.loading === false ? all.data.AssemblyCategorySummary: undefined,
            loading: all.data.loading
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly: assembly,
            }
        })
    })
)(IssuesMenu)
