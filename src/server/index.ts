import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();
const port = process.env.PORT || 3000;
import * as http from 'http';

app.use(express.static('public'));
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: {
        client: {
            getPagination: (url, cursor) => {
                const options = {
                    hostname: 'localhost',
                    port: 8080,
                    path: url,
                    method: 'GET',
                    headers: {}
                };
                if (cursor) {
                    options.headers = {Range: cursor,};
                }
                return new Promise((resolve, reject) => {
                    const req = http.request(options, response => {
                        if(response.statusCode !== 206) {
                            response.resume();
                            reject({
                                code: response.statusCode,
                                message: response.statusMessage,
                            });
                        } else {
                            const contentRange: string = String(response.headers['content-range']);
                            const [_0, _1, from, to, total] = contentRange.match(/(items )([0-9]*)-([0-9]*)\/([0-9]*)/);
                            const size = Number(to) - Number(from);

                            const cursor = `${to}-${Number(to) + size}`;
                            let body = '';
                            response.setEncoding('utf8');
                            response.on('data', chunk => body += chunk);
                            response.on('end', () => {
                                try {
                                    const data = JSON.parse(body);
                                    resolve({data: data, cursor: cursor})
                                } catch (e) {
                                    response.resume();
                                    reject(e);
                                }
                            });
                        }
                    });
                    req.on('error', error => {
                        reject(error);
                    });
                    req.end();
                })

            },
            get: url => {
                const options = {
                    hostname: 'localhost',
                    port: 8080,
                    path: url,
                    method: 'GET',

                };
                return new Promise((resolve, reject) => {
                    const req = http.request(options, response => {
                        if(Math.floor(response.statusCode / 100) !== 2) {
                            response.resume();
                            reject({
                                code: response.statusCode,
                                message: response.statusMessage,
                            });
                        } else {

                            let body = '';
                            response.setEncoding('utf8');
                            response.on('data', chunk => body += chunk);
                            response.on('end', () => {
                                try {
                                    resolve(JSON.parse(body))
                                } catch (e) {
                                    response.resume();
                                    reject(e);
                                }
                            });
                        }
                    });
                    req.on('error', error => {
                        reject(error);
                    });
                    req.end();
                })
            }
        }
    }
}));
app.get('*', (request, response) => {
   response.send(`
    <!doctype html>
    <html>
        <head></head>
        <body>
            <div data-react></div>
            <script src="/scripts/application.js"></script>
        </body>
    </html>
   `)
});

app.listen(port, () => {
    console.log(`Server started on ${port}`)
});
