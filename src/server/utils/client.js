import * as http from 'http';

export const getPagination = (debug, config) => (url, cursor) => {
    const options = {
        hostname: config.host,
        port: config.port,
        path: url,
        method: 'GET',
        headers: {}
    };
    if (cursor) {
        options.headers = {
            Range: cursor.to ? `${cursor.from}-${cursor.to}` : `${cursor.from}-`,
        };
    } else {
        options.headers = {
            Range: `0-`,
        };
    }
    return new Promise((resolve, reject) => {
        const req = http.request(options, response => {
            if(response.statusCode !== 206) {
                response.resume();
                const error = {
                    code: response.statusCode,
                    message: response.statusMessage,
                };
                reject(error);
                debug('Request: %O, Error: %O', options, error);
            } else {
                const contentRange: string = String(response.headers['content-range']);
                const [_0, _1, from, to, total] = contentRange.match(/(items )([0-9]*)-([0-9]*)\/([0-9]*)/);
                const size = Number(to) - Number(from);

                const nextCursor = {
                    from: Number(to),
                    to: (cursor && cursor.to) ? Number(to) + size : null,
                };
                let body = '';
                response.setEncoding('utf8');
                response.on('data', chunk => body += chunk);
                response.on('end', () => {
                    try {
                        const data = JSON.parse(body);
                        debug('Request: %O, Done: %O, Input range: %O', options, {done: Number(to) >= Number(total)}, {from, to, total});
                        resolve({data: data, cursor: nextCursor, done: Number(to) >= Number(total)});
                    } catch (error) {
                        response.resume();
                        debug('Request: %O, Error: %O, Body: %O', options, error, body);
                        reject(error);
                    }
                });
            }
        });
        req.on('error', error => {
            debug('Request: %O, Error: %O', options, error);
            reject(error);
        });
        req.end();
    })

};

export const get = (debug, config) => url => {
    const options = {
        hostname: config.host,
        port: config.port,
        path: url,
        method: 'GET',

    };
    return new Promise((resolve, reject) => {
        const req = http.request(options, response => {
            if(Math.floor(response.statusCode / 100) !== 2) {
                response.resume();
                const error = {
                    code: response.statusCode,
                    message: response.statusMessage,
                };
                reject(error);
                debug('Request: %O, Error: %O', options, error);
            } else {

                let body = '';
                response.setEncoding('utf8');
                response.on('data', chunk => body += chunk);
                response.on('end', () => {
                    try {
                        debug('Request: %O', options);
                        resolve(JSON.parse(body));
                    } catch (error) {
                        response.resume();
                        debug('Request: %O, Error: %O, Body: %O', options, error, body);
                        reject(error);
                    }
                });
            }
        });
        req.on('error', error => {
            debug('Request: %O, Error: %O', options, error);
            reject(error);
        });
        req.end();
    })
};

export const client = (debug, config) => ({
    getPagination: getPagination(debug, config),
    get: get(debug, config),
});
