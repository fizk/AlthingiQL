import {graphql} from 'react-apollo';
import compose from '../../../utils/compose';
import gql from 'graphql-tag';
import AssemblyIssuesPage from './AssemblyIssuesPage';

const queryAssemblyIssuesSummary = gql`
    query queryAssemblyIssuesSummary ($assembly: Int!) {
        AssemblyIssuesSummary (assembly: $assembly) {
            types {count type {type typeName category typeSubName}}
            categories {count category {id title}}
        }
    }
`;


export default compose(
    graphql(queryAssemblyIssuesSummary, {
        props: ({data: {error, loading, AssemblyIssuesSummary}}: any) => {
            return {
                options: loading === false ? {
                    error,
                    loading,
                    types: AssemblyIssuesSummary.types,
                    categories: AssemblyIssuesSummary.categories
                } : {
                    error,
                    loading,
                    types: [],
                    categories: []
                }
            }
        },
        options: ({assembly, filter}: {assembly: number; filter: URLSearchParams}) => ({
            variables: {
                assembly,
                filter,
                types: filter.has('tegund') ? filter.get('tegund')!.split(',') : null,
            },
        }),
    })
)(AssemblyIssuesPage);
