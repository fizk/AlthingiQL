import * as React from 'react';
import {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Chrome from './components/Chrome';
import AssemblyCongressman from './pages/AssemblyCongressman';
import Issue from './pages/Issue';
import Index from './pages/Index';
import Cabinet from './pages/Cabinet';
import Plenaries from './pages/Plenaries';
import Assembly from './pages/Assembly';
import AssemblyParty from './pages/AssemblyParty';

export default () => (
    <Chrome>

        <Route exact={true} path="/" component={Index} />
        <Route path="/loggjafarthing" render={() => (
            <Route path="/loggjafarthing/:assembly([0-9]*)" render={() => (
                <Fragment>
                    <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)" render={({match}) => (
                        <Fragment>
                            <Assembly assembly={Number(match.params.assembly)} />
                        </Fragment>
                    )} />

                    <Route path="/loggjafarthing/:assembly([0-9]*)/thingmenn" render={({match }) => (
                        <AssemblyCongressman assembly={Number(match.params.assembly)} />
                    )}/>

                    <Route path="/loggjafarthing/:assembly([0-9]*)/thingflokkar/:party([0-9]*)" render={({match }) => (
                        <AssemblyParty assembly={match.params.assembly} party={match.params.party} />
                    )}/>

                    <Route path="/loggjafarthing/:assembly([0-9]*)/thingmal" render={({match}) => (
                        <Issue category={match.params.category}
                               assembly={match.params.assembly}
                               issue={match.params.issue}/>
                    )} />

                    <Route path="/loggjafarthing/:assembly([0-9]*)/thingfundir" render={({match}) => (
                        <Plenaries assembly={Number(match.params.assembly)} />
                    )}/>
                </Fragment>
            )}>
            </Route>
        )}>
        </Route>
        <Route path="/raduneyti" render={() => (
            <Cabinet />
        )}/>

    </Chrome>
);
