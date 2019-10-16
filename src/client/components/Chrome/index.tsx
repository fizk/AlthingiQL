import * as React from 'react';
import './index.scss';

export default class Chrome extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="chrome">
                {this.props.children}
                <footer className="chrome__footer">@loggjafarthing</footer>
            </div>
        );
    }
}
