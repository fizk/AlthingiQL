import * as React from 'react';
interface ScrollIntoViewProps {
    active?: boolean;
}

export default class ScrollIntoView extends React.Component<ScrollIntoViewProps, {}> {
    public static defaultProps = {
        active: false,
    };

    public element: HTMLDivElement = undefined;

    public componentDidMount() {
        if (this.props.active) {
            this.element.scrollIntoView({ behavior: 'smooth' });
        }
    }

  public render() {
        return (
            <div ref={element => (this.element = element)}>
                {this.props.children}
            </div>
        );
    }
}
