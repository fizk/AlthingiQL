import * as React from 'react';
import IssueHeader from '../IssueHeader';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Issue, IssueA} from '../../../../../@types';

type Partial<T> = { [P in keyof T]?: T[P]; };
type PartialIssue = Partial<Issue>;

describe('<IssueHeader />', () => {
    test('default props', () => {
        const issue: PartialIssue = {};
        const tree = renderer.create(
            <Router >
                <IssueHeader issue={issue as IssueA} loading={false} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const issue: PartialIssue = {
            id: 1,
            name: 'name',
            category: 'a',
            typeName: 'type name',
            status: 'status',
            date: '2001-01-01',
        };
        const tree = renderer.create(
            <Router >
                <IssueHeader issue={issue as Issue} loading={false} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
