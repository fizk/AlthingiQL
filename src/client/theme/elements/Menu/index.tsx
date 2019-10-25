import React, {FunctionComponent} from 'react';
import {NavLink, NavLinkProps} from "react-router-dom";
import './index.scss';

export default class Class extends React.Component {
    render(): React.ReactNode {
        return (
            <nav className="menu__nav">
                <ul className="menu__menu">
                    {this.props.children}
                </ul>
            </nav>
        )
    }
}

export const MenuItem: FunctionComponent<NavLinkProps> = ({children, ...rest}) => (
    <li className="menu__menu-item">
        <NavLink className="menu__menu-link" activeClassName="menu__menu-link--active" {...rest}>
            {children}
        </NavLink>
    </li>
);
