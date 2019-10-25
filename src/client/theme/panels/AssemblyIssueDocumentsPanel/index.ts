import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssueDocumentsPanel from './AssemblyIssueDocumentsPanel';

/**
 * @todo This query doesn't return the issue, only the issueID, so we don't know which category it belongs to
 *  (well... in can only be 'A'), so currently it's just hard-coded... this might need to change.
 */
const issueDocumentsQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        IssueDocuments(assembly: $assembly issue: $issue) {
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
                constituency {id name}
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

export default compose(
    graphql(issueDocumentsQuery, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        props: ({data: {error, loading, IssueDocuments}}: any) => {
            return {documents: {
                error,
                loading,
                documents: loading === false ? IssueDocuments : []
            }}
        },
        options: ({assembly, issue, category}: {assembly: number; issue: number; category: number}) => ({
            variables: {
                assembly,
                issue,
                category
            },
        }),
    })
)(AssemblyIssueDocumentsPanel)
