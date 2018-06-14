import {graphql, compose, gql} from 'react-apollo';
import IssueDocuments from './IssueDocuments';

const issueDocumentsQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        IssueDocuments(issue: $issue, assembly: $assembly) {
            id
            type
            url
            date
            votes {
                id
                type
                outcome
                yes
                no
                inaction
                committee
            }
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
        }
    }
`;

export default compose<any>( //@todo `any`
    graphql(issueDocumentsQuery, {
        props: (all: {data?: {loading: boolean, IssueDocuments: any}}) => ({ //@todo `any`
            documents: all.data.loading === false ? all.data.IssueDocuments : undefined,
            loading: all.data.loading,
        }),
        options: ({issue, assembly}: {issue: number, assembly: number}) => ({
            variables: {
                issue: issue,
                assembly: assembly
            }
        })
    })
)(IssueDocuments)
