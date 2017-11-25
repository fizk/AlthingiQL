import React from 'react';
import PropTypes from 'prop-types';

export const Grid = ({children, fluid}) => {
    return (
        <div className={fluid ? 'container-fluid' : 'container'}>{children}</div>
    );
};

Grid.propTypes = {
    fluid: PropTypes.bool
};

Grid.defaultProps = {
    fluid: true
};

export const Row = ({children, align, justify, tall}) => {
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

Row.propTypes = {
    align: PropTypes.oneOf(['start', 'center', 'end', undefined]),
    justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between', undefined]),
    tall: PropTypes.bool
};

Row.defaultProps = {
    xsAlign: undefined,
    smAlign: undefined,
    mdAlign: undefined,
    lgAlign: undefined,
    justify: undefined,
    tall: false
};

export const Column = ({children, sm, md, lg, xl, align}) => {
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

Column.propsTypes = {
    xs: PropTypes.oneOf([PropTypes.number, 'auto']),
    sm: PropTypes.oneOf([PropTypes.number, 'auto']),
    md: PropTypes.oneOf([PropTypes.number, 'auto']),
    lg: PropTypes.oneOf([PropTypes.number, 'auto']),
    align: PropTypes.oneOf(['start', 'center', 'end', undefined])
};

Column.defaultProps = {
    xs: undefined,
    sm: undefined,
    md: undefined,
    lg: undefined
};
