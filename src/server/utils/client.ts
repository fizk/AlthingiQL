import * as http from 'http';
import {RequestOptions} from 'http';

export const getPagination = (debug, config) => (url, cursor) => {
    const startTime = process.hrtime();
    const options: RequestOptions = {
        hostname: config.host,
        port: config.port,
        path: url,
        method: 'GET',
        headers: {
            Connection: 'keep-alive',
        },
    };
    if (cursor) {
        options.headers = {
            ...options.headers,
            Range: cursor.to ? `${cursor.from}-${cursor.to}` : `${cursor.from}-`,
        };
    } else {
        options.headers = {
            ...options.headers,
            Range: `0-`,
        };
    }
    return new Promise<{data: object, cursor: {from: number, to: number}, done: boolean}>((resolve, reject) => {
        const req = http.request(options, response => {
            if (response.statusCode !== 206) {
                response.resume();
                const error = {
                    code: response.statusCode,
                    message: response.statusMessage,
                };
                reject(error);
                // tslint:disable-next-line
                console.error(JSON.stringify({
                    request: options,
                    response: response.headers,
                    error: `${error.code} ${error.message}`,
                    cpu: process.cpuUsage(),
                    memory: process.memoryUsage(),
                    time: process.hrtime(startTime),
                }));
            } else {
                const contentRange = String(response.headers['content-range']);
                const [, , from, to, total] = contentRange.match(/(items )([0-9]*)-([0-9]*)\/([0-9]*)/);
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
                        resolve({data, cursor: nextCursor, done: Number(to) >= Number(total)});
                        // tslint:disable-next-line
                        console.log(JSON.stringify({
                            request: Object.assign({}, options, {done: Number(to) >= Number(total)}, {from, to, total}),
                            response: response.headers,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                    } catch (error) {
                        response.resume();
                        reject(error);
                        // tslint:disable-next-line
                        console.error(JSON.stringify({
                            request: options,
                            response: response.headers,
                            error: `${error.name} ${error.message}`,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                    }
                });
            }
        });
        req.on('error', error => {
            reject(error);
            // tslint:disable-next-line
            console.error(JSON.stringify({
                request: options,
                response: {},
                error: `${error.name} ${error.message}`,
                cpu: process.cpuUsage(),
                memory: process.memoryUsage(),
                time: process.hrtime(startTime),
            }));
        });
        req.end();
    });
};

export const get = (debug, config) => url => {
    const startTime = process.hrtime();
    const options: RequestOptions = {
        hostname: config.host,
        port: config.port,
        path: url,
        method: 'GET',
        headers: {
            Connection: 'keep-alive',
        },
    };
    return new Promise<object>((resolve, reject) => {
        const req = http.request(options, response => {
            if (Math.floor(response.statusCode / 100) !== 2) {
                response.resume();
                const error = {
                    code: response.statusCode,
                    message: response.statusMessage,
                };
                reject(error);
                // tslint:disable-next-line
                console.error(JSON.stringify({
                    request: options,
                    response: response.headers,
                    error: `${error.code} ${error.message}`,
                    cpu: process.cpuUsage(),
                    memory: process.memoryUsage(),
                    time: process.hrtime(startTime),
                }));
            } else {
                let body = '';
                response.setEncoding('utf8');
                response.on('data', chunk => body += chunk);
                response.on('end', () => {
                    try {
                        resolve(JSON.parse(body));
                        // tslint:disable-next-line
                        console.log(JSON.stringify({
                            request: options,
                            response: response.headers,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                    } catch (error) {
                        response.resume();
                        reject(error);
                        // tslint:disable-next-line
                        console.error(JSON.stringify({
                            request: options,
                            response: response.headers,
                            error: `${error.name} ${error.message}`,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                    }
                });
            }
        });
        req.on('error', error => {
            reject(error);
            // tslint:disable-next-line
            console.error(JSON.stringify({
                request: options,
                response: {},
                error: `${error.name} ${error.message}`,
                cpu: process.cpuUsage(),
                memory: process.memoryUsage(),
                time: process.hrtime(startTime),
            }));
        });
        req.end();
    });
};

export const client = (debug, config) => ({
    getPagination: getPagination(debug, config),
    get: get(debug, config),
});
