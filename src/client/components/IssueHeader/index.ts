import {graphql, compose, gql} from 'react-apollo';
import IssueHeader from './IssueHeader';

type AssemblyIssue = {
    id: number
    assembly?: {id: number}
    category?: string
    name: string
    subName?: string
    type?: string
    typeName: string
    typeSubName?: string
    status: string
    question?: string
    goal?: string
    date: string
}

const assemblyQuery = gql`
    query assemblyIssue($assembly: Int! $issue: Int!) {
        AssemblyIssue (assembly: $assembly issue: $issue) {
            id
            assembly {id}
            category
            name
            subName
            type
            typeName
            typeSubName
            status
            question
            goal
            date
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(assemblyQuery, {
        props: (all: {data?: {loading: boolean, AssemblyIssue: AssemblyIssue}}) => ({
            issue: all.data.loading === false ? all.data.AssemblyIssue : undefined,
            loading: all.data.loading
        }),
        options: ({assembly, issue}: {assembly: number, issue: number}) => ({
            variables: {
                assembly: assembly,
                issue: issue,
            }
        })
    })
)(IssueHeader)
