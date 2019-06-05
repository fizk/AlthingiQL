import * as React from 'react';
import classVariations from '../../utils/classVariations';
import './index.scss';

interface Props {
    src: string;
    variations?: string[];
}

export default class Avatar extends React.Component<Props &  React.HTMLProps<HTMLDivElement>, {}> {
    public static defaultProps = {
        variations: [],
        src: undefined,
    };

    private fillTemplateSrc(src: string, variations: string[]) {
        if (variations.indexOf('sm') >= 0) {
            return (src || '').replace('{size}', '16x16');
        } else if (variations.indexOf('md') >= 0) {
            return (src || '').replace('{size}', '31x31');
        } else if (variations.indexOf('lg') >= 0) {
            return (src || '').replace('{size}', '49x49');
        } else {
            return (src || '').replace('{size}', '49x49');
        }
    }

    public render() {
        const { src, variations, ...rest } = this.props;
        return (
            <div
                role="image"
                style={{ backgroundImage: `url(${this.fillTemplateSrc(src, variations || [])})` }}
                className={classVariations('avatar', variations)}
                {...rest}
            />
        );
    }
}
