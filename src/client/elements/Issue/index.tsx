import React, {FunctionComponent} from 'react';
import classVariations from '../../utils/classVariations';
import Congressman from "../Congressman";
import IssueStatus from "../IssueStatus";
import Poster from "../Poster";
import {Issue as IssueType, IssueA} from "../../../../@types";
import './index.scss';

interface Props {
    issue: IssueType
}

export default class Issue extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <article className={classVariations('issue', [])}>
                {['a', 'l'].indexOf(this.props.issue.type.type) >= 0 && (this.props.issue as IssueA).proponents.length > 0 && (
                    <aside className="issue__poster">
                        <Poster width={300} height={200}
                             alt=""
                             variations={['rounded-top']}
                             src={(this.props.issue as IssueA).proponents[0].avatar.templateSrc.replace('{size}', '400x300')}
                        />
                        <div className="issue__poster-titles">
                            <div className="issue__poster-party" title={(this.props.issue as IssueA).proponents[0].party.name}
                                style={{backgroundColor: `#${(this.props.issue as IssueA).proponents[0].party.color}`}}
                            />
                            <div className="issue__poster-name">
                                <h4 className="issue__type-title">{(this.props.issue as IssueA).proponents[0].name}</h4>
                                <h4 className="issue__type-subtitle">{(this.props.issue as IssueA).proponents[0].minister}</h4>
                            </div>
                            {(this.props.issue as IssueA).proponentsCount -1 > 0 && (
                                <div className="issue__poster-count">+{(this.props.issue as IssueA).proponentsCount - 1}</div>
                            )}
                        </div>
                    </aside>
                )}
                <header className="issue__header">
                    <h4 className="issue__type-subtitle">{this.props.issue.type.typeName} | {this.props.issue.type.typeSubName}</h4>
                    <h3 className="issue__type-title">{this.props.issue.id}. {this.props.issue.name}</h3>
                    {(this.props.issue as IssueA).subName && (
                        <h3 className="issue__type-title">{(this.props.issue as IssueA).subName}</h3>
                    )}
                </header>
                {['a', 'l'].indexOf(this.props.issue.type.type) < 0 && ((this.props.issue as IssueA).proponents || []).length > 0 && (
                    <ul className="issue__proponents">
                        {(this.props.issue as IssueA).proponents.map(proponent => (
                            <li className="issue__proponent" key={`proponent-${proponent.id}`}>
                                <Congressman congressman={proponent} party={proponent.party}>
                                    <h4 className="issue__proponents-title">{proponent.minister}</h4>
                                </Congressman>
                                {(this.props.issue as IssueA).proponentsCount -1 > 0 && (
                                    <span>+{(this.props.issue as IssueA).proponentsCount - 1}</span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                {this.props.children}
                {['a', 'l', 'm', 'q'].indexOf(this.props.issue.type.type) >= 0 && (
                    <footer className="issue__footer">
                        <h4 className="issue__type-status">{(this.props.issue as IssueA).status}</h4>
                        <IssueStatus type={this.props.issue.type.type} status={(this.props.issue as IssueA).status} />
                    </footer>
                )}
            </article>
        );
    }
}

export const IssueGrid: FunctionComponent<{variations?: string[]}> = ({children, variations = []}) => (
    <ul className={classVariations('issue-grid', variations)}>{children}</ul>
);

export const IssueGridItem: FunctionComponent<{type: string}> = ({children, type}) => {
    const map: {[key: string]: string} = {
        n: 'sm',
        b: 'md',
        l: 'lg',
        m: 'md',
        q: 'md',
        s: 'md',
        v: 'md',
        a: 'lg',
        f: 'sm',
        ff: 'sm',
        ft: 'sm',
        um: 'sm',
        ud: 'sm',
        uu: 'sm',
    };
    return <li className={classVariations('issue-grid__item', [map[type]])}>{children}</li>
};
