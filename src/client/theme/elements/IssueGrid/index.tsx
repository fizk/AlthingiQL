import * as React from 'react';
import {FunctionComponent} from 'react';

import './index.scss';
import classVariations from "../../../utils/classVariations";

export const IssueGrid: FunctionComponent = ({children}) => (
    <ul className="issue-grid">{children}</ul>
);

export const IssueGridItem: FunctionComponent<{type: string}> = ({children, type}) => {
    const map: {[key: string]: string} = {
        n: 'sm',
        b: 'md',
        l: 'lg',
        m: 'md',
        q: 'md',
        s: 'md',
        v: 'md',
        a: 'lg',
        f: 'sm',
        ff: 'sm',
        ft: 'sm',
        um: 'sm',
        ud: 'sm',
        uu: 'sm',
    };
    return <li className={classVariations('issue-grid__item', [map[type]])}>{children}</li>
};
