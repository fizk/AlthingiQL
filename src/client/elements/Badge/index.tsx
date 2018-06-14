import * as React from "react";
import classVariations from "../../utils/classVariations";
import './index.scss';

type BadgeProps = {
    variations?: any[],
    color?: string
};

export default class Badge extends React.Component<BadgeProps & React.HTMLProps<HTMLDivElement>, {}> {
    static defaultProps = {
        variations: [],
        color: undefined
    };
    render() {
        const { color, variations, ...rest } = this.props;
        return (
            <div
                {...rest}
                style={{ backgroundColor: `#${color}` }}
                className={classVariations("badge", variations)}
            />
        );
    }
}
