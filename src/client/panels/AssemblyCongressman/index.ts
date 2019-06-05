import {graphql, compose} from 'react-apollo';
import gql from 'graphql-tag';
import AssemblyCongressman from './AssemblyCongressman';
import {
    CategorySpeechTime,
    Congressman as CongressmanType, Issue as IssueType, IssueCount,
    Person as PersonType,
    Session as SessionType,
    VoteSummary as VoteSummaryType
} from "../../../../@types";

const assembliesQuery = gql`
    query congressmanAssemblySessions ($congressman: Int! $assembly: Int!) {
        Person(id: $congressman) {
            id
            name
            avatar {templateSrc}
        }
        CongressmanAssemblySessions(congressman: $congressman assembly: $assembly) {
            id
            type
            period {from to}
            constituency {id name}
        }
        CongressmanAssemblyVotes (congressman: $congressman assembly: $assembly) {
            count
            vote
        }
        CongressmanAssemblyPromote(congressman: $congressman, assembly: $assembly) {
            id
            assembly {id}
            question
            name
            subName
            type
            typeName
            typeSubName
            status
            goal
        }
        CongressmanIssueTypePromotion(assembly: $assembly congressman: $congressman) {
            order
            type
            typeName
            typeSubName
            documentType
            count
        }
        CongressmanAssemblyCategorySpeechTime (assembly: $assembly congressman: $congressman) {
            category {
                id
            }
            superCategory {
                id
            }
            title
            time
        }
    }
`;

type Response = {
    Person: any; //@todo
    CongressmanAssemblyPromote: any; //@todo
    CongressmanIssueTypePromotion: any; //@todo
    CongressmanAssemblySessions: any; //@todo
    CongressmanAssemblyVotes: any; //@todo
    CongressmanAssemblyCategorySpeechTime: any; //@todo
};

type InputProps = {
    assembly: number;
    congressman: number;
};

type Variables = {
    assembly: number;
    congressman: number;
};

interface Props {
    // loading?: any;
    // error?: any;
    person: PersonType;
    sessions: SessionType[];
    votes: VoteSummaryType[];
    promotedIssues: IssueType[];
    issueCount: IssueCount[];
    categorySpeechTimes: CategorySpeechTime[];
}

export default compose(
    graphql<InputProps, Response, Variables, Props>(assembliesQuery, {
        props: ({data: {
            loading,
            Person,
            CongressmanAssemblyPromote,
            CongressmanIssueTypePromotion,
            CongressmanAssemblySessions,
            CongressmanAssemblyVotes,
            CongressmanAssemblyCategorySpeechTime
        }}: any) => ({
            person: loading === false ? Person : undefined,
            promotedIssues: loading === false ? CongressmanAssemblyPromote : undefined,
            issueCount: loading === false ? CongressmanIssueTypePromotion : undefined,
            sessions: loading === false ? CongressmanAssemblySessions : undefined,
            votes: loading === false ? CongressmanAssemblyVotes : undefined,
            categorySpeechTimes: loading === false
                ? CongressmanAssemblyCategorySpeechTime
                : undefined,
            loading: loading,
        }),
        options: ({assembly, congressman}) => ({
            variables: {
                assembly,
                congressman,
            },
        }),
    }),
)(AssemblyCongressman);
