import React, {FunctionComponent} from 'react';
import './index.scss';

export const Aside: FunctionComponent = ({children,}) => (
    <aside className="app__aside">{children}</aside>
);

export const Header: FunctionComponent = ({children,}) => (
    <header className="app__header">
        {children}
    </header>
);

export const User: FunctionComponent = ({children,}) => (
    <div className="app__user">
        {children}
    </div>
);

export const Main: FunctionComponent = ({children,}) => (
    <main className="app__main">
        {children}
    </main>
);

export const Footer: FunctionComponent = ({children,}) => (
    <footer className="app__footer">
        footer
        {children}
    </footer>
);
