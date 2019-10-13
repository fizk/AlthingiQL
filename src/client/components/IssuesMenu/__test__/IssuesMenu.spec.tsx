import * as React from 'react';
import IssuesMenu from '../IssuesMenu';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {CategorySummary, IssueSummary, TypeCount} from "../../../../../@types";

describe('<IssuesMenu />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <IssuesMenu assembly={1}  />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const types: TypeCount[] = [{
            count: 1,
            type: {
                category: 'A',
                type: 'type',
                typeName: 'type name',
                typeSubName: 'sub type name',
            }

        }];
        const categories: CategorySummary[] = [{
            id: 2,
            superCategoryId: 3,
            title: 'title',
            count: 3,
        }];
        const tree = renderer.create(
            <Router >
                <IssuesMenu assembly={1} categories={categories} types={types}/>
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
