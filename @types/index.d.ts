export interface Assembly {
    id: number,
    period?: {
        from?: string,
        to?: string
    },
}

export interface AssemblyStatistics extends Assembly{
    division: {
        majority?: {
            id?: number,
            name?: string,
            color?: string
        }[],
        minority: {
            id?: number,
            name?: string,
            color?: string
        }[]
    }
}

export interface AssemblySummary {
    parties?: {
        party: Party,
        time: number
    }[],
    bills?: {
        count: number,
        status: string
    }[],
    governmentBills?: {
        count: number,
        status: string
    }[],
    types?: {
        count: number,
        type: string,
        typeName: string,
        typeSubName: string
    }[],
    votes?: {
        count: number,
        date: string
    }[],
    speeches?: {
        count: number,
        date: string
    }[],
    election?: {
        id: number,
        date: string,
        title: string,
        description: string
    },
    electionResults?: {
        party: Party,
        results: {
            seats: number,
            result: number
        }
    }[]
}

export interface AssemblyCategorySummary {
    id: number
    superCategoryId: number
    title: string
    count: number
}

export interface Picture {
    templateSrc: string
}

export interface Party {
    id: number
    name: string
    color: string
}

export interface Person {
    id: number
    name: string
    avatar: Picture
}

export interface Congressman extends Person{
    party: Party
}

export interface DocumentVote {
    id: number
    voteId: number
    vote: string
    congressman: Congressman
}

export interface Issue {
    id?: number,
    assembly?: Assembly,
    category?: string,
    name?: string,
    subName?: string,
    type?: string,
    typeName?: string,
    typeSubName?: string,
    status?: string,
    goal?: string,
    proponentsCount?: number,
    proponents?: Congressman[]
}


declare global {
    interface Window {
        __APOLLO_STATE__: any

    }
}
