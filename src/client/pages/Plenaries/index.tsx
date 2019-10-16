import * as React from 'react';
import {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {Route} from 'react-router';
import {default as AssemblyPlenariesPanel} from '../../panels/AssemblyPlenaries';
import {default as AssemblyPlenaryPanel} from '../../panels/AssemblyPlenary';

interface Props {
    assembly: number;
}

export default class Plenaries extends React.Component<Props> {
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
                <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingfundir" render={({match}) => (
                    <AssemblyPlenariesPanel assembly={Number(match.params.assembly)} />
                )}/>

                <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingfundir/:plenary([0-9]*)" render={({match}) => (
                    <AssemblyPlenaryPanel assembly={Number(match.params.assembly)}
                                          plenary={Number(match.params.plenary)}/>
                )}/>
            </Fragment>
        );
    }
}
