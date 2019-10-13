import * as React from 'react';
import {
    Assembly as AssemblyType,
    PlenaryItem as PlenaryItemType,
    ServerFetchStatus
} from '../../../../@types';
import Congressman from '../../elements/Congressman';
import Issue, {IssueGrid, IssueGridItem} from "../../elements/Issue";
import {AssemblyNavigation} from "../../elements/AssemblyNavigation";
import {Link} from "react-router-dom";
import './index.scss';

interface Props {
    assembly: number;
    assemblyProperties: ServerFetchStatus & {
        assembly: AssemblyType;
    };
    plenary: number;
    plenaryItems: PlenaryItemType[];
}

export default class AssemblyPlenary extends React.Component<Props, {}> {
    public static defaultProps = {
        plenaryItems: [],
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
    };

    public render() {
        return (
            <main className="assembly-plenary-panel">
                <section className="assembly-plenary-panel__user">search and avatar</section>
                <nav className="assembly-plenary-panel__nav">
                    <AssemblyNavigation assembly={this.props.assembly} />
                </nav>
                <header className="assembly-plenary-panel__header">
                    <h1>{this.props.assemblyProperties.assembly.id}. Löggjafarþing</h1>
                    <h2>{this.props.assemblyProperties.assembly.cabinet!.title}</h2>
                    <h3>THINGFUNDUR {this.props.plenary}</h3>
                </header>
                <aside />
                <section className="assembly-plenary-panel__items">
                    <IssueGrid variations={['sm']}>
                        {this.props.plenaryItems.map(item => (
                            <IssueGridItem type={item.issue.type.type}>
                                <Link to={`/loggjafarthing/${this.props.assembly}/thingmal/${item.issue.type.category}/${item.issue.id}`}>
                                    <Issue issue={item.issue}>
                                        <p>
                                            {item.iterationComment} - {item.comment},
                                            {item.commentType}, {item.iterationType}
                                        </p>
                                        <ul>
                                            {item.instigatorCongressman && (
                                                <li>
                                                    <h4>Málshefjandi</h4>
                                                    <Congressman congressman={item.instigatorCongressman}/>
                                                </li>
                                            )}
                                            {item.posedCongressman && (
                                                <li>
                                                    <h4>Posted</h4>
                                                    <Congressman congressman={item.posedCongressman}/>
                                                </li>
                                            )}
                                            {item.answererCongressman && (
                                                <li>
                                                    <h4>Til svara</h4>
                                                    <Congressman congressman={item.answererCongressman}>
                                                        {item.answerer}
                                                    </Congressman>
                                                </li>
                                            )}
                                            {item.counterAnswererCongressman && (
                                                <li>
                                                    <h4>Andsvar</h4>
                                                    <Congressman congressman={item.counterAnswererCongressman}/>
                                                </li>
                                            )}
                                        </ul>
                                    </Issue>
                                </Link>
                            </IssueGridItem>
                        ))}
                    </IssueGrid>
                </section>
                <section className="assembly-plenary-panel_stats"></section>
            </main>
        );
    }
}
