import React from 'react';
import DocumentCongressmanVotes from '../DocumentCongressmanVotes';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<DocumentCongressmanVotes />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <DocumentCongressmanVotes />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const data = {
            assembly: 1,
            issue: 2,
            vote: 3,
            votes: [{
                id: 4,
                voteId: 5,
                vote: 'stuff',
                congressman: {
                    id: 6,
                    name: 'congressman',
                    avatar: {
                        templateSrc: '/path/to/file',
                    },
                    party: {
                        id: 7,
                        name: 'party',
                        color: '123123',
                    },
                },
            }],
        };
        const tree = renderer.create(
            <Router >
                <DocumentCongressmanVotes {...data} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});


