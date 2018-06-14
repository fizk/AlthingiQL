import * as React from "react";
import {StatelessComponent} from "react";
import './index.scss';

export const ListHorizontal: StatelessComponent<{}> = ({ children }) => (
    <ul className="list--horizontal">{children}</ul>
);

export const ListSeparated: StatelessComponent<{}> = ({ children }) => (
    <ul className="list--separated">{children}</ul>
);

export const ListItem: StatelessComponent<{}> = ({ children }) => (
    <li className="list__item">{children}</li>
);
