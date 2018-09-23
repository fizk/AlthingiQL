import * as React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface Props {
    variations?: any[];
    src?: string;
    title?: string;
}

export default class Avatar extends React.Component<Props, {}> {
    public static defaultProps = {
        variations: [],
        src: undefined,
        title: undefined,
    };

    private fillTemplateSrc(src) {
        return (src || '').replace('{size}', '60x60');
    }

    public render() {
        const { src, variations, ...rest } = this.props;
        return (
            <div
                role="image"
                style={{ backgroundImage: `url(${this.fillTemplateSrc(src)})` }}
                className={classVariations('avatar', variations)}
                {...rest}
            />
        );
    }
}
