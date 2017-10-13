import React from 'react';
import {Route, Link} from 'react-router-dom';
import Assemblies from './pages/Assemblies';
import Assembly from './pages/Assembly';
import AssemblyCongressmen from './pages/AssemblyCongressmen';
import AssemblyIssue from './pages/AssemblyIssue';
import AssemblyIssues from './pages/AssemblyIssues';
import IssueDocuments from './pages/IssueDocuments';
import IssueSpeeches from './pages/IssueSpeeches';

const Routers = props => (
    <div>
        <Route exact={true} path="/" component={Assemblies} />
        <Route path="/loggjafathing">
            <div>
                <Route exact={true} path="/loggjafathing" component={Assemblies} />
                <Route path="/loggjafathing/:id">
                    <div>

                        <Route exact={true} path="/loggjafathing/:assembly" render={({match}) => {
                            return (
                                <div>
                                    <nav>
                                        <ul>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}`}>Samantekt</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmenn`}>Thingmenn</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal`}>Thingmal</Link></li>
                                        </ul>
                                    </nav>
                                    <Assembly assembly={match.params.assembly} />
                                </div>
                            )
                        }} />
                        <Route exact={true} path="/loggjafathing/:assembly/thingmenn" render={({match}) => {
                            return (
                                <div>
                                    <nav>
                                        <ul>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}`}>Samantekt</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmenn`}>Thingmenn</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal`}>Thingmal</Link></li>
                                        </ul>
                                    </nav>
                                    <AssemblyCongressmen assembly={match.params.assembly} />
                                </div>
                            )
                        }}/>
                        <Route exact={true} path="/loggjafathing/:assembly/thingmal" render={({match}) => {
                            return (
                                <div>
                                    <nav>
                                        <ul>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}`}>Samantekt</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmenn`}>Thingmenn</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal`}>Thingmal</Link></li>
                                        </ul>
                                    </nav>
                                    <AssemblyIssues assembly={match.params.assembly} />
                                </div>
                            )
                        }}/>


                        <Route exact={true} path="/loggjafathing/:assembly/thingmal/:issue" render={({match}) => {
                            return (
                                <div>
                                    <nav>
                                        <ul>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}`}>&lt;&lt;</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}`}>Samantekt</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}/thingskjol`}>Thingskjol</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}/raedur`}>Rædur</Link></li>
                                        </ul>
                                    </nav>
                                    <AssemblyIssue issue={match.params.issue} assembly={match.params.assembly} />
                                </div>
                            )
                        }}/>
                        <Route exact={true} path="/loggjafathing/:assembly/thingmal/:issue/thingskjol" render={({match}) => {
                            return (
                                <div>
                                    <nav>
                                        <ul>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}`}>&lt;&lt;</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}`}>Samantekt</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}/thingskjol`}>Thingskjol</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}/raedur`}>Rædur</Link></li>
                                        </ul>
                                    </nav>
                                    <IssueDocuments issue={match.params.issue} assembly={match.params.assembly} />
                                </div>
                            )
                        }}/>
                        <Route exact={true} path="/loggjafathing/:assembly/thingmal/:issue/raedur" render={({match}) => {
                            return (
                                <div>
                                    <nav>
                                        <ul>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}`}>&lt;&lt;</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}`}>Samantekt</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}/thingskjol`}>Thingskjol</Link></li>
                                            <li><Link to={`/loggjafathing/${match.params.assembly}/thingmal/${match.params.issue}/raedur`}>Rædur</Link></li>
                                        </ul>
                                    </nav>
                                    <IssueSpeeches issue={match.params.issue} assembly={match.params.assembly}/>
                                </div>
                            )
                        }}/>
                    </div>
                </Route>
            </div>
        </Route>
    </div>
);

export {Routers}
