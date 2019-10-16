import React, {FunctionComponent} from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export const NavTab: FunctionComponent = ({ children }) => (
    <div className="nav-tab">{children}</div>
);

export const NavTabItem: FunctionComponent<{to: any; exact: boolean}> = props => (
    <NavLink
        exact={props.exact}
        className="nav-tab__item"
        activeClassName="nav-tab__item nav-tab__item--active"
        {...props}>
        {props.children}
    </NavLink>
);
