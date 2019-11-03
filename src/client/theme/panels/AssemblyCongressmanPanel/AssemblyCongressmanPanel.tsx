import React from 'react';
import {
    IssueCount,
    ServerFetchStatus,
    Session,
    SuperCategorySpeechTime,
    VoteSummary,
    Person,
    Issue
} from "../../../../../@types";
import {Link} from "react-router-dom";
import Portrait from "../../elements/Portrait";
import SessionDiagram from "../../components/SessionDiagram";
import VoteRatioChart from "../../components/VoteRatioChart";
import CategoryRatioChart from "../../components/CategoryRatioChart";
import IssueRatioTable from "../../components/IssueRatioTable";
import {IssueGrid, IssueGridItem} from "../../elements/IssueGrid";
import {Spinner} from "../../elements/Icons";
import ErrorBoundary from "../..//components/ErrorBoundary";
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
        person: Person;
    };
}

export default class AssemblyCongressmanPanel extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <article className="assembly-congressman-panel">
                <header className="assembly-congressman-panel__header">
                    <Portrait src={
                        !this.props.person.error && !this.props.person.loading
                            ? (this.props.person.person.avatar.templateSrc || '').replace('{size}', '330x330')
                            : undefined
                    }/>

                    {!this.props.person.error && !this.props.person.loading && (
                        <>
                            <h2>{this.props.person.person.name} - ({this.props.person.person.abbreviation})</h2>
                            <h3>{this.props.person.person.birth}</h3>
                        </>
                    )}
                    {!this.props.person.error && this.props.person.loading && (
                        <h2>Loading...</h2>
                    )}
                    {this.props.person.error &&  (
                        <h2>Error...{this.props.person.error.message}</h2>
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
                        <div className="assembly-congressman-panel__spinner">
                            <Spinner/>
                        </div>
                    )}
                    {this.props.issues.error &&  (
                        <div>Error...</div>
                    )}
                </aside>
            </article>
        )
    }
}
