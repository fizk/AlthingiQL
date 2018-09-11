import * as React from 'react';
import {Fragment} from 'react';
import {Route} from 'react-router-dom';
import Chrome from './components/Chrome';
import {default as AssemblyPanel} from './panels/Assembly';
import {default as AssemblyCongressmenPanel} from './panels/AssemblyCongressmen';
import {default as AssemblyCongressmanPanel} from './panels/AssemblyCongressman';
import {default as AssemblyIssuePanel} from './panels/AssemblyIssue';
import {default as AssemblyIssuesPanel} from './panels/AssemblyIssues';
import {default as IssueDocumentsPanel} from './panels/IssueDocuments';
import {default as IssueSpeechesPanel} from './panels/IssueSpeeches';
import Assembly from './pages/Assembly';
// import Assemblies from './components/Assemblies';
import Issue from './pages/Issue';
import Index from './pages/Index';
import {Column, Grid, Row} from './elements/Grid';

//@todo maybe move this to somewhere else and test it?
const parse = (string) => {
    return string.split('&').reduce((total, item) => {
        const [key, value, ] = item.split('=');
        return {
            ...total,
            [key]: value,
        };
    }, {});
};

//@todo maybe move this to somewhere else and test it?
const parseIssueType = object => {
    return {
        type: object.hasOwnProperty('tegund') ? object.tegund : undefined,
        category: object.hasOwnProperty('flokkur') ? object.flokkur : undefined,
    };
};

// <Assemblies />

export default () => (
    <Chrome>
        <Route exact={true} path="/" component={Index} />
        <Route path="/loggjafarthing">
            <Fragment>
                <Route path="/loggjafarthing/:id">
                    <Fragment>
                        <Route exact={true} path="/loggjafarthing/:assembly" render={({match, }) => {
                            return (
                                <Assembly assembly={Number(match.params.assembly)}>
                                    <AssemblyPanel assembly={Number(match.params.assembly)} />
                                </Assembly>
                            );
                        }}/>
                        <Route exact={true} path="/loggjafarthing/:assembly/thingmenn/" render={({match, }) => {
                            return (
                                <Assembly assembly={Number(match.params.assembly)}>
                                    <AssemblyCongressmenPanel assembly={Number(match.params.assembly)} />
                                </Assembly>
                            );
                        }}/>
                        <Route exact={true} path="/loggjafarthing/:assembly/thingmenn/:congressman" render={({match, }) => {
                            return (
                                <Assembly assembly={Number(match.params.assembly)}>
                                    <AssemblyCongressmanPanel congressman={Number(match.params.congressman)} assembly={Number(match.params.assembly)} />
                                </Assembly>
                            );
                        }}/>
                        <Route exact={true} path="/loggjafarthing/:assembly/thingmal" render={({match, location, }) => {
                            return (
                                <Assembly  assembly={Number(match.params.assembly)}>
                                    <AssemblyIssuesPanel assembly={Number(match.params.assembly)} filter={parseIssueType(parse(location.search.slice(1)))} />
                                </Assembly>
                            );
                        }}/>


                        <Route exact={true} path="/loggjafarthing/:assembly/thingmal/:issue" render={({match, }) => {
                            return (
                                <Issue assembly={Number(match.params.assembly)} issue={Number(match.params.issue)}>
                                    <AssemblyIssuePanel issue={match.params.issue} assembly={match.params.assembly} />
                                </Issue>
                            );
                        }}/>
                        <Route exact={true} path="/loggjafarthing/:assembly/thingmal/:issue/thingskjol" render={({match, }) => {
                            return (
                                <Issue assembly={Number(match.params.assembly)} issue={Number(match.params.issue)}>
                                    <IssueDocumentsPanel issue={Number(match.params.issue)} assembly={Number(match.params.assembly)} />
                                </Issue>
                            );
                        }}/>
                        <Route exact={true} path="/loggjafarthing/:assembly/thingmal/:issue/raedur/:speech?" render={({match, }) => {
                            return (
                                <Issue assembly={Number(match.params.assembly)} issue={Number(match.params.issue)}>
                                    <IssueSpeechesPanel issue={Number(match.params.issue)} assembly={Number(match.params.assembly)} speech={match.params.speech}/>
                                </Issue>
                            );
                        }}/>
                    </Fragment>
                </Route>
            </Fragment>
        </Route>
    </Chrome>
);