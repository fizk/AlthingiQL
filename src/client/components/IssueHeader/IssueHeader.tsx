import * as React from "react";
import { H1, H2, H3 } from "../../elements/Headline";
import { Row, Column } from "../../elements/Grid";

type AssemblyIssue = {
    id: number
    assembly?: {id: number}
    category?: string
    name: string
    subName?: string
    type?: string
    typeName: string
    typeSubName?: string
    status: string
    question?: string
    goal?: string
    date: string
}

type IssueHeaderProps = {
    issue?: AssemblyIssue,
    loading?: boolean
};

export default class IssueHeader extends React.Component<IssueHeaderProps, {}> {
    static defaultProps: IssueHeaderProps = {
        issue: {
            id: undefined,
            name: undefined,
            typeName: undefined,
            status: undefined,
            date: undefined
        },
        loading: false
    };
    render() {
        return (
            <Row>
                <Column>
                    <H1>
                        {this.props.issue.id} {this.props.issue.name}
                    </H1>
                    <H3>{this.props.issue.typeName}</H3>
                    <H2>{this.props.issue.status}</H2>
                    <time>{this.props.issue.date}</time>
                </Column>
            </Row>
        );
    }
}
