import React from 'react';
import PropTypes from 'prop-types';

export default class ScrollIntoView extends React.Component {
    static propTypes = {
        active: PropTypes.bool,
    };

    static defaultProps = {
        active: false,
    };

    componentDidMount() {
        if (this.props.active) {
            this.element.scrollIntoView({behavior: "smooth"});
        }
    }

    render() {
        return (
            <div ref={element => this.element = element}>
                {this.props.children}
            </div>
        )
    }
}
