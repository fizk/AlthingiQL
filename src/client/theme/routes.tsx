import * as React from 'react';
import {FunctionComponent} from 'react';
import {Route} from "react-router-dom";
import {Footer, Header, User} from "./layouts/Container";
import AssemblyHeader from "./components/AssemblyHeader";

import AssemblySummaryPage from "./pages/AssemblySummaryPage";
import AssemblyIssuesPage from "./pages/AssemblyIssuesPage";
import AssemblyIssuesPanel from "./panels/AssemblyIssuesPanel";
import AssemblyIssueSummaryPanel from "./panels/AssemblyIssuesummaryPanel";
import AssemblyIssueDocumentsPanel from "./panels/AssemblyIssueDocumentsPanel";
import AssemblyIssueSpeechesPanel from "./panels/AssemblyIssueSpeechesPanel";
import AssemblyPlenariesPage from "./pages/AssemblyPlenariesPage";
import AssemblyPlenariesPanel from "./panels/AssemblyPlenariesPanel";
import AssemblyPlenaryPanel from "./panels/AssemblyPlenaryPanel";
import AssemblyCongressmenPage from "./pages/AssemblyCongressmenPage";
import AssemblyCongressmenPanel from "./panels/AssemblyCongressmenPanel";
import AssemblyCongressmanPanel from "./panels/AssemblyCongressmanPanel";

import AssemblyPartiesPage from "./pages/AssemblyPartiesPage";
import AssemblyPartiesPanel from "./panels/AssemblyPartiesPanel";
import AssemblyPartyPanel from "./panels/AssemblyPartyPanel";
import AssemblyIssuePanel from "./panels/AssemblyIssuePanel";
import './global.scss';


const Routes: FunctionComponent<{}> = () => (
    <Route path="/loggjafarthing/:assembly" render={({match}): React.ReactNode => (
            <div className="app">
                <Header>
                    <AssemblyHeader id={match.params.assembly} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <Route exact path="/loggjafarthing/:assembly" render={(): React.ReactNode => (
                    <AssemblySummaryPage assembly={Number(match.params.assembly)} />
                )} />

                <Route path="/loggjafarthing/:assembly/thingmal" render={({match, location}): React.ReactNode => (
                    <>
                    <AssemblyIssuesPage assembly={Number(match.params.assembly)}
                                        filter={new URLSearchParams(location.search)}>
                        <Route exact path="/loggjafarthing/:assembly/thingmal" render={(): React.ReactNode => (
                            <AssemblyIssuesPanel assembly={Number(match.params.assembly)}
                                    filter={new URLSearchParams(location.search)}/>
                        )} />
                        <Route path="/loggjafarthing/:assembly/thingmal/:category/:issue" render={({match}): React.ReactNode => (
                            <>
                            <AssemblyIssuePanel assembly={Number(match.params.assembly)}
                                                issue={Number(match.params.issue)}
                                                category={match.params.category}>
                                <Route exact path="/loggjafarthing/:assembly/thingmal/:category/:issue" render={(): React.ReactNode => (
                                    <AssemblyIssueSummaryPanel assembly={Number(match.params.assembly)}
                                                               issue={Number(match.params.issue)}
                                                               category={match.params.category}/>
                                )} />
                                <Route path="/loggjafarthing/:assembly/thingmal/:category/:issue/thingskjol" render={(): React.ReactNode => (
                                    <AssemblyIssueDocumentsPanel assembly={Number(match.params.assembly)}
                                                                 issue={Number(match.params.issue)}
                                                                 category={match.params.category}/>
                                )} />
                                <Route path="/loggjafarthing/:assembly/thingmal/:category/:issue/raedur" render={(): React.ReactNode => (
                                    <AssemblyIssueSpeechesPanel assembly={Number(match.params.assembly)}
                                                                issue={Number(match.params.issue)}
                                                                category={match.params.category}/>
                                )} />
                            </AssemblyIssuePanel>
                            </>
                        )} />
                    </AssemblyIssuesPage>
                    </>
                )} />

                <Route path="/loggjafarthing/:assembly/thingfundir" render={(): React.ReactNode => (
                    <AssemblyPlenariesPage assembly={Number(match.params.assembly)}>
                        <Route exact path="/loggjafarthing/:assembly/thingfundir" render={(): React.ReactNode => (
                            <AssemblyPlenariesPanel assembly={Number(match.params.assembly)} />
                        )} />
                        <Route exact path="/loggjafarthing/:assembly/thingfundir/:plenary" render={({match}): React.ReactNode => (
                            <AssemblyPlenaryPanel assembly={Number(match.params.assembly)}
                                                  plenary={Number(match.params.plenary)} />
                        )} />
                    </AssemblyPlenariesPage>
                )} />

                <Route path="/loggjafarthing/:assembly/thingmenn" render={(): React.ReactNode => (
                    <AssemblyCongressmenPage assembly={Number(match.params.assembly)}>
                        <Route exact path="/loggjafarthing/:assembly/thingmenn" render={(): React.ReactNode => (
                            <AssemblyCongressmenPanel assembly={Number(match.params.assembly)} />
                        )} />
                        <Route exact path="/loggjafarthing/:assembly/thingmenn/:congressman" render={({match}): React.ReactNode => (
                            <AssemblyCongressmanPanel assembly={Number(match.params.assembly)} congressman={Number(match.params.congressman)} />
                        )} />
                    </AssemblyCongressmenPage>
                )} />

                <Route path="/loggjafarthing/:assembly/thingflokkar" render={(): React.ReactNode => (
                    <AssemblyPartiesPage assembly={Number(match.params.assembly)}>
                        <Route exact path="/loggjafarthing/:assembly/thingflokkar" render={(): React.ReactNode => (
                            <AssemblyPartiesPanel assembly={Number(match.params.assembly)} />
                        )} />
                        <Route exact path="/loggjafarthing/:assembly/thingflokkar/:party" render={({match}): React.ReactNode => (
                            <AssemblyPartyPanel assembly={Number(match.params.assembly)}
                                                party={Number(match.params.party)} />
                        )} />
                    </AssemblyPartiesPage>
                )} />

                <Footer>footer and stuff</Footer>
            </div>
        )}>
        </Route>
);

export default Routes;
