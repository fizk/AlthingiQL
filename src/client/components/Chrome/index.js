import React from 'react';
import PropTypes from 'prop-types';
import {Column, Grid, Row} from "../../elements/Grid/index";

class Chrome extends React.Component {
    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
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
                <footer className="chrome__footer"></footer>
            </div>
        )
    }
}

export {Chrome}
