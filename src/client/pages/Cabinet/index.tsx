import * as React from 'react';
import {Fragment} from 'react';
import {Helmet} from 'react-helmet';
import {default as CabinetsPanel} from '../../panels/Cabinets';
import {default as CabinetPanel} from '../../panels/Cabinet';
import {Route} from 'react-router';

export default class Cabinet extends React.Component {
    public render() {
        return (
            <Fragment>
                <Helmet>
                    <title>{`Löggjafarþing | Ráduneyti`}</title>
                    <link
                        rel="canonical"
                        href={`/raduneyti`}
                    />
                </Helmet>
                <Route exact={true} path="/raduneyti" render={() => (
                        <CabinetsPanel />
                    )
                }/>
                <Route exact={true} path="/raduneyti/:cabinet_id" render={({match }) => (
                        <CabinetPanel id={match.params.cabinet_id} />
                    )
                }/>
            </Fragment>
        );
    }
}
