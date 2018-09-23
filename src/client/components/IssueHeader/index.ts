import {graphql, compose, gql} from 'react-apollo';
import IssueHeader from './IssueHeader';
import {Issue as IssueType} from '../../../../@types';

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
        props: (all: {data?: {loading: boolean, AssemblyIssue: IssueType}}) => ({
            issue: all.data.loading === false ? all.data.AssemblyIssue : undefined,
            loading: all.data.loading,
        }),
        options: ({assembly, issue}: {assembly: number, issue: number}) => ({
            variables: {
                assembly,
                issue,
            },
        }),
    }),
)(IssueHeader);
