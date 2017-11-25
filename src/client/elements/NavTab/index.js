import React from 'react';
import {NavLink} from 'react-router-dom';

export const NavTab = ({children}) => (
    <div className="nav-tab">{children}</div>
);

export const NavTabItem = props => (
    <NavLink exact={true} className="nav-tab__item" activeClassName="nav-tab__item--active" {...props}>
        {props.children}
    </NavLink>
);
