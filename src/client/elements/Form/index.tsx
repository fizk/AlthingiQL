import * as React from 'react';
import Input from './Input';
import Options from './Options';
import OptionsItem from './OptionsItem';
import OptionsListContainer from './OptionsListContainer';
import Search from './Search';
import Select from './Select';
import withKeyBinding from './withKeyBinding';
import './index.scss';

//@ts-ignore
const OptionsWithKeyBinding = withKeyBinding(Options);
//@ts-ignore
const SelectWithKeyBinding = withKeyBinding(Select);

export {
    Input,
    Options,
    OptionsItem,
    OptionsListContainer,
    Search,
    Select,
    OptionsWithKeyBinding,
    SelectWithKeyBinding,
};
