import * as React from "react";
import Application from "../../elements/Application";
import { Column, Grid, Row } from "../../elements/Grid";
import './index.scss';

export default class Chrome extends React.Component<{}, {}> {

    render() {
        return (
            <Application>
                <div className="chrome">
                    <header className="chrome__header" role="banner">
                        <div className="chrome__header-container">
                            <Grid>
                                <Row>
                                    <Column>
                                        <nav>
                                            <input
                                                aria-label="Aðalleit"
                                                type="search"
                                            />
                                        </nav>
                                    </Column>
                                </Row>
                            </Grid>
                        </div>
                    </header>
                    <main className="chrome__main" role="main">
                        {this.props.children}
                    </main>
                    <footer className="chrome__footer">@loggjafarthing</footer>
                </div>
            </Application>
        );
    }
}
