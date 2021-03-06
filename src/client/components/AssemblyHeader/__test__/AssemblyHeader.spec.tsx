import * as React from 'react';
import AssemblyHeader from '../AssemblyHeader';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';
import {Assembly} from '../../../../../@types';

describe('<AssemblyHeader />', () => {
    test('default props', () => {
        const assembly: Assembly = {
            id: 1,
        };
        const tree = renderer.create(
            <Router >
                <AssemblyHeader assembly={assembly} loading={false} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const assembly = {
            id: 1,
            period: {
                from: '2001-01-01',
                to: '2001-01-01',
            },
            division: {
                majority: [{
                    id: 2,
                    name: 'party',
                    color: '123123',
                }],
                minority: [{
                    id: 2,
                    name: 'party',
                    color: '123123',
                }],
            },
        };
        const tree = renderer.create(
            <Router >
                <AssemblyHeader assembly={assembly} loading={false} />
            </Router>,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
