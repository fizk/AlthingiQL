import * as React from 'react';
import { Link } from "react-router-dom";
import { H3, H5 } from "../Headline";
import SimpleBillProgress from "../SimpleBillProgress";
import SimpleRequestProgress from "../SimpleRequestProgress";
import Badge from "../Badge";
import Congressman from "../Congressman";
import './index.scss';

type ParliamentaryResolutionBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class ParliamentaryResolutionBadge extends React.Component<ParliamentaryResolutionBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--resolution">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type RequestForReportBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class RequestForReportBadge extends React.Component<RequestForReportBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--request">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type ReportBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class ReportBadge extends React.Component<ReportBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--report">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type MeetingPostponementBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class MeetingPostponementBadge extends React.Component<MeetingPostponementBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--meeting">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <Congressman
                            key={`proponent-${this.props.congressman.id}`}
                            congressman={this.props.congressman}
                            party={this.props.congressman.party}
                        />
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type BillBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        status?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class BillBadge extends React.Component<BillBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            status: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    url(url) {
        return (url || "").replace("{size}", '400x300');
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--bill">
                    <header
                        className="issue-badge__header"
                        style={{
                            backgroundImage: `url(${this.url(
                                this.props.congressman.avatar.templateSrc
                            )})`
                        }}
                    >
                        <div className="issue-badge__congressman">
                            <div className="issue-badge__congressman-badge">
                                <Badge
                                    title={this.props.congressman.party.name}
                                    color={this.props.congressman.party.color}
                                />
                            </div>
                            <H3 variations={["ellipsis"]}>
                                {this.props.congressman.name}
                            </H3>
                            {this.count(this.props.issue.proponentsCount)}
                        </div>
                    </header>
                    <aside className="issue-badge__body">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </aside>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">
                            <SimpleBillProgress
                                status={this.props.issue.status}
                            />
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type InquiryBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        status?: string
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class InquiryBadge extends React.Component<InquiryBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            status: undefined,
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--inquiry">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">
                            <SimpleRequestProgress
                                status={this.props.issue.status}
                            />
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type WrittenInquiryBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        status?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class WrittenInquiryBadge extends React.Component<WrittenInquiryBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            status: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--written-inquiry">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">
                            <SimpleRequestProgress
                                status={this.props.issue.status}
                            />
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

type OpinionBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string
    }
};

export class OpinionBadge extends React.Component<OpinionBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined
        }
    };
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--opinion">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <footer className="issue-badge__footer">
                        <H5>{this.props.issue.typeName}</H5>
                    </footer>
                </article>
            </Link>
        );
    }
}

type IssueBadgeProps = {
    issue?: {
        id?: number,
        assembly?: {
            id?: number
        },
        name?: string,
        subName?: string,
        type?: string,
        goal?: string,
        typeName?: string,
        proponentsCount?: number
    },
    congressman?: {
        id?: number,
        name?: string,
        avatar?: {
            templateSrc?: string
        },
        party?: {
            id?: number,
            name?: string,
            color?: string
        }
    }
};

export class IssueBadge extends React.Component<IssueBadgeProps, {}> {
    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            }
        }
    };
    count(count) {
        return count - 1 > 1 ? (
            <div className="issue-badge__congressman-count">
                <span> +{count - 1}</span>
            </div>
        ) : null;
    }
    render() {
        return (
            <Link
                to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${
                    this.props.issue.id
                }`}
            >
                <article className="issue-badge issue-badge--inquiry">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>
                                {this.props.issue.id}. {this.props.issue.name},{" "}
                                {this.props.issue.subName}
                            </H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman
                                key={`proponent-${this.props.congressman.id}`}
                                congressman={this.props.congressman}
                                party={this.props.congressman.party}
                            />
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <aside>{this.props.children}</aside>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status" />
                    </footer>
                </article>
            </Link>
        );
    }
}
