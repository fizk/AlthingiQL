import React from 'react';
import SearchSpeech from '../index';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<SearchSpeech />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <SearchSpeech />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const data = {
            assembly: 1,
            issue: 2,
            result: [{
                id: 'speech-id',
                assembly: {
                    id: 1,
                },
                issue: {
                    id: 3,
                },
                text: 'text',
                period: {
                    from: '2001-01-01',
                    to: '2002-01-01',
                },
                iteration: '1',
                type: 'type',
                congressmanType: 'congressman type',
                congressman: {
                    id: 5,
                    name: 'name',
                    avatar: {
                        templateSrc: '/path/to/image.jpg',
                    },
                    party: {
                        id: 5,
                        name: 'name',
                        color: '123123',
                    }
                },
            }],
            isSearching: false,
            onSearch: () => {},
            onClear: () => {},
        };
        const tree = renderer.create(
            <Router >
                <SearchSpeech {...data} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});


