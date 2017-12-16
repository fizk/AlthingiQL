import React from 'react';
import {Spinner} from "../Icons/index";
import './_index.scss';

export const Loading = props => (
    <div className="spinner">
        <Spinner/>
    </div>
);
