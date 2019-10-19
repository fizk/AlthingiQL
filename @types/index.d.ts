
export interface Assembly {
    id: number;
    period?: Period;
    division?: Division;
    cabinet?: Cabinet;
}

export interface Period {
    from: string;
    to: string;
}

export interface Division {
    majority: Party[];
    minority: Party[];
}

export interface Cabinet {
    id: number;
    title: string;
    description: string;
    period: Period;
    assemblies: Assembly[];
}

export interface Party {
    id: number;
    name: string;
    abbr_short?: string; //@todo fix naming
    abbr_long?: string; //@todo fix naming
    color?: string;
}

export interface PartyTime {
    party: Party;
    time: number;
}

export interface Category {
    id: number,
    description: string,
    superId: number,
    title: string;
}

export interface CategoryCount {
    count: number;
    category: Category;
}

export interface SuperCategory {
    id: number,
    title: string;
}

export interface IssueType {
    id: number;
    assembly: Assembly;
    name: string;
    type: Type
    date: string;
    speakers: CongressmanValue[];
    // speechRange: SpeechRange[];
    speechCount: number | null;
    speechTime: number | null;
}

export interface IssueCount {
    order: number,
    type: string,
    typeName: string,
    typeSubName: string,
    documentType: string,
    count: number,
}

export interface IssueA extends IssueType {
    subName: string;
    status: string;
    question: string;
    goal: string;
    majorChanges: string;
    changesInLaw: string;
    costsAndRevenues: string;
    deliveries: string;
    additionalInformation: string;
    proponents: Proponent[];
    proponentsCount: number;
    // voteRange: VoteRange[];
    categories: Category[],
    superCategories: SuperCategory[],
    governmentIssue: boolean,
}

export interface IssueB extends IssueType {

}

export interface Type {
    type:  string;//'n' | 'b' | 'l' | 'm' | 'q' | 's' | 'v' | 'a' | 'f' | /**/ 'ff' | 'ft' | 'um' | 'ud' | 'uu';
    category: string;//'a' | 'b'
    typeName: string
    typeSubName: string
}

export interface TypeCount {
    count: number;
    type: Type;
}

export type Issue = IssueA | IssueB;

export interface IssueValue {
    value: number,
    issue: Issue
}

export interface CongressmanValue {
    congressman: Congressman;
    value: number;
}

export interface Speech {
    id: string;
    plenaryId: number;
    assembly: Assembly;
    issue: Issue;
    congressman: Congressman;
    congressmanType: string;
    period: Period;
    text: string;
    type: string;
    iteration: string;
    position: number;
}

export interface SpeechRange {
    count: number;
    date: string;
}

export interface Person {
    id: number;
    name: string;
    avatar: Picture;
}

export interface Congressman extends Person {
    party: Party;
    assembly?: Assembly;
    constituency?: Constituency
}

export interface Proponent extends Congressman {
    order: number;
    minister: string | null
}

export interface Vote {
    id: number;
    voteId: number;
    vote: string;
    congressman: Congressman;
}

export interface VoteRange {
    count: number;
    date: string;
}

export interface Picture {
    src?: string;
    templateSrc: string;
}

export interface Plenary {
    id: number;
    assembly: Assembly;
    from: string;
    to: string;
    name: string;
    agenda: PlenaryItem[];
}

export interface PlenaryItem {
    id: number;
    plenaryId: number;
    assembly: Assembly;
    category: string;
    iterationType: string;
    iterationContinue: string;
    iterationComment: string;
    comment: string;
    commentType: string;
    posedId: number;
    answerer: string;
    issue: Issue;
    posedCongressman: Congressman;
    answererCongressman: Congressman;
    counterAnswererCongressman: Congressman;
    instigatorCongressman: Congressman;
}

export interface Inflation {
    id: number;
    value: number;
    date: string;
}

export interface Session {
    id: number;
    congressman: Congressman;
    assembly: Assembly;
    constituency: Constituency;
    party: Party;
    period: Period;
    type: string;
    abbr: string;
}

export interface Constituency {
    id: number;
    name: string;
    abbr_short: string; //todo fix naming
    abbr_long: string; //todo fix naming
    description: string;
}

