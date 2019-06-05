import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import IssueDocuments from './IssueDocuments';
import {Vote as VoteType} from "../../../../@types";

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


type Response = {
    IssueDocuments: any[];
};

type InputProps = {
    issue: number,
    assembly: number
};

type Variables = {
    issue: number;
    assembly: number;
    category: 'A' | 'B',
};

interface Props {
    // loading?: any;
    // error?: any;
    documents: any[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(issueDocumentsQuery, {
        props: ({data: {loading, IssueDocuments}}: any) => ({ //@todo `any`
            documents: loading === false ? IssueDocuments : undefined,
            loading: loading,
        }),
        options: ({issue, assembly}) => ({
            variables: {
                issue,
                assembly,
                category: 'A',
            },
        }),
    }),
)(IssueDocuments);
