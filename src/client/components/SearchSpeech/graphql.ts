import gql from 'graphql-tag';

export const searchIssueSpeeches = gql`
    query searchIssueSpeeches ($assembly: Int! $issue: Int! $query: String!) {
        SearchIssueSpeeches(issue: $issue, assembly: $assembly, query: $query) {
            id
            assembly {id}
            issue {id}
            congressmanType
            period {from to}
            congressman {
                id
                name
                avatar {
                    templateSrc
                }
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
