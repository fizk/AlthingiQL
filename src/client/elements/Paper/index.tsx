import React, {FunctionComponent} from 'react';
import './index.scss';


const Paper: FunctionComponent = ({children}) => (
    <div className="paper">{children}</div>
);

export default Paper;
