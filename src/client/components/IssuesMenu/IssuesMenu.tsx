import * as React from 'react';
import {Fragment} from 'react';
import { Link } from 'react-router-dom';
import {CategorySummary, TypeCount} from '../../../../@types';
import './index.scss';

interface Props {
    assembly: number;
    types?: TypeCount[]
    categories?: CategorySummary[];
    loading?: boolean;
}

export default class IssuesMenu extends React.Component<Props, {}> {
    public static defaultProps = {
        assembly: undefined,
        types: [],
        categories: [],
        loading: false,
    };

    public render() {
        return (
            <Fragment>
                <h2>Málstegund</h2>
                <ul className="issue-menu__issue">
                    {(this.props.types || []).map(type => (
                        <li key={`type-${type.type}`} className="issue-menu__issue-item">
                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?tegund=${type.type.type}`}>
                                {type.type.typeSubName}
                            </Link>
                            <span className="issue-menu__issue-count">
                                ({type.count})
                            </span>
                        </li>
                    ))}
                </ul>

                <h2>Efnisflokkar</h2>
                <ul className="issue-menu__category">
                    {(this.props.categories || []).map(category => (
                        <li key={`category-${category.id}`} className="issue-menu__category-item">
                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?flokkur=${category.id}`}>
                                {category.title}
                            </Link>
                            <span className="issue-menu__category-count">
                                ({category.count})
                            </span>
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}
