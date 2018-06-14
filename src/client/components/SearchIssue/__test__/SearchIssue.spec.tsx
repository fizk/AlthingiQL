import * as React from 'react';
import SearchIssue from '../index';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<SearchIssue />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <SearchIssue />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const data = {
            assembly: 1,
            result: [{
                id: 1,
                assembly: {
                    id: 2
                },
                category: 'category',
                name: 'name',
                subName: 'sub name',
                type: 'type',
                typeName: 'type name',
                typeSubName: 'type sub name',
                status: 'status',
                question: 'question',
                goal: 'goal',
                majorChanges: 'major change',
                changesInLaw: 'changes in law',
                costsAndRevenues: 'costs',
                deliveries: 'deliveries',
                additionalInformation: 'additionalInformation',
                date: '2001-01-01',
                proponents: [{
                    id: 3,
                    name: 'name',
                    party: {
                        id: 4,
                        name: 'name',
                        color: '123123',
                    },
                }]
            }],
            isSearching: false,
            onSearch: () => {},
            onClear: () => {},
        };
        const tree = renderer.create(
            <Router >
                <SearchIssue {...data} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});


