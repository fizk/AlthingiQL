export interface AssemblySummary {
    id: number,
    period: {
        from?: string,
        to?: string
    },
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

export interface Picture {
    templateSrc: string
}

export interface Party {
    id: number
    name: string
    color: string
}

export interface Congressman {
    id: number
    name: string
    avatar: Picture
    party: Party
}

export interface DocumentVote {
    id: number
    voteId: number
    vote: string
    congressman: Congressman
}

export interface AssemblyIssue {
    id: number
    assembly?: {id: number}
    category?: string
    name: string
    subName?: string
    type?: string
    typeName: string
    typeSubName?: string
    status: string
    question?: string
    goal?: string
    date: string
}

export interface AssemblyCategorySummary {
    id: number
    superCategoryId: number
    title: string
    count: number
}


declare var __IMAGE_SERVER__: string;
declare var __GRAPHQL_SERVER__: string;

// declare const __IMAGE_SERVER__: string;
// declare const __GRAPHQL_SERVER__: string;
// declare const __APOLLO_STATE__: string;

declare global {
    interface Window {
        __APOLLO_STATE__: any
    }
}
