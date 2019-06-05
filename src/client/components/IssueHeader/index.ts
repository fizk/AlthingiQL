import {graphql, compose} from 'react-apollo';
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
    query assemblyIssue($assembly: Int! $issue: Int! $category: String!) {
        AssemblyIssue (assembly: $assembly issue: $issue category: $category) {
            __typename
            ...on IssueInterface {
                id
                assembly {id}
                category
                name
                type
                typeName
            }
            ... on IssueA {
                subName
                typeSubName
                status
                question
                goal
                date
            }
        }
    }
`;

type Response = {
    AssemblyIssue: any; //@todo
};

type InputProps = {
    assembly: number;
    issue: number;
    category: string;
};

type Variables = {
    assembly: number;
    issue: number;
    category: string;
};

interface Props {
    // loading?: any;
    // error?: any;
    issue: any; //@todo
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyQuery, {
        props: ({data: {loading, AssemblyIssue}}: any) => ({
            issue: loading === false ? AssemblyIssue : undefined,
            loading: loading,
        }),
        options: ({assembly, issue, category}) => ({
            variables: {
                assembly,
                issue,
                category,
            },
        }),
    }),
)(IssueHeader);
