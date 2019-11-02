import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {BrowserRouter as Router} from 'react-router-dom';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import faker from 'faker';

import {Footer, Header, User} from "../../layouts/Container";
import AssemblyHeader from "../../components/AssemblyHeader";

import AssemblySummaryPage from "../AssemblySummaryPage/AssemblySummaryPage";
import AssemblyIssuesPage from "../AssemblyIssuesPage/AssemblyIssuesPage";
import AssemblyPlenariesPage from "../AssemblyPlenariesPage/AssemblyPlenariesPage";
import AssemblyCongressmenPage from "../AssemblyCongressmenPage/AssemblyCongressmenPage";
import AssemblyCongressmanPanel from "../../panels/AssemblyCongressmanPanel/AssemblyCongressmanPanel";
import AssemblyCongressmenPanel from "../../panels/AssemblyCongressmenPanel/AssemblyCongressmenPanel";
import AssemblyPlenariesPanel from "../../panels/AssemblyPlenariesPanel/AssemblyPlenariesPanel";
import AssemblyPlenaryPanel from "../../panels/AssemblyPlenaryPanel/AssemblyPlenaryPanel";
import AssemblyIssuesPanel from "../../panels/AssemblyIssuesPanel/AssemblyIssuesPanel";
import AssemblyIssueSummaryPanel from "../../panels/AssemblyIssuesummaryPanel/AssemblyIssueSummaryPanel";
import AssemblyIssueDocumentsPanel from "../../panels/AssemblyIssueDocumentsPanel/AssemblyIssueDocumentsPanel";
import AssemblyIssueSpeechesPanel from "../../panels/AssemblyIssueSpeechesPanel/AssemblyIssueSpeechesPanel";
import AssemblyIssuePanel from "../../panels/AssemblyIssuePanel/AssemblyIssuePanel";
import AssemblyPartiesPage from "../AssemblyPartiesPage/AssemblyPartiesPage";
import AssemblyPartiesPanel from "../../panels/AssemblyPartiesPanel/AssemblyPartiesPanel";
import AssemblyPartyPanel from "../../panels/AssemblyPartyPanel/AssemblyPartyPanel";
import {
    party,
    congressman,
    issueTypesList,
    propositionStatusList,
    billStatusList,
    categoriesList,
    issue,
    document,
    speech,
    plenary,
    plenaryItem,
    sessions
} from '../../../utils/fakers'
import {CategoryType,} from "../../../../../@types";
import '../../global.scss';

const stories = storiesOf('Pages/Main', module);
stories.addDecorator(withKnobs);



