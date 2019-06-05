export default () => {}
// const ISSUE_SEARCH = {
//     BEGIN: 'ISSUE_SEARCH:BEGIN',
//     END: 'ISSUE_SEARCH:END',
//     ERROR: 'ISSUE_SEARCH:ERROR',
//     CLEAR: 'ISSUE_SEARCH:CLEAR',
// };
//
// const issueSearchActionBegin = () => ({
//     type: ISSUE_SEARCH.BEGIN,
// });
//
// const issueSearchActionEnd = result => ({
//     type: ISSUE_SEARCH.END,
//     result,
// });
//
// const issueSearchActionError = error => ({
//     type: ISSUE_SEARCH.ERROR,
//     error,
// });
//
// export const issueClearAction = () => ({
//     type: ISSUE_SEARCH.CLEAR,
// });
//
// const searchQuery = `
//     query searchAssemblyIssue ($assembly: Int! $query: String!) {
//         SearchAssemblyIssue (assembly: $assembly, query: $query) {
//             id
//             assembly {id}
//             category
//             name
//             subName
//             type
//             typeName
//             typeSubName
//             status
//             question
//             goal
//             majorChanges
//             changesInLaw
//             costsAndRevenues
//             deliveries
//             additionalInformation
//             date
//             proponents {
//                 id
//                 name
//                 party {
//                     id
//                     name
//                     color
//                 }
//             }
//         }
//     }
// `;
//
// export const issueSearchAction = () => {
//     const threshold = 1000;
//     let last;
//     let deferTimer;
//     return (assembly, issue, query) => dispatch => {
//         const now = + new Date();
//         if (last && now < last + threshold) {
//             clearTimeout(deferTimer);
//             deferTimer = setTimeout(() => {
//                 last = now;
//                 issueSearchDispatchAction(dispatch, assembly, issue, query);
//             }, threshold);
//         } else {
//             last = now;
//             issueSearchDispatchAction(dispatch, assembly, issue, query);
//         }
//     };
// };
//
// const issueSearchDispatchAction = (dispatch, assembly, issue, query) => {
//     dispatch(issueSearchActionBegin());
//
//     const headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//
//     const req = new Request('http://localhost:3000/graphql', {
//         method: 'POST',
//         body: JSON.stringify({
//             query: searchQuery,
//             variables: {assembly, issue, query},
//         }),
//         headers,
//     });
//
//     return fetch(req)
//         .then(response => response.json())
//         .then(json => {
//             if (json.hasOwnProperty('errors')) {
//                 dispatch(issueSearchActionError(json.errors));
//             } else {
//                 dispatch(issueSearchActionEnd(json.data.SearchAssemblyIssue));
//             }
//         })
//         .catch(error => dispatch(issueSearchActionError(error)));
// };
//
// export default (state = {result: [], loading: false, error: false}, action) => {
//     switch (action.type) {
//         case ISSUE_SEARCH.BEGIN:
//             return {
//                 ...state,
//                 loading: true,
//                 error: false,
//             };
//         case ISSUE_SEARCH.END:
//             return {
//                 result: action.result,
//                 loading: false,
//                 error: false,
//             };
//         case ISSUE_SEARCH.ERROR:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.error,
//             };
//         case ISSUE_SEARCH.CLEAR:
//             return {
//                 result: [],
//                 loading: false,
//                 error: false,
//             };
//         default:
//             return state;
//     }
// };
