import {graphql, compose} from 'react-apollo';
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
        AssemblySummary(assembly: $assembly) {
            types {
                count
                type
                typeName
                typeSubName
            }
        }
    }
`;

type Response = {
    AssemblySummary: any; //@todo
    AssemblyCategorySummary: any; //@todo
};

type InputProps = {
    assembly: number;
};

type Variables = {
    assembly: number;
};

interface Props {
    // loading?: any;
    // error?: any;
    types: any;
    categories: any;
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assemblyQuery, {
        // props: (all: {data?: {
        //     loading: boolean, AssemblyCategorySummary?: any, AssemblySummary?: any,
        // }}) => ({ //@todo `any`
        props: ({data: {loading, AssemblySummary, AssemblyCategorySummary}}: any) => ({ //@todo `any`
            types: loading === false ? AssemblySummary.types : undefined,
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
