import {graphql} from 'react-apollo';
import compose from '../../utils/compose';
import gql from 'graphql-tag';
import IssuesMenu from './IssuesMenu';
import {
    CategorySpeechTime,
    Issue as IssueType, IssueCount,
    Person as PersonType,
    Session as SessionType,
    VoteSummary as VoteSummaryType
} from "../../../../@types";
// import {AssemblyCategorySummary} from '../../../../@types';

const assemblyQuery = gql`
    query assemblyIssue($assembly: Int!) {
        AssemblyCategorySummary(assembly: $assembly) {
            id
            superCategoryId
            title
            count
        }
        AssemblyIssuesSummary (assembly: $assembly) {
            types {count type {type typeName category typeSubName}}
        }
    }
`;


export default compose(
    graphql(assemblyQuery, {
        props: ({data: {loading, AssemblyIssuesSummary, AssemblyCategorySummary}}: any) => ({ //@todo `any`
            types: loading === false ? AssemblyIssuesSummary.types : undefined,
            categories: loading === false ? AssemblyCategorySummary : undefined,
            loading: loading,
        }),
        options: ({assembly}: {assembly: number}) => ({
            variables: {
                assembly,
            },
        }),
    }),
)(IssuesMenu);
