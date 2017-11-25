import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class ParliamentaryResolutionBadge extends React.Component {
    // a: Tillaga til þingsályktunar / þingsályktunartillaga
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
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
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.props.children}
            </div>
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
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.props.children}
            </div>
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
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.props.children}
            </div>
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
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.props.children}
            </div>
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
            status: PropTypes.string,
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
            status: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    constructor(props) {
        super(props);

        this.status = {
            undefined : '',
            'Bíður 1. umræðu' : '',
            'Bíður 2. umræðu' : '',
            'Í nefnd eftir 1. umræðu' : '',
            'Í nefnd eftir 2. umræðu' : '',
            'Samþykkt sem lög frá Alþingi' : '',
            'Vísað til ríkisstjórnar' : '',
        }
    }

    getStatus(type, status) {
        return (type === 'l' || type === 'm' || type === 'q')
            ? <h4>{status}</h4>
            : null;
    }

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.getStatus(this.props.issue.type, this.props.issue.status)}
                {this.props.children}
            </div>
        );
    }
}

export class InquiryBadge extends React.Component {
    // m : Fyrirspurn / fyrirspurn
    constructor(props) {
        super(props);

        this.status = {
            undefined : '',
            'Fyrirspurnin var felld niður vegna ráðherraskipta' : '',
            'Fyrirspurnin var kölluð aftur' : '',
            'Fyrirspurninni var ekki svarað' : '',
            'Fyrirspurninni var svarað munnlega' : '',
        }
    }
    static propTypes = {
        issue: PropTypes.shape({
            id: PropTypes.number,
            assembly: PropTypes.shape({
                id: PropTypes.number,
            }),
            name: PropTypes.string,
            status: PropTypes.string,
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
            status: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    getStatus(type, status) {
        return (type === 'l' || type === 'm' || type === 'q')
            ? <h4>{status}</h4>
            : null;
    }

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.getStatus(this.props.issue.type, this.props.issue.status)}
                {this.props.children}
            </div>
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
            status: PropTypes.string,
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
            status: undefined,
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    constructor(props) {
        super(props);

        this.status = {
            undefined : '',
            'Fyrirspurnin var felld niður vegna ráðherraskipta' : '',
            'Fyrirspurninni var ekki svarað' : '',
            'Fyrirspurninni var svarað skriflega' : '',
        }
    }

    getStatus(type, status) {
        return (type === 'l' || type === 'm' || type === 'q')
            ? <h4>{status}</h4>
            : null;
    }

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.getStatus(this.props.issue.type, this.props.issue.status)}
                {this.props.children}
            </div>
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
            type: undefined,
            goal: undefined,
            typeName: undefined,
        }
    };

    render() {
        return (
            <div className="issue-badge">
                <h3>
                    <Link to={`/loggjafathing/${this.props.issue.assembly.id}/thingmal/${this.props.issue.id}`}>{this.props.issue.name}</Link>
                </h3>
                <h5>{this.props.issue.typeName}</h5>
                {this.props.children}
            </div>
        );
    }
}
