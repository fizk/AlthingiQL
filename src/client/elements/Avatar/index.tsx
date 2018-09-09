import * as React from "react";
import classVariations from "../../utils/classVariations";
import './index.scss';

type AvatarProps = {
    variations?: any[],
    src?: string,
    title?: string
};

export default class Avatar extends React.Component<AvatarProps, {}> {
    static defaultProps = {
        variations: [],
        src: undefined,
        title: undefined
    };

    fillTemplateSrc(src) {
        return (src || "").replace("{width}", 60).replace("{height}", 60);
    }

    render() {
        const { src, variations, ...rest } = this.props;
        return (
            <div
                role="image"
                style={{ backgroundImage: `url(${this.fillTemplateSrc(src)})` }}
                className={classVariations("avatar", variations)}
                {...rest}
            />
        );
    }
}
