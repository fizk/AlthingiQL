import * as React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';
import {ReactNode} from "react";

interface Props {
    color?: string;
    variations?: string[];
}

export default class Badge extends React.Component<Props & React.HTMLProps<HTMLDivElement>, {}> {
    public static defaultProps = {
        variations: [],
        color: undefined,
    };

    public render(): ReactNode {
        const { color, variations, ...rest } = this.props;
        return (
            <div
                {...rest}
                style={{ backgroundColor: `#${color}` }}
                className={classVariations('badge', variations)}
            />
        );
    }
}
