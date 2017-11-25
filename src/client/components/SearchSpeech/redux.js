
const SPEECH_SEARCH = {
    BEGIN: 'SPEECH_SEARCH:BEGIN',
    END: 'SPEECH_SEARCH:END',
    ERROR: 'SPEECH_SEARCH:ERROR',
    CLEAR: 'SPEECH_SEARCH:CLEAR',
};

const speechSearchActionBegin = () => ({
    type: SPEECH_SEARCH.BEGIN,
});

const speechSearchActionEnd = result => ({
    type: SPEECH_SEARCH.END,
    result,
});

const speechSearchActionError = error => ({
    type: SPEECH_SEARCH.ERROR,
    error,
});

export const speechSearchClearAction = () => ({
    type: SPEECH_SEARCH.CLEAR,
});

const searchQuery = `
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



export const speechSearchAction = (assembly, issue, query) => {
    return dispatch => {
        dispatch(speechSearchActionBegin());

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        const req = new Request(__GRAPHQL_SERVER__, {
            method: 'POST',
            body: JSON.stringify({
                query: searchQuery,
                variables: {assembly, issue, query},
            }),
            headers: headers,
        });

        return fetch(req)
            .then(response => response.json())
            .then(json => {
                if(json.hasOwnProperty('errors')) {
                    dispatch(speechSearchActionError(json.errors))
                } else {
                    dispatch(speechSearchActionEnd(json.data.SearchIssueSpeeches));
                }

            })
            .catch(error => dispatch(speechSearchActionError(error)))
    }
};

export default (state = {result: [], loading: false, error: false}, action) => {
    switch (action.type) {
        case SPEECH_SEARCH.BEGIN:
            return {
                ...state,
                loading: true,
                error: false
            };
            break;
        case SPEECH_SEARCH.END:
            return {
                result: action.result,
                loading: false,
                error: false
            };
            break;
        case SPEECH_SEARCH.ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
            break;
        case SPEECH_SEARCH.CLEAR:
            return {
                result: [],
                loading: false,
                error: false
            };
            break;
        default:
            return state;
            break;
    }
}
