import * as React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface Props {
    color?: string;
    variations?: any[];
}

export default class Badge extends React.Component<Props & React.HTMLProps<HTMLDivElement>, {}> {
    public static defaultProps = {
        variations: [],
        color: undefined,
    };

    public render() {
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
