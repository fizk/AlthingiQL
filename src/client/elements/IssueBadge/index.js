import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {H3, H5} from '../Headline';
import SimpleBillProgress from '../SimpleBillProgress';
import SimpleRequestProgress from '../SimpleRequestProgress';
import Badge from '../Badge';
import Congressman from '../Congressman';
import './_index.scss';

export class ParliamentaryResolutionBadge extends React.Component {
    // a: Tillaga til þingsályktunar / þingsályktunartillaga
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
            avatar:{
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--resolution">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman key={`proponent-${this.props.congressman.id}`}
                                         congressman={this.props.congressman} party={this.props.congressman.party}>
                            </Congressman>
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

export class RequestForReportBadge extends React.Component {
    // b: Beiðni um skýrslu
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--request">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman key={`proponent-${this.props.congressman.id}`}
                                         congressman={this.props.congressman} party={this.props.congressman.party}>
                            </Congressman>
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

export class ReportBadge extends React.Component {
    // s: Skýrsla
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--report">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman key={`proponent-${this.props.congressman.id}`}
                                         congressman={this.props.congressman} party={this.props.congressman.party}>
                            </Congressman>
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

export class MeetingPostponementBadge extends React.Component {
    // f: Tillaga til þingsályktunar / frestun funda
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--meeting">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <Congressman key={`proponent-${this.props.congressman.id}`}
                                     congressman={this.props.congressman} party={this.props.congressman.party}>
                        </Congressman>
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

export class BillBadge extends React.Component {
    // l : Frumvarp til laga
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            status: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            name: undefined,
            subName: undefined,
            status: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
            proponentsCount: 0,
        },
        congressman: {
            id: undefined,
            name: undefined,
            avatar: {
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    url(url) {
        return (url || '').replace('{width}', 300).replace('{height}', 200);
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--bill">
                    <header className="issue-badge__header"
                            style={{backgroundImage: `url(${this.url(this.props.congressman.avatar.templateSrc)})`}}>
                        <div className="issue-badge__congressman">
                            <div className="issue-badge__congressman-badge">
                                <Badge title={this.props.congressman.party.name} color={this.props.congressman.party.color}/>
                            </div>
                            <H3 variations={['ellipsis']}>{this.props.congressman.name}</H3>
                            {this.count(this.props.issue.proponentsCount)}
                        </div>
                    </header>
                    <aside  className="issue-badge__body">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
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
                            <SimpleBillProgress status={this.props.issue.status}/>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

export class InquiryBadge extends React.Component {
    // m : Fyrirspurn / fyrirspurn
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--inquiry">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman key={`proponent-${this.props.congressman.id}`}
                                         congressman={this.props.congressman} party={this.props.congressman.party}>
                            </Congressman>
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">
                            <SimpleRequestProgress status={this.props.issue.status}/>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

export class WrittenInquiryBadge extends React.Component {
    // q : Fyrirspurn / fyrirspurn til skrifl. svars
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--written-inquiry">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman key={`proponent-${this.props.congressman.id}`}
                                         congressman={this.props.congressman} party={this.props.congressman.party}>
                            </Congressman>
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">
                            <SimpleRequestProgress status={this.props.issue.status}/>
                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}

export class OpinionBadge extends React.Component {
    // n : Álit / álit nefndar
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
        }),
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
            },
            name: undefined,
            subName: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--opinion">

                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
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

export class IssueBadge extends React.Component {
    // m : Fyrirspurn / fyrirspurn
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            subName: PropTypes.string,
            type: PropTypes.string,
            goal: PropTypes.string,
            typeName: PropTypes.string,
            proponentsCount: PropTypes.number,
        }),
        congressman: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            avatar: PropTypes.shape({
                templateSrc: PropTypes.string,
            }),
            party: PropTypes.shape({
                id: PropTypes.number,
                name: PropTypes.string,
                color: PropTypes.string,
            })
        })
    };

    static defaultProps = {
        issue: {
            id: undefined,
            assembly: {
                id: undefined,
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
                templateSrc: undefined,
            },
            party: {
                id: undefined,
                name: undefined,
                color: undefined
            },
        }
    };

    count(count) {
        return count - 1 > 1
            ? (
                <div className="issue-badge__congressman-count">
                    <span> +{count - 1}</span>
                </div>
            )
            : null
    }

    render() {
        return (
            <Link to={`/loggjafarthing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>
                <article className="issue-badge issue-badge--inquiry">
                    <header className="issue-badge__header">
                        <div className="issue-badge__headline">
                            <H3>{this.props.issue.id}.  {this.props.issue.name}, {this.props.issue.subName}</H3>
                        </div>
                        <div className="issue-badge__type">
                            {this.props.issue.type}
                        </div>
                    </header>
                    <section className="issue-badge__body">
                        <div className="issue-badge__congressman">
                            <Congressman key={`proponent-${this.props.congressman.id}`}
                                         congressman={this.props.congressman} party={this.props.congressman.party}>
                            </Congressman>
                        </div>
                        {this.count(this.props.issue.proponentsCount)}
                    </section>
                    <aside>
                        {this.props.children}
                    </aside>
                    <footer className="issue-badge__footer">
                        <div className="issue-badge__type-name">
                            <H5>{this.props.issue.typeName}</H5>
                        </div>
                        <div className="issue-badge__status">

                        </div>
                    </footer>
                </article>
            </Link>
        );
    }
}
