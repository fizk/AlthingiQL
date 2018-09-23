import * as React from 'react';
import IssuesMenu from '../IssuesMenu';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<IssuesMenu />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <IssuesMenu />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const data = {
            assembly: 1,
            types: [{
                count: 1,
                type: 'type',
                typeName: 'type name',
                typeSubName: 'sub type name',
            }],
            categories: [{
                categoryId: 2,
                superCategoryId: 3,
                title: 'title',
                count: 3,
            }],
            loading: false,
        };
        const tree = renderer.create(
            <Router >
                <IssuesMenu {...data} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
