import * as React from 'react';
import Assemblies from '../Assemblies';
import renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

describe('<Assemblies />', () => {
    test('default props', () => {
        const tree = renderer.create(
            <Router >
                <Assemblies assemblies={undefined} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    test('data', () => {
        const assemblies = [{
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
                }]
            }
        }];
        const tree = renderer.create(
            <Router >
                <Assemblies assemblies={assemblies} />
            </Router>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});


