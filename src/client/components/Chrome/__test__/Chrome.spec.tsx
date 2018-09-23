import * as React from 'react';
import Chrome from '../index';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Chrome />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <Chrome />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
