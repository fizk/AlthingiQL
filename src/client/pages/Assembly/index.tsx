import * as React from 'react';
import { Fragment } from "react";
import { AssemblyNavigation } from "../../elements/AssemblyNavigation";
import AssemblyHeader from "../../components/AssemblyHeader";
import { Helmet } from "react-helmet";

type AssemblyProps = {
    assembly?: number
};

export default class Assembly extends React.Component<AssemblyProps, {}> {
    static defaultProps = {
        assembly: undefined
    };
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Löggjafarþing ${this.props.assembly}`}</title>
                    <link
                        rel="canonical"
                        href={`/loggjafarthing/${this.props.assembly}`}
                    />
                </Helmet>
                <AssemblyNavigation assembly={this.props.assembly} />
                <AssemblyHeader assembly={this.props.assembly} />
                {this.props.children}
            </Fragment>
        );
    }
}
