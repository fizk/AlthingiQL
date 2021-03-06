import React from 'react';
import {
    IssueCount,
    ServerFetchStatus,
    Session,
    SuperCategorySpeechTime,
    VoteSummary,
    AssemblyCongressman,
    Issue, ValueCount
} from "../../../../../@types";
import {Link} from "react-router-dom";
import Portrait from "../../elements/Portrait";
import SessionDiagram from "../../components/SessionDiagram";
import VoteRatioChart from "../../components/VoteRatioChart";
import CategoryRatioChart from "../../components/CategoryRatioChart";
import IssueRatioTable from "../../components/IssueRatioTable";
import {IssueGrid, IssueGridItem} from "../../elements/IssueGrid";
import {Error, Spinner} from "../../elements/Icons";
import ErrorBoundary from "../..//components/ErrorBoundary";
import {Helmet} from "react-helmet";
import './index.scss';

interface Props {
    assembly: number;
    congressman: number;
    sessions: ServerFetchStatus & {
        sessions: Session[];
    };
    votes: ServerFetchStatus & {
        votes: VoteSummary[];
    };
    issues: ServerFetchStatus & {
        promotions: Issue[];
        types: IssueCount[];
        speeches: SuperCategorySpeechTime[];
    };
    person: ServerFetchStatus & {
        person: AssemblyCongressman;
    };
    otherDocs: ServerFetchStatus & {
        docs: ValueCount[];
    };
    speechTime: ServerFetchStatus & {
        time: ValueCount;
    };
}

export default class AssemblyCongressmanPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Helmet>
                    <title>{`${(!this.props.person.error && !this.props.person.loading && this.props.person.person.name) || ''} | ${this.props.assembly}. löggjafarþing`}</title>
                    <link rel="canonical" href={`http://loggjafarthing.einarvalur.co/loggjafarthing/${this.props.assembly}/thingmenn`} />
                </Helmet>
                <article className="assembly-congressman-panel">
                    <header className="assembly-congressman-panel__header">
                        <Portrait src={
                            !this.props.person.error && !this.props.person.loading
                                ? (this.props.person.person.avatar.templateSrc || '').replace('{size}', '330x330')
                                : undefined
                        }/>
                        {!this.props.person.error && !this.props.person.loading && (
                            <>
                                <h2 className="assembly-congressman-panel__title">{this.props.person.person.name} - ({this.props.person.person.abbreviation})</h2>
                                <h3 className="assembly-congressman-panel__subtitle">{this.props.person.person.birth}</h3>
                                <h3 className="assembly-congressman-panel__subtitle">
                                    {this.props.person.person.constituency.name}
                                </h3>
                                <ul>
                                    {this.props.person.person.parties.map(party => (
                                        <li key={party.id}>{party.name}</li>
                                    ))}
                                </ul>
                                <ul>
                                    {this.props.person.person.ministries && this.props.person.person.ministries.map(ministry => (
                                        <li key={ministry.id}>{ministry.name}</li>
                                    ))}
                                </ul>

                            </>
                        )}
                        {!this.props.person.error && this.props.person.loading && (
                            <>
                                <h2 className="assembly-congressman-panel__title">...</h2>
                                <h3 className="assembly-congressman-panel__subtitle">&nbsp;</h3>
                            </>
                        )}
                        {this.props.person.error &&  (
                            <>
                                <h2 className="assembly-congressman-panel__title">...</h2>
                                <h3 className="assembly-congressman-panel__subtitle">{this.props.person.error.message}</h3>
                            </>
                        )}
                    </header>
                    <section className="assembly-congressman-panel__votes">
                        <h3 className="assembly-congressman-panel__headline">
                            Þátttaka í atkvæðagreiðslum
                        </h3>
                        <ErrorBoundary>
                            <VoteRatioChart loading={this.props.votes.loading}
                                            error={this.props.votes.error}
                                            votes={this.props.votes && this.props.votes.votes}/>
                        </ErrorBoundary>
                    </section>
                    <section className="assembly-congressman-panel__issues">
                        <h3 className="assembly-congressman-panel__headline">
                            Flutningsmaður
                        </h3>
                        <ErrorBoundary>
                        <IssueRatioTable loading={this.props.issues.loading}
                                         error={this.props.issues.error}
                                         issues={this.props.issues.types}/>
                        </ErrorBoundary>
                        <h3>Onnur thingskjol</h3>
                        {!this.props.otherDocs.error && !this.props.otherDocs.loading && (
                            <ul>
                                {this.props.otherDocs.docs.map(document => (
                                    <li key={document.value}>{document.count} | {document.value}</li>
                                ))}
                            </ul>
                        )}
                        <h3>Heildar raedutimi</h3>
                        {!this.props.speechTime.error && !this.props.speechTime.loading && (
                            <p>{Math.floor(this.props.speechTime.time.count / 60)} minutur</p>
                        )}
                        {!this.props.speechTime.error && this.props.speechTime.loading && (
                            <p>0 minutur</p>
                        )}
                        {this.props.speechTime.error && (
                            <p>0 minutur</p>
                        )}
                    </section>
                    <section className="assembly-congressman-panel__sessions">
                        <h3 className="assembly-congressman-panel__headline">
                            Viðvera
                        </h3>
                        <ErrorBoundary>
                        <SessionDiagram loading={this.props.sessions.loading}
                                        error={this.props.sessions.error}
                                        sessions={this.props.sessions.sessions}/>
                        </ErrorBoundary>
                    </section>
                    <section className="assembly-congressman-panel__speeches">
                        <h3 className="assembly-congressman-panel__headline">
                            Ræðutími á málaflokka
                        </h3>
                        <ErrorBoundary>
                        <CategoryRatioChart loading={this.props.issues.loading}
                                            error={this.props.issues.error}
                                            categories={this.props.issues.speeches}/>
                        </ErrorBoundary>
                    </section>
                    <aside className="assembly-congressman-panel__promotions">
                        <h3 className="assembly-congressman-panel__headline">
                            Fyrsti flutningsmaður ({this.props.issues && this.props.issues.promotions && this.props.issues.promotions.length})
                        </h3>
                        {!this.props.issues.error && !this.props.issues.loading && (
                            <IssueGrid>
                                {this.props.issues.promotions.map(issue => (
                                    <IssueGridItem key={`${issue.id}${issue.type.type}`} type={issue.type.type}>
                                        <Link to={`/loggjafarthing/${this.props.assembly}/thingmal/${issue.type.category}/${issue.id}`}>
                                            <h4>{issue.id} {issue.type.category}</h4>
                                            <h5>{issue.name}</h5>
                                            {issue.type.type} | {issue.type.typeSubName || issue.type.typeName}
                                        </Link>
                                    </IssueGridItem>
                                ))}
                            </IssueGrid>
                        )}
                        {!this.props.issues.error && this.props.issues.loading && (
                            <div className="assembly-congressman-panel__icon-container">
                                <Spinner/>
                            </div>
                        )}
                        {this.props.issues.error &&  (
                            <div className="assembly-congressman-panel__icon-container">
                                <Error/>
                            </div>
                        )}
                    </aside>
                </article>
            </>
        )
    }
}
