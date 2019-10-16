import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import IssueHeader from './IssueHeader';
import {
    CategorySpeechTime,
    Issue as IssueType, IssueCount,
    Person as PersonType,
    Session as SessionType,
    VoteSummary as VoteSummaryType
} from '../../../../@types';

const assemblyQuery = gql`
    query assemblyIssue($assembly: Int! $issue: Int! $category:  IssueCategory!) {
        AssemblyIssue (assembly: $assembly issue: $issue category: $category) {
            __typename
            ...on IssueInterface {
                id
                assembly {id}
                name
                type {
                    category
                    type
                    typeName
                    typeSubName
                }
            }
            ... on IssueA {
                subName
                status
                question
                goal
                date
            }
        }
    }
`;

export default compose(
    graphql(assemblyQuery, {
        props: ({data: {loading, AssemblyIssue}}: any) => ({
            issue: loading === false ? AssemblyIssue : undefined,
            loading: loading,
        }),
        options: ({assembly, issue, category}: any) => ({
            variables: {
                assembly: Number(assembly),
                issue: Number(issue),
                category,
            },
        }),
    }),
)(IssueHeader);
