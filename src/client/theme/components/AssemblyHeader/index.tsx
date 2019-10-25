import * as React from 'react';
import {FunctionComponent} from 'react';
import Menu, {MenuItem} from '../../elements/Menu';
import './index.scss';

interface Props {
    id: number;
    title: string;
}

const AssemblyHeader: FunctionComponent<Props> = ({id, title}) => (
    <div className="assembly-header">
        <h2 className="assembly-header__title">{id}. Löggjafarþing</h2>
        <h3 className="assembly-header__sub-title">{title}</h3>
        <Menu>
            <MenuItem exact to={`/loggjafarthing/${id}`}>Samantekt</MenuItem>
            <MenuItem to={`/loggjafarthing/${id}/thingmal`}>Þingmál</MenuItem>
            <MenuItem to={`/loggjafarthing/${id}/thingfundir`}>Þingfundir</MenuItem>
            <MenuItem to={`/loggjafarthing/${id}/thingmenn`}>Þingmenn</MenuItem>
            <MenuItem to={`/loggjafarthing/${id}/thingflokkar`}>Þingflokkar</MenuItem>
        </Menu>
    </div>
);

export default AssemblyHeader;
