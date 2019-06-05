import * as React from 'react';
import {Fragment} from 'react';
// import { Link } from 'react-router-dom';
// import { Row, Column } from '../../elements/Grid';
// import Congressman from '../../elements/Congressman';
// import DateAndCountChart from '../../elements/DateAndCountChart';
// import * as Markdown from 'react-markdown';
// import { H2, H4 } from '../../elements/Headline';
// import Paper from '../../elements/Paper';
// import AssemblyIssueNavigation from "../../pages/Issue";
// import IssueHeader from "../../components/IssueHeader/IssueHeader";
import {Issue as IssueType, Progress as ProgressType} from '../../../../@types';
import './index.scss';

interface Props {
    issue: IssueType;
    progress: ProgressType[];
}

export default class AssemblyIssue extends React.Component<Props, {}> {
    public static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            name: undefined,
            status: undefined,
            goal: undefined,
            subName: undefined,
            type: undefined,
            typeName: undefined,
            typeSubName: undefined,
            question: undefined,
            majorChanges: undefined,
            changesInLaw: undefined,
            costsAndRevenues: undefined,
            deliveries: undefined,
            additionalInformation: undefined,
            date: undefined,
            proponents: [],
            speakers: [],
            voteRange: [],
            speechRange: [],
        },
        progress: [],
    };

    public render() {
        return (
            <Fragment>
                <main role="main" className="assembly-issue-panel">
                    <section className="assembly-issue-panel__user">search and avatar</section>
                    <nav className="assembly-issue-panel__nav">
                        {/*<AssemblyIssueNavigation*/}
                            {/*assembly={this.props.issue.assembly.id}*/}
                            {/*issue={this.props.issue.id}*/}
                            {/*category={this.props.issue.category}*/}
                        {/*/>*/}
                    </nav>
                    <header className="assembly-issue-panel__header">
                        <h1>149. Loggjafarthing</h1>
                        <div>all kinds of stuff</div>

                        {/*<IssueHeader*/}
                            {/*assembly={this.props.issue.assembly.id}*/}
                            {/*issue={this.props.issue}*/}
                            {/*category={this.props.issue.category}*/}
                        {/*/>*/}
                    </header>
                    <section className="assembly-issue-panel__issues">
                        Mest abernadi malin
                    </section>
                    <section className="app_stats">
                        <p>Malategundir</p>
                        <p>rædutimar</p>
                        <p>flokkar a althingi</p>
                        <p>urslit kostninga</p>
                    </section>
                    <section className="assembly-issue-panel__congressmen">
                        Framistada tingmanna
                    </section>
                </main>

            {/*<Row>*/}
                {/*<Column>*/}
                    {/*{this.props.issue.proponents && (*/}
                        {/*<Fragment>*/}
                            {/*<H2>Framsögumenn</H2>*/}
                            {/*<Paper>*/}
                                {/*<ul>*/}
                                    {/*{this.props.issue.proponents.map((congressman, i) => (*/}
                                        {/*<li key={`congressman-${congressman.id}-${i}`}>*/}
                                            {/*<Congressman*/}
                                                {/*party={congressman.party}*/}
                                                {/*congressman={congressman}*/}
                                            {/*/>*/}
                                        {/*</li>*/}
                                    {/*))}*/}
                                {/*</ul>*/}
                            {/*</Paper>*/}
                        {/*</Fragment>*/}
                    {/*)}*/}

                    {/*<H2>Ræðumenn</H2>*/}
                    {/*<ul>*/}
                        {/*{this.props.issue.speakers.map((item, i) => (*/}
                            {/*<li key={`congressman-${item.congressman.id}-${i}`}>*/}
                                {/*<Congressman*/}
                                    {/*party={item.congressman.party}*/}
                                    {/*congressman={item.congressman}>*/}
                                    {/*<H4>{item.value} mínútur</H4>*/}
                                {/*</Congressman>*/}
                            {/*</li>*/}
                        {/*))}*/}
                    {/*</ul>*/}
                {/*</Column>*/}
                {/*<Column>*/}
                    {/*<Markdown source={this.props.issue.goal || ''} />*/}
                    {/*<Markdown source={this.props.issue.majorChanges || ''} />*/}
                    {/*<Markdown source={this.props.issue.changesInLaw || ''} />*/}
                    {/*<Markdown*/}
                        {/*source={this.props.issue.costsAndRevenues || ''}*/}
                    {/*/>*/}
                    {/*<Markdown source={this.props.issue.deliveries || ''} />*/}
                    {/*<Markdown*/}
                        {/*source={this.props.issue.additionalInformation || ''}*/}
                    {/*/>*/}

                    {/*<h4>Vote</h4>*/}
                    {/*<DateAndCountChart source={this.props.issue.voteRange} />*/}

                    {/*<h4>Speeches</h4>*/}
                    {/*<DateAndCountChart source={this.props.issue.speechRange} />*/}
                    {/*<Paper>*/}
                        {/*<ul>*/}
                            {/*{this.props.progress.map((progress, i) => (*/}
                                {/*<li key={`progress-${i}`}>*/}
                                    {/*{progress.document && progress.document.id && (*/}
                                        {/*<Link to={`/loggjafarthing/${progress.assembly.id}/thingmal/${progress.issue.category}/${progress.issue.id}/thingskjol`}>*/}
                                            {/*{progress.title}*/}
                                        {/*</Link>*/}
                                    {/*)}*/}
                                    {/*{progress.speech && progress.speech.id && (*/}
                                        {/*<Link to={`/loggjafarthing/${progress.assembly.id}/thingmal/${progress.issue.category}/${progress.issue.id}/raedur/${progress.speech.id}`}>*/}
                                            {/*umræda : {progress.title}*/}
                                        {/*</Link>*/}
                                    {/*)}*/}
                                    {/*{progress.committee && progress.committee.id && (*/}
                                        {/*<Link to={`/loggjafarthing/${progress.assembly.id}/thingmal/${progress.issue.category}/${progress.issue.id}/raedur/${progress.committee.id}`}>*/}
                                            {/*{progress.title}{' '}*/}
                                            {/*{progress.committee.name}*/}
                                        {/*</Link>*/}
                                    {/*)}*/}
                                {/*</li>*/}
                            {/*))}*/}
                        {/*</ul>*/}
                    {/*</Paper>*/}
                {/*</Column>*/}
            {/*</Row>*/}
            </Fragment>
        );
    }
}