export interface CategorySummary {
    id: number;
    superCategoryId: number;
    title: string;
    count: number;
}

export interface CategorySpeechTime {
    category: {
        id: number,
    },
    superCategory: {
        id: number,
    },
    title: string,
    time: number,
}

export interface SuperCategorySpeechTime {
    superCategory: {
        id: number,
        title: string,
    },
    time: number,
}

export interface IssueSummary {
    count: number;
    type: string;
    typeName: string;
    typeSubName: string;
}

export interface VoteSummary {
    count: number;
    vote: string;
}

export interface Document {
    id: number;
    issueId: number;
    assemblyId: number;
    date: string;
    url: string;
    type: string;
    proponents: Congressman[];
    votes: VoteResult[];
}

export interface VoteResult {
    id: number;
    issue_id: number;
    assembly_id: number;
    document_id: number;
    date: string;
    type: string;
    outcome: string;
    method: string;
    yes: number;
    no: number;
    inaction: number;
    committee: string;
}

export interface StatusCount {
    count: number,
    status: string
}

export interface ServerFetchStatus {
    error: any;
    loading: boolean;
}

export interface Progress {
    issue: {
        id: number;
        category: string;
    };
    assembly: {
        id: number;
    };
    committee: {
        id: number;
        name: string;
    };
    speech: {
        id: string;
    };
    document: {
        id: number;
    };
    date: string;
    title: string;
    type: string;
    completed: boolean;
}

export interface ClientCursor {
    to: number;
    from: number;
}

export interface Config {
    host: string;
    port: string | number;
}

export interface Client {
    getPagination: (url: string, cursor: any) => Promise<{data: object, cursor: {from: number, to: number}, done: boolean}>
    get: (url: any) => Promise<object>
}

export declare namespace DataSource {
    export interface Party {
        party_id: number;
        name: string;
        abbr_short: string;
        abbr_long: string;
        color: string;
    }

    export interface Cabinet {
        cabinet_id: number;
        title: string;
        description: string;
        from: string;
        to: string;
        assemblies?: Assembly[]
    }

    export interface Assembly {
        assembly_id: number;
        from: string;
        to: string;
        party: {
            majority: Party[];
            minority: Party[];
        };
        cabinet: Cabinet
    }
    
    export interface Committee {
        committee_id: number;
        name: string;
        first_assembly_id: number;
        last_assembly_id: number;
        abbr_long: string;
        abbr_short: string;
    }
    
    export interface Constituency {
        abbr_long: string;
        abbr_short: string;
        constituency_id: number;
        description: string;
        name: string;
    }
    
    export interface Issue {
        issue_id: number;
        assembly_id: number;
        congressman_id: number;
        category: 'A' | 'B';
        name: string;
        sub_name: string;
        type: string;
        type_name: string;
        type_subname: string;
        status: string;
        question: string;
        goal: string;
        major_changes: string;
        changes_in_law: string;
        costs_and_revenues: string;
        deliveries: string;
        additional_information: string;
        date: string;
        proponents: Proponent[];
        // voteRange: DateAndCount[];
        // speechRange: DateAndCount[];
        speakers: CongressmanValue[]
        categories: Category;
        super_categories: SuperCategory[]
        government_issue: boolean,
        speech_count: number,
        speech_time: number,
        issue_links: {
            assembly_id: number;
            issue_id: number;
            category: 'A' | 'B';
            type: string;
        }[]
    }
    
    export interface DateAndCount {
        date: string;
        count: number;
    }

    export interface Person {
        congressman_id: number;
        name: string;
        birth: string;
        death: string;
        abbreviation: string;
    }
    
    export interface Congressman extends Person {
        constituency: Constituency;
        party: Party;
    }

    export interface Proponent extends Congressman {
        minister: string | null;
        order: number;
    }

    export interface CongressmanValue extends Congressman {
        value: number;
    }

    export interface CongressmanAndDateRange extends Congressman{
        time: number;
        begin: string;
        end: string;
    }
    
    export interface Category {
        category_id: number;
        super_category_id: number;
        title: string;
        description: string;
    }

    export interface SuperCategory {
        super_category_id: number;
        title: string;
    }
}

declare global {
    interface Window {
        __APOLLO_STATE__: any;

    }
}
