import * as React from 'react';
import DocumentCongressmanVotes from '../DocumentCongressmanVotes';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Vote} from '../../../../../@types';

type Partial<T> = { [P in keyof T]?: T[P]; };
type PartialVote = Partial<Vote>;

describe('<DocumentCongressmanVotes />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <DocumentCongressmanVotes assembly={1} issue={2} vote={3} votes={[] as Vote[]} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const votes: PartialVote[] = [{
            id: 4,
            voteId: 5,
            vote: 'stuff',
            congressman: {
                id: 6,
                name: 'congressman',
                avatar: {
                    src: '',
                    templateSrc: '/path/to/file',
                },
                party: {
                    id: 7,
                    name: 'party',
                    color: '123123',
                },
            },
        }];
        const tree = renderer.create(
            <Router >
                <DocumentCongressmanVotes assembly={1} issue={2} vote={3} votes={votes as Vote[]} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
