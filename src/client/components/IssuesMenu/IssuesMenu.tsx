import * as React from 'react';
import {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { H3 } from '../../elements/Headline';

interface Props {
    assembly?: number;
    types?: Array<{
        count?: number,
        type?: string,
        typeName?: string,
        typeSubName?: string,
    }>;
    categories?: Array<{
        categoryId?: number,
        superCategoryId?: number,
        title?: string,
        count?: number,
    }>;
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
                <H3>Málstegund</H3>
                <ul>
                    {this.props.types.map(type => (
                        <li key={`type-${type.type}`}>
                            <Link
                                to={`/loggjafarthing/${
                                    this.props.assembly
                                }/thingmal?tegund=${type.type}`}
                            >
                                {type.typeName}
                            </Link>
                            {type.typeSubName} - ({type.count})
                        </li>
                    ))}
                </ul>
                <H3>Efnisflokkar</H3>
                <ul>
                    {this.props.categories.map(category => (
                        <li key={`category-${category.categoryId}`}>
                            <Link
                                to={`/loggjafarthing/${
                                    this.props.assembly
                                }/thingmal?flokkur=${category.categoryId}`}
                            >
                                {category.title}
                            </Link>
                            ({category.count})
                        </li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}
