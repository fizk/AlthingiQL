export default {
    __schema: {
        types: [
            {
                kind: 'UNION',
                name: 'Issue',
                possibleTypes: [
                    {
                        name: 'IssueA',
                    },
                    {
                        name: 'IssueB',
                    },
                ],
            },
            {
                kind: 'INTERFACE',
                name: 'IssueInterface',
                possibleTypes: [
                    {
                        name: 'IssueA',
                    },
                    {
                        name: 'IssueB',
                    },
                ],
            },
        ],
    },
};
