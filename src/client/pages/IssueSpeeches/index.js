import React from 'react';
import {graphql, compose, gql} from 'react-apollo';
import IssueSpeeches from './IssueSpeeches';

const issueSpeechesQuery = gql`
    query ($assembly: Int! $issue: Int!) {
        IssueSpeeches(issue: $issue assembly: $assembly) {
            id
            from
            to
            congressmanType
            congressman {
                id
                name
                party {
                    id
                    name
                    color
                }
            }
            text
        }
    }
`;

export default compose(
    graphql(issueSpeechesQuery, {
        props: all => ({
            speeches: all.data.loading === false ? all.data.IssueSpeeches : undefined,
            loading: all.data.loading,
        }),
        options: ({issue, assembly}) => ({
            variables: {
                issue: issue,
                assembly: assembly
            }
        })
    })
)(IssueSpeeches)
