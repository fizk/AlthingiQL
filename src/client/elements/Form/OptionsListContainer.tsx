import * as React from 'react';

interface Props {
    width?: number;
}

export default class OptionsListContainer extends React.Component<Props, {}> {
    public static defaultProps = {
        width: 0,
    };

    public render() {
        const style = {
            // width: this.props.width,
            position: 'absolute' as 'absolute',
            zIndex: 1,
        };
        return (
            <div style={style} className="options-list__container">
                {this.props.children}
            </div>
        );
    }
}
