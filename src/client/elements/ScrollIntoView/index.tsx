import * as React from 'react';
type ScrollIntoViewProps = {
    active?: boolean
};

export default class ScrollIntoView extends React.Component<ScrollIntoViewProps, {}> {
    static defaultProps = {
        active: false
    };

    element: HTMLDivElement = undefined;

    componentDidMount() {
        if (this.props.active) {
            this.element.scrollIntoView({ behavior: "smooth" });
        }
    }
    render() {
        return (
            <div ref={element => (this.element = element)}>
                {this.props.children}
            </div>
        );
    }
}
