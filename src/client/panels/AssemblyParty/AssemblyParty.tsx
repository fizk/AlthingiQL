import * as React from 'react';
import {
    Assembly as AssemblyType,
    Cabinet,
    Division,
    Issue as IssueType,
    Party,
    Period,
    ServerFetchStatus,
} from '../../../../@types';
import Issue, {IssueGrid, IssueGridItem} from "../../elements/Issue";
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import {Link} from "react-router-dom";
import './index.scss';

interface Props extends ServerFetchStatus {
    assembly: number;
    issues: IssueType[];
    party: Party;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
}

export default class AssemblyParty extends React.Component<Props, {}> {
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
        party: {
            id: undefined,
            name: undefined,
            abbr_short: undefined,
            abbr_long: undefined,
            color: undefined
        },
    };

    public render() {
        return (
            <main className="assembly-party-panel">
                <section className="assembly-party-panel__user">search and avatar</section>
                <nav className="assembly-party-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                </nav>
                <header className="assembly-party-panel__header">
                    <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                    <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                    <h2>{this.props.party.name}</h2>
                </header>
                <aside className="assembly-party-panel__aside"></aside>
                <section className="assembly-party-panel__items">
                    <IssueGrid variations={['lg']}>
                        {this.props.issues.map(issue => (
                            <IssueGridItem key={`${issue.assembly.id}${issue.id}${issue.type.category}`} type={issue.type.type}>
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmal/${issue.type.category}/${issue.id}`}>
                                <Issue issue={issue}/>
                                </Link>
                            </IssueGridItem>
                        ))}
                    </IssueGrid>
                </section>
                <section className="assembly-party-panel_stats"></section>
            </main>
        );
    }
}
