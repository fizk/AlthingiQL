import * as React from "react";
import {FunctionComponent} from "react";

interface Props {
    content: string;
    state: object;
    assetsServer: string;
}

const Html: FunctionComponent<Props> = ({ content, state, assetsServer }) => {
    return (
        <html lang="is">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" type="text/css" href={`${assetsServer}/app.css`} />
                <script dangerouslySetInnerHTML={{
                    __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
                }} />
            </head>
            <body>
                <div data-react dangerouslySetInnerHTML={{ __html: content }} />
                <script src={`${assetsServer}/bundle.js`} />
            </body>
        </html>
    );
};

export default Html;
