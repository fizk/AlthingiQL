import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {H3} from "../../elements/Headline";

export default class IssuesMenu extends React.Component {
    static propTypes = {
        assembly: PropTypes.number,
        types: PropTypes.arrayOf(PropTypes.shape({
            count: PropTypes.number,
            type: PropTypes.string,
            typeName: PropTypes.string,
            typeSubName: PropTypes.string,
        })),
        categories: PropTypes.arrayOf(PropTypes.shape({
            categoryId: PropTypes.number,
            superCategoryId: PropTypes.number,
            title: PropTypes.string,
            count: PropTypes.number,
        })),
        loading: PropTypes.bool,
    };

    static defaultProps = {
        assembly: undefined,
        types: [],
        categories: [],
        loading: false,
    };

    render() {
        return (
            <Fragment>
                <H3>Málstegund</H3>
                <ul>
                    {this.props.types.map(type => (
                        <li key={`type-${type.type}`}>
                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?tegund=${type.type}`}>{type.typeName}</Link>
                            {type.typeSubName} - ({type.count})

                        </li>
                    ))}
                </ul>
                <H3>Efnisflokkar</H3>
                <ul>
                    {this.props.categories.map((category, i) => (
                        <li key={`category-${category.id}`}>
                            <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?flokkur=${category.id}`}>{category.title}</Link>
                            ({category.count})
                        </li>
                    ))}
                </ul>
            </Fragment>
        )
    }
}

