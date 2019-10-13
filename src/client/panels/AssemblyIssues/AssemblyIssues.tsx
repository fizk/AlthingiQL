import * as React from 'react';
import {Link} from 'react-router-dom';
import Issue, {IssueGrid, IssueGridItem} from "../../elements/Issue";
import {
    Assembly as AssemblyType,
    CategoryCount,
    Issue as IssueType,
    ServerFetchStatus,
    TypeCount
} from '../../../../@types';
import {Spinner} from "../../elements/Icons";
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import './index.scss';

interface Props extends ServerFetchStatus {
    assembly: number;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    issues: IssueType[];
    done?: boolean;
    loadMore?: (...args: any[]) => any;
    filter?: {
        type?: string,
        category?: string,
    };
    types: TypeCount[];
    categories: CategoryCount[];
}

export default class AssemblyIssues extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        assemblyProperties: {
            error: undefined,
            loading: false,
            assembly: {
                id: undefined,
                period: {
                    from: undefined,
                    to: undefined,
                },
                division: [],
                cabinet: {
                    title: undefined,
                    period: {from: undefined, to: undefined}
                }
            },
        },
        issues: [],
        filter: {
            type: undefined,
            category: undefined,
        },
        done: true,
        loadMore: () => {},
        loading: false,
        error: undefined,
        types: [],
        categories: [],
    };

    public render() {
        return (
            <>
                <main className="assembly-issues-panel">
                    <section className="assembly-issues-panel__user">search and avatar</section>
                    <nav className="assembly-issues-panel__nav">
                        <AssemblyNavigation assembly={this.props.assembly} />
                    </nav>
                    <header className="assembly-issues-panel__header">
                        <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                        <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                    </header>
                    <aside>
                        <h3>Mal</h3>
                        <ul>
                            {this.props.types.map(type => (
                                <li key={type.type.type}>
                                    <span>{type.count} </span>
                                    <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?tegund=${type.type.type}`}>
                                        {type.type.typeSubName || type.type.typeName}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <h3>Mal</h3>
                        <ul>

                            {this.props.categories.map((category, i) => (
                                <li key={`categories-${i}`}>
                                    <span>{category.count} </span>
                                    <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?flokkur=${category.category.id}`}>
                                        {category.category.title}
                                    </Link>
                                </li>
                            ))}

                        </ul>
                    </aside>
                    <section className="assembly-issues-panel__issues">
                        {!this.props.loading && (
                            <>
                                <IssueGrid>
                                    {this.props.issues.map((issue) => (
                                        <IssueGridItem type={issue.type.type}>
                                            <Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.type.category}/${issue.id}`}>
                                                <Issue issue={issue}/>
                                            </Link>
                                        </IssueGridItem>
                                    ))}
                                </IssueGrid>
                                {!this.props.done && (
                                    <button onClick={this.props.loadMore}>[more]</button>
                                )}
                            </>
                        )}
                        {this.props.loading && (
                            <Spinner/>
                        )}
                    </section>
                    <section className="assembly-issues-panel_stats"></section>
                </main>
                {/*<Section>*/}
                    {/*<div className="assembly-issues-panel">*/}
                        {/*{!this.props.loading && (*/}
                            {/*<>*/}
                                {/*<IssueGrid>*/}
                                    {/*{this.props.issues.map((issue) => (*/}
                                        {/*<IssueGridItem type={issue.type.type}>*/}
                                            {/*<Link to={`/loggjafarthing/${issue.assembly.id}/thingmal/${issue.type.category}/${issue.id}`}>*/}
                                                {/*<Issue issue={issue}/>*/}
                                            {/*</Link>*/}
                                        {/*</IssueGridItem>*/}
                                    {/*))}*/}
                                {/*</IssueGrid>*/}
                                {/*{!this.props.done && (*/}
                                    {/*<button onClick={this.props.loadMore}>[more]</button>*/}
                                {/*)}*/}
                            {/*</>*/}
                        {/*)}*/}
                        {/*{this.props.loading && (*/}
                            {/*<Spinner/>*/}
                        {/*)}*/}

                        {/*<aside className="assembly-issues-panel__aside">*/}
                            {/*<nav style={{ position: 'sticky', top: 16 }}>*/}
                                {/*<SearchIssue assembly={this.props.assembly} />*/}
                                {/*<IssuesMenu*/}
                                    {/*assembly={this.props.assembly}*/}
                                    {/*filter={this.props.filter}*/}
                                {/*/>*/}
                            {/*</nav>*/}
                        {/*</aside>*/}
                    {/*</div>*/}
                {/*</Section>*/}
            </>
        );
    }
}
