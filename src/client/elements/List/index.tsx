import React from 'react';
import './_index.scss';

export const ListHorizontal = ({children}) => (
    <ul className="list--horizontal">{children}</ul>
);

export const ListSeparated = ({children}) => (
    <ul className="list--separated">{children}</ul>
);

export const ListItem = ({children}) => (
    <li className="list__item">{children}</li>
);
