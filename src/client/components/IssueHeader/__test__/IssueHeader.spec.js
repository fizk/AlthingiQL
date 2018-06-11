import React from 'react';
import IssueHeader from '../IssueHeader';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<IssueHeader />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <IssueHeader />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const data = {
            issue: {
                id: 1,
                name: 'name',
                typeName: 'type name',
                status: 'status',
                date: '2001-01-01',
            },
            loading: false,
        };
        const tree = renderer.create(
            <Router >
                <IssueHeader {...data} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});


