import * as React from 'react';
import {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Route} from 'react-router';
import {default as AssemblyCongressmenPanel} from '../../panels/AssemblyCongressmen';
import {default as AssemblyCongressmanPanel} from '../../panels/AssemblyCongressman';

interface Props {
    assembly: number;
}

export default class AssemblyCongressman extends React.Component<Props> {
    public static defaultProps = {
        assembly: undefined,
    };

    public render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Löggjafarþing ${this.props.assembly}`}</title>
                    <link
                        rel="canonical"
                        href={`/loggjafarthing/${this.props.assembly}`}
                    />
                </Helmet>
                <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingmenn/" render={({match }) => (
                    <AssemblyCongressmenPanel assembly={Number(match.params.assembly)} />
                )}/>

                <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingmenn/:congressman([0-9]*)" render={({match }) => (
                    <AssemblyCongressmanPanel congressman={Number(match.params.congressman)}
                        assembly={Number(match.params.assembly)} />
                )}/>
                {this.props.children}
            </Fragment>
        );
    }
}
