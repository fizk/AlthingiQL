import * as React from 'react';
import SearchIssue from '../index';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Issue} from '../../../../../@types';

type Partial<T> = { [P in keyof T]?: T[P]; };
type PartialIssue = Partial<Issue>;

describe('<SearchIssue />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <SearchIssue assembly={1} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {

        const result: PartialIssue[] = [{
            id: 1,
            assembly: {
                id: 2,
            },
            category: 'a',
            name: 'name',
            subName: 'sub name',
            type: 'a',
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
                avatar: {
                    src: '',
                    templateSrc: '',
                },
                party: {
                    id: 4,
                    name: 'name',
                    color: '123123',
                },
            }],
        }];
        const tree = renderer.create(
            <Router >
                <SearchIssue assembly={1}
                             result={result as Issue[]}
                             isSearching={false}
                             onSearch={() => {}}
                             onClear={() => {}}/>
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
