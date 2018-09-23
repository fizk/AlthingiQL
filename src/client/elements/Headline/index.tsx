import * as React from 'react';
import {StatelessComponent} from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface VariationsType {
    variations?: string[];
}

export const H1: StatelessComponent<VariationsType> = ({ children, variations = [] }) => (
    <h2 className={classVariations('headline-1', variations)}>{children}</h2>
);

export const H2: StatelessComponent<VariationsType> = ({ children, variations = [] }) => (
    <h3 className={classVariations('headline-2', variations)}>{children}</h3>
);

export const H3: StatelessComponent<VariationsType> = ({ children, variations = [] }) => (
    <h4 className={classVariations('headline-3', variations)}>{children}</h4>
);

export const H4: StatelessComponent<VariationsType> = ({ children, variations = [] }) => (
    <h5 className={classVariations('headline-4', variations)}>{children}</h5>
);

export const H5: StatelessComponent<VariationsType> = ({ children, variations = [] }) => (
    <h6 className={classVariations('headline-5', variations)}>{children}</h6>
);
