import * as React from 'react';
import { Fragment } from 'react';
import AssemblyIssueNavigation from '../../elements/AssemblyIssueNavigation';
import IssueHeader from '../../components/IssueHeader';
import * as Helmet from 'react-helmet';
import Section from '../../elements/Section';
import {Route} from 'react-router';
import {default as AssemblyIssuesPanel} from '../../panels/AssemblyIssues';
import {default as AssemblyIssuePanel} from '../../panels/AssemblyIssue';
import {default as IssueDocumentsPanel} from '../../panels/IssueDocuments';
import {default as IssueSpeechesPanel} from '../../panels/IssueSpeeches';

//@todo maybe move this to somewhere else and test it?
const parse = (location: string) => {
    return Array.from(new URLSearchParams(location) as unknown as ArrayLike<any>).reduce((previous, current) => {
        previous[current[0]] = current[1];
        return previous;
    }, {});
};

//@todo maybe move this to somewhere else and test it?
const parseIssueType = (object: {[key: string]: string}) => {
    return {
        type: object.hasOwnProperty('tegund') ? object.tegund : undefined,
        category: object.hasOwnProperty('flokkur') ? object.flokkur : undefined,
    };
};

interface Props {
    assembly: number;
    issue: number;
    category: string;
}

export default class Issue extends React.Component<Props> {
    public static defaultProps = {
        assembly: undefined,
        issue: undefined,
        category: undefined,
    };

    public render() {
        return (
            <Fragment>
                {/*<Helmet>*/}
                    {/*<title>{`Löggjafarþing ${this.props.assembly}`}</title>*/}
                    {/*<link rel="canonical"*/}
                        {/*href={`/loggjafarthing/${this.props.assembly}`}*/}
                    {/*/>*/}
                {/*</Helmet>*/}
                <Section>

                    <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingmal" render={({match}) => (
                        <AssemblyIssuesPanel assembly={Number(match.params.assembly)} filter={parse(location.search)}/>
                    )}/>


                    <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingmal/:category([ab])/:issue([0-9]*)"
                           render={({match}) => (
                               <Fragment>
                                   <AssemblyIssueNavigation
                                       assembly={match.params.assembly}
                                       issue={match.params.issue}
                                       category={match.params.category}
                                   />
                                   <AssemblyIssuePanel issue={match.params.issue}
                                    assembly={match.params.assembly}
                                    category={match.params.category} />
                               </Fragment>
                           )}/>
                    <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingmal/:category([ab])/:issue([0-9]*)/thingskjol"
                           render={({match}) => (
                               <Fragment>
                                   <IssueDocumentsPanel
                                       category={match.params.category}
                                       issue={Number(match.params.issue)}
                                       assembly={Number(match.params.assembly)}
                                   />
                               </Fragment>
                           )}/>
                    <Route exact={true} path="/loggjafarthing/:assembly([0-9]*)/thingmal/:category([ab])/:issue([0-9]*)/raedur/:speech?"
                           render={({match}) => (
                               <Fragment>
                                   <AssemblyIssueNavigation
                                       assembly={match.params.assembly}
                                       issue={match.params.issue}
                                       category={match.params.category}
                                   />
                                   <IssueHeader
                                       assembly={match.params.assembly}
                                       issue={match.params.issue}
                                       category={match.params.category}
                                   />
                               <IssueSpeechesPanel issue={Number(match.params.issue)}
                                    assembly={Number(match.params.assembly)}
                                    category={match.params.category}
                                    speech={match.params.speech}/>
                               </Fragment>
                           )}/>
                </Section>
            </Fragment>
        );
    }
}
