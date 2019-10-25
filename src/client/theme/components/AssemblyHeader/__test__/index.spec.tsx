import * as React from 'react';
import AssemblyHeader from '../index';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<AssemblyHeader />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <AssemblyHeader id={1} title={''} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
