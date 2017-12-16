import React from 'react';
import PropTypes from 'prop-types';
import Application from '../../elements/Application';
import {Column, Grid, Row} from "../../elements/Grid/index";
import './_index.scss';

class Chrome extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <Application>
                <div className="chrome">
                    <header className="chrome__header">
                        <div className="chrome__header-container">
                            <Grid>
                                <Row>
                                    <Column>
                                        <nav>
                                            <input type="search"/>
                                        </nav>
                                    </Column>
                                </Row>
                            </Grid>
                        </div>
                    </header>
                    <main className="chrome__main">
                        {this.props.children}
                    </main>
                    <footer className="chrome__footer">
                        @loggjafarthing
                    </footer>
                </div>
            </Application>
        )
    }
}

export {Chrome}
