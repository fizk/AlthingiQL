import classVariations from '../../utils/classVariations';
import * as React from 'react';
import {ReactNode} from "react";

interface Props {
    variations?: string[];
    isError?: boolean;
}

export default class Input extends React.Component<Props & React.HTMLProps<HTMLInputElement>, {}> {
    public static defaultProps = {
        variations: [],
        isError: false,
    };

    public render(): ReactNode {

        const {variations, isError, ...rest} = this.props;

        return (
            <input
                {...rest}
                className={classVariations(
                    'input',
                    (variations || []).concat(
                        isError ? ['error'] : [],
                    ),
                )}
            />
        );
    }
}
