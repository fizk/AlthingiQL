import React, {FunctionComponent} from 'react';
import './index.scss';

interface Props {}

export const Aside: FunctionComponent<Props> = ({children,}) => (
    <aside className="app__aside">{children}</aside>
);

export const Header: FunctionComponent<Props> = ({children,}) => (
    <header className="app__header">
        {children}
    </header>
);

export const User: FunctionComponent<Props> = ({children,}) => (
    <div className="app__user">
        {children}
    </div>
);

export const Main: FunctionComponent<Props> = ({children,}) => (
    <main className="app__main">
        {children}
    </main>
);

export const Footer: FunctionComponent<Props> = ({children,}) => (
    <footer className="app__footer">
        footer
        {children}
    </footer>
);
