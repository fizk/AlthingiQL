import React from 'react';
import {Aside, Main} from "../../layouts/Container";
import {Link} from "react-router-dom";
import {CategoryCount, ServerFetchStatus, TypeCount} from "../../../../../@types";

interface Props {
    assembly: number;
    options: ServerFetchStatus & {
        types: TypeCount[];
        categories: CategoryCount[];
    };
    filter: Map<string, string>;
}

export default class AssemblyIssuesPage extends React.Component<Props> {
    render(): React.ReactNode {
        return (
            <>
                <Main>{this.props.children}</Main>
                <Aside>
                    <div>Massive filter</div>
                    {!this.props.options.error && !this.props.options.loading && (
                        <>
                            <h3>Flokkur</h3>
                            <ul>
                            {this.props.options.types.map(type => (
                                <li key={type.type.type}>
                                    <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?tegund=${type.type.type}`}>
                                        {this.props.filter.has('tegund') && (this.props.filter.get('tegund') || '').split(',').indexOf(type.type.type) >= 0 && (
                                            <span>*</span>
                                        )}
                                        {type.type.typeSubName || type.type.typeName}
                                    </Link>
                                </li>
                            ))}
                            </ul>

                            <h3>Malaflokkur</h3>
                            <ul>
                            {this.props.options.categories.map(category => (
                                <li key={category.category.id}>
                                    <Link to={`/loggjafarthing/${this.props.assembly}/thingmal?fmalalokkur=${category.category.id}`}>
                                        {category.category.title}
                                    </Link>
                                </li>
                            ))}
                            </ul>
                        </>
                    )}
                    {!this.props.options.error && this.props.options.loading && (
                        <div>Loading...</div>
                    )}
                    {this.props.options.error && (
                        <div>Error...</div>
                    )}
                </Aside>
            </>
        )
    }
}
