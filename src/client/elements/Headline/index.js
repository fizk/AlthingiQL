import React from 'react';
import classVariations from '../../utils/classVariations';
import './_index.scss';

export const H1 = ({children, variations = []}) => (
    <h1 className={classVariations('headline-1', variations)}>{children}</h1>
);

export const H2 = ({children, variations = []}) => (
    <h2 className={classVariations('headline-2', variations)}>{children}</h2>
);

export const H3 = ({children, variations = []}) => (
    <h3 className={classVariations('headline-3', variations)}>{children}</h3>
);

export const H4 = ({children, variations = []}) => (
    <h4 className={classVariations('headline-4', variations)}>{children}</h4>
);

export const H5 = ({children, variations = []}) => (
    <h5 className={classVariations('headline-5', variations)}>{children}</h5>
);
