import classVariations from '../../utils/classVariations';
import * as React from 'react';

interface Props {
    variations?: any[];
    isError?: boolean;
}

export default class Input extends React.Component<Props & React.HTMLProps<HTMLInputElement>, {}> {
    public static defaultProps = {
        variations: [],
        isError: false,
    };

    public render() {
        const props = { ...this.props };
        delete props.variations;
        delete props.isError;
        return (
            <input
                {...props}
                className={classVariations(
                    'input',
                    this.props.variations.concat(
                        this.props.isError ? ['error'] : [],
                    ),
                )}
            />
        );
    }
}
