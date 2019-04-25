export interface Assembly {
    id: number;
    cabinet?: any;
    division?: {
        majority?: Party[],
        minority?: Party[],
    };
    period?: Period;
}

export interface AssemblyStatistics extends Assembly {
    division?: {
        majority?: Party[],
        minority?: Party[],
    };
}

export interface AssemblyCategorySummary {
    id: number;
    superCategoryId: number;
    title: string;
    count: number;
}

export interface AssemblySummary {
    parties?: Array<{
        party: Party;
        time: number;
    }>;
    bills?: Array<{
        count: number;
        status: string;
    }>;
    governmentBills?: Array<{
        count: number;
        status: string;
    }>;
    types?: Array<{
        count: number;
        type: string;
        typeName: string;
        typeSubName: string;
    }>;
    votes?: Array<{
        count: number;
        date: string;
    }>;
    speeches?: Array<{
        count: number;
        date: string;
    }>;
    election?: {
        id: number;
        date: string;
        title: string;
        description: string;
    };
    electionResults?: Array<{
        party: Party;
        results: {
            seats: number;
            result: number;
        };
    }>;
}

export interface AssemblyCategorySummary {
    id: number;
    superCategoryId: number;
    title: string;
    count: number;
}

export interface Period {
    from: string;
    to?: string;
}

export interface Picture {
    templateSrc: string;
}

export interface Party {
    id: number;
    name: string;
    color: string;
}

export interface Person {
    id: number;
    name: string;
    avatar: Picture;
}

export interface Congressman extends Person {
    party: Party;
}

export interface Cabinet {
    id: number;
    title: string;
    description?: string;
    period?: Period;
    assemblies?: Assembly[];
}

export interface DocumentVote {
    id: number;
    voteId: number;
    vote: string;
    congressman: Congressman;
}

export interface Issue {
    id?: number;
    assembly?: Assembly;
    category?: string;
    name?: string;
    subName?: string;
    type?: string;
    typeName?: string;
    typeSubName?: string;
    status?: string;
    goal?: string;
    majorChanges?: string;
    changesInLaw?: string;
    costsAndRevenues?: string;
    deliveries?: string;
    additionalInformation?: string;
    proponents?: Congressman[];
    proponentsCount?: number;
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

export interface Plenary {
    id: string;
    name: string;
    assembly: Assembly;
    from: string;
    to: string;
}

export interface PlenaryItem {
    answererCongressman?: Congressman;
    assembly: Assembly;
    category: string;
    comment: string;
    commentType?: string;
    counterAnswererCongressman?: Congressman;
    id: number;
    instigatorCongressman?: Congressman;
    issue: Issue;
    iterationComment?: string;
    iterationContinue?: string;
    iterationType?: string;
    plenaryId: number;
    answerer?: string;
    posedCongressman: Congressman;
    posedId?: number;
}

export interface Inflation {
    id: number;
    value: number;
    date: string;
}

declare global {
    interface Window {
        __APOLLO_STATE__: any;

    }
}
