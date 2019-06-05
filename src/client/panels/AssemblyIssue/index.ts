import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import AssemblyIssue from './AssemblyIssue';

const assemblyIssueQuery = gql`
    query ($assembly: Int! $issue: Int! $category: String!) {
        AssemblyIssueProgress (assembly: $assembly, issue: $issue category: $category) {
            issue {
                ... on IssueInterface {
                    id
                    category
                }
            }
            assembly {id}
            committee {id name}
            speech {id}
            document {id}
            date
            title
            type
            completed
        }
        AssemblyIssue (assembly: $assembly issue: $issue category: $category) {
            __typename
            ... on IssueInterface {
                id
                name
                type
                typeName
                assembly {id}
                speakers {
                    congressman {
                        id
                        name
                        avatar {templateSrc}
                        party {
                            id
                            name
                            color
                        }
                    }
                    value
                }
                speechRange {
                    count
                    date
                }
            }
            ... on IssueA {...moreissueA}

        }
    }
    fragment moreissueA on IssueA {
        status
        goal
        subName
        typeSubName
        question
        majorChanges
        changesInLaw
        costsAndRevenues
        deliveries
        additionalInformation
        date
        proponents {
            id
            name
            avatar {templateSrc}
            party {
                id
                name
                color
            }
        }
        voteRange {
            count
            date
        }
    }
`;

type Response = {
    IssueSpeeches: any[];
};

type InputProps = {
    issue: number;
    assembly: number;
    category: string;
};

type Variables = {
    issue: number;
    assembly: number;
    category: string;
};

interface Props {
    // loading?: any;
    // error?: any;
    issue: any[];
    progress: any[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyIssueQuery, {
        props: ({data: {loading, AssemblyIssue, AssemblyIssueProgress}}: any) => ({ //@todo `any`
            issue: loading === false ? AssemblyIssue : undefined,
            progress: loading === false ? AssemblyIssueProgress : undefined,
            loading: loading,
        }),
        options: ({issue, assembly, category}) => ({
            variables: {
                issue,
                assembly,
                category,
            },
        }),
    }),
)(AssemblyIssue);
