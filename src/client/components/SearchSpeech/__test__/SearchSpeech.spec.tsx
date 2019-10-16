import * as React from 'react';
import SearchSpeech from '../index';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<SearchSpeech />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <SearchSpeech assembly={1} issue={2} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
