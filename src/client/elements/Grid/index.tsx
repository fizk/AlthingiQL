import * as React from 'react';
import {StatelessComponent} from 'react';
import './index.scss';

export const Grid: StatelessComponent<{fluid?: boolean}> = ({children, fluid = true}) => {
    return (
        <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
    );
};


type RowType = {
    align?: 'start' | 'center' | 'end' | undefined
    justify?: 'start' | 'center' | 'end' | 'around' | 'between'| undefined,
    tall?: boolean
}

export const Row: StatelessComponent<RowType> = ({children, align = undefined, justify = undefined, tall = false}) => {
    const variationsArray = ['row'];
    if (tall) {
        variationsArray.push('row-tall');
    }

    if (align) {
        variationsArray.push(`align-items-${align}`);
    }

    if (justify) {
        variationsArray.push(`justify-content-${align}`);
    }

    return (
        <div className={variationsArray.join(' ')}>{children}</div>
    );
};

type ColumnType = {
    xs?: number | 'auto'
    sm?: number | 'auto'
    md?: number | 'auto'
    lg?: number | 'auto'
    xl?: number | 'auto'
    align?: 'start' | 'center' | 'end' | undefined
}

export const Column: StatelessComponent<ColumnType> = ({children, sm = undefined, md = undefined, lg = undefined, xl = undefined, align = undefined}) => {
    const variationsArray = ['col'];

    if (xl) {
        variationsArray.push(`col-xs-${xl}`);
    }

    if (sm) {
        variationsArray.push(`col-sm-${sm}`);
    }

    if (md) {
        variationsArray.push(`col-md-${md}`);
    }

    if (lg) {
        variationsArray.push(`col-lg-${lg}`);
    }

    if (align) {
        variationsArray.push(`align-self-${align}`);
    }

    return (
        <div className={variationsArray.join(' ')}>{children}</div>
    );
};