stories.add('/loggjafarthing/:assembly', () => {
    const data = {
        assembly: 149,
        assemblies: {
            error: boolean('assemblies - error', false) ? new Error('error') : undefined,
            loading: boolean('assemblies - loading', false),
            assemblies: Array.from({length: 10}).map((item, i) => {
                return {
                    id: i,
                    period: {from: '2001-01-01', to: '2001-01-01'},
                    division: {
                        majority: [],
                        minority: [],
                    },
                    cabinet: {
                        id: 1,
                        title: 'string',
                        description: 'string',
                        period: {from: '', to: ''},
                        assemblies: [],
                    }
                }
            }),
        },
        issueStatistics: {
            error:  boolean('issueStatistics - error', false) ? new Error('error') : undefined,
            loading: boolean('issueStatistics - loading', false),
            bills: billStatusList().map(status => ({
                count: faker.random.number(100),
                status
            })),
            governmentBills: billStatusList().map(status => ({
                count: faker.random.number(100),
                status
            })),
            proposals: propositionStatusList().map(status => ({
                count: faker.random.number(100),
                status
            })),
            types: issueTypesList().map(type => ({
                count: faker.random.number(100),
                type
            })),
            categories: categoriesList().map(category => ({
                count: faker.random.number(100),
                category
            })),
        },
        inflation: {
            error:  boolean('inflation - error', false) ? new Error('error') : undefined,
            loading: boolean('inflation - loading', false),
            inflation: Array.from({length: 10}).map((item, i) => ({
                id: 1,
                value: faker.random.number({min:5, max:10, precision: .2}),
                date: ((): string => {
                    const date = new Date('2001-01-01');
                    date.setMonth(date.getMonth() + i);
                    return date.toUTCString()
                })()
            }))
        },
        congressmenPerformance: {
            error:  boolean('congressmenPerformance - error', false) ? new Error('error') : undefined,
            loading: boolean('congressmenPerformance - loading', false),
            bills: [1,2,3,4,5,].map(() => ({
                congressman: congressman(),
                value: faker.random.number(100),
            })),
            questions: [1,2,3,4,5,].map(() => ({
                congressman: congressman(),
                value: faker.random.number(100),
            })),
            resolutions: [1,2,3,4,5,].map(() => ({
                congressman: congressman(),
                value: faker.random.number(100),
            })),
            speeches: [1,2,3,4,5,].map(() => ({
                congressman: congressman(),
                value: faker.random.number(100),
            })),
        },
        speechTimes: {
            error:  boolean('speechTimes - error', false) ? new Error('error') : undefined,
            loading: boolean('speechTimes - loading', false),
            parties: Array.from({length: 6}).map(() => ({
                party: party(),
                time: faker.random.number(1000),
            }))
        },
        issueTimes: {
            error:  boolean('issueTimes - error', false) ? new Error('error') : undefined,
            loading: boolean('issueTimes - loading', false),
            issues: Array.from({length: 5}).map(() => ({
                value: faker.random.number(1000),
                issue: issue()
            }))
        }
    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={149} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>
                <AssemblySummaryPage {...data} />
                <Footer/>
            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingmal', () => {
    const data = {
        assembly: 123,
        issues: {
            error:  boolean('issues - error', false) ? new Error('error') : undefined,
            loading: boolean('issues - loading', false),
            issues: Array.from({length: 20}).map(issue),
            done: false,
        },
        filter: new Map(),
        options: {
            error:  boolean('options - error', false) ? new Error('error') : undefined,
            loading: boolean('options - loading', false),
            types: issueTypesList().map(type => ({
                count: faker.random.number(100),
                type
            })),
            categories: categoriesList().map(category => ({
                count: faker.random.number(100),
                category
            })),
        },
        pagination: (): void => {},

    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={149} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>
                <AssemblyIssuesPage assembly={data.assembly} filter={data.filter} options={data.options} >
                    <AssemblyIssuesPanel {...data} />
                </AssemblyIssuesPage>
                <Footer/>
            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingmal/:category/:issue', () => {
    const data = {
        error:  boolean('error', false) ? new Error('error') : undefined,
        loading: boolean('loading', false),
        assembly: 123,
        issue: 1,
        category: ('A' as CategoryType),
        progress: [],
        issueItem: issue(),
        issueProperties: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            issue: issue()
        },
        options: {
            error:  boolean('options - error', false) ? new Error('error') : undefined,
            loading: boolean('options - loading', false),
            types: issueTypesList().map(type => ({
                count: faker.random.number(100),
                type
            })),
            categories: categoriesList().map(category => ({
                count: faker.random.number(100),
                category
            })),
        },
        filter: new Map(),
    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyIssuesPage {...data}>
                    <AssemblyIssuePanel {...data}>
                        <AssemblyIssueSummaryPanel {...data}  />
                    </AssemblyIssuePanel>
                </AssemblyIssuesPage>
            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingmal/:category/:issue/thingskjol', () => {
    const data = {
        error:  boolean('error', false) ? new Error('error') : undefined,
        loading: boolean('loading', false),
        assembly: 123,
        issue: 1,
        category: ('A' as CategoryType),
        issueItem: issue(),
        issueProperties: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            issue: issue()
        },
        options: {
            error:  boolean('options - error', false) ? new Error('error') : undefined,
            loading: boolean('options - loading', false),
            types: issueTypesList().map(type => ({
                count: faker.random.number(100),
                type
            })),
            categories: categoriesList().map(category => ({
                count: faker.random.number(100),
                category
            })),
        },
        documents: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            documents: Array.from({length: 10}).map(document)
        },
        filter: new Map(),
    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyIssuesPage {...data}>
                    <AssemblyIssuePanel {...data}>
                        <AssemblyIssueDocumentsPanel {...data}  />
                    </AssemblyIssuePanel>
                </AssemblyIssuesPage>
            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingmal/:category/:issue/raedur', () => {
    const data = {
        error:  boolean('error', false) ? new Error('error') : undefined,
        loading: boolean('loading', false),
        assembly: 123,
        issue: 1,
        category: ('A' as CategoryType),
        progress: [],
        issueItem: issue(),
        issueProperties: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            issue: issue()
        },
        options: {
            error:  boolean('options - error', false) ? new Error('error') : undefined,
            loading: boolean('options - loading', false),
            types: issueTypesList().map(type => ({
                count: faker.random.number(100),
                type
            })),
            categories: categoriesList().map(category => ({
                count: faker.random.number(100),
                category
            })),
        },
        filter: new Map(),
        speeches: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            speeches: Array.from({length: faker.random.number(10)}).map(speech),
            done: false
        },
        pagination: (): void => {}
    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyIssuesPage {...data}>
                    <AssemblyIssuePanel {...data}>
                        <AssemblyIssueSpeechesPanel {...data}  />
                    </AssemblyIssuePanel>
                </AssemblyIssuesPage>
            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingfundir', () => {
    const data = {
        assembly: 123,
        plenaries: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            plenaries: Array.from({length: 100}).map(plenary)
        }
    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyPlenariesPage {...data}>
                    <AssemblyPlenariesPanel {...data}  />
                </AssemblyPlenariesPage>

            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingfundir/:plenary', () => {
    const data = {
        assembly: 123,
        plenary: 321,
        agenda: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            items: Array.from({length: faker.random.number(10)}).map(plenaryItem),
        },
        plenaries: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            plenaries: Array.from({length: faker.random.number(10)}).map(plenary),
        }
    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyPlenariesPage {...data}>
                    <AssemblyPlenaryPanel {...data}  />
                </AssemblyPlenariesPage>

            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingmenn', () => {
    const data = {
        assembly: 123,
        congressmen: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            congressmen: Array.from({length: faker.random.number(10)}).map(congressman),
            substitutes: Array.from({length: faker.random.number(10)}).map(congressman),
        },
        onFilter: action('filter congressmen names'),

    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyCongressmenPage {...data}>
                    <AssemblyCongressmenPanel {...data}  />
                </AssemblyCongressmenPage>

            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingmenn/:congressman', () => {
    const data = {
        assembly: 123,
        congressmen: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            congressmen: Array.from({length: faker.random.number(10)}).map(congressman),
            substitutes: Array.from({length: faker.random.number(10)}).map(congressman),
        },
        onFilter: action('filter congressmen names'),
        congressman: 1234,
        sessions: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            sessions: sessions()
        },
        votes: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),

            votes: ["absence", "announced_absence", "neutral" , "partisan"].map(vote => ({
                count: faker.random.number(100),
                vote: vote
            })),
        },
        issues: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            promotions: Array.from({length: faker.random.number(10)}).map(issue),
            types: Array.from({length: faker.random.number(10)}).map((item, i) => ({
                    order: i,
                    type: faker.lorem.word(),
                    typeName:  faker.lorem.word(),
                    typeSubName: faker.lorem.word(),
                    documentType: faker.lorem.words(2),
                    count: faker.random.number(20),
            })),
            speeches: Array.from({length: 10}).map(() => ({
                superCategory: {
                    id: faker.random.number(1000),
                    title: faker.lorem.words(2),
                },
                time: faker.random.number(500),
            }))
        },
        person: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            person: {
                id: faker.random.number(1000),
                name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                birth: '1978-04-11',
                abbreviation: 'EVA',
                avatar: {
                    templateSrc: faker.image.avatar(),
                },
            },
        },

    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyCongressmenPage {...data}>
                    <AssemblyCongressmanPanel {...data}  />
                </AssemblyCongressmenPage>

            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingflokkar', () => {
    const data = {
        assembly: 123,
        parties: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            parties: Array.from({length: 10}).map(() => ({
                party: party()
            }))
        }

    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyPartiesPage {...data}>
                    <AssemblyPartiesPanel {...data}  />
                </AssemblyPartiesPage>

            </div>
        </Router>
    )
});

stories.add('/loggjafarthing/:assembly/thingflokkar/:party', () => {
    const data = {
        assembly: 123,
        party: 321,
        parties: {
            error:  boolean('error', false) ? new Error('error') : undefined,
            loading: boolean('loading', false),
            parties: Array.from({length: 10}).map(() => ({
                party: party()
            }))
        }

    };
    return (
        <Router>
            <div className="app">
                <Header>
                    <AssemblyHeader id={123} title="Ráðuneyti Katrínar Jakobsdóttur"/>
                </Header>
                <User>avatar and search</User>

                <AssemblyPartiesPage {...data}>
                    <AssemblyPartyPanel {...data}  />
                </AssemblyPartiesPage>

            </div>
        </Router>
    )
});
