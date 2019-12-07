import * as http from 'http';
import {RequestOptions} from 'http';
import {Client, ClientCursor} from "../../../@types";

export const getPagination = (config: any) => (url: string, cursor?: ClientCursor) => {
    const startTime = process.hrtime();
    const options: RequestOptions = {
        hostname: config.host,
        port: config.port,
        path: config.path ? config.path + url : url,
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
    return new Promise<{data: any; cursor: ClientCursor; done: boolean}>((resolve, reject) => {
        const req = http.request(options, response => {
            if (response.statusCode !== 206) {
                response.resume();
                const error = {
                    code: response.statusCode,
                    message: response.statusMessage,
                };
                // tslint:disable-next-line
                console.error(JSON.stringify({
                    request: options,
                    response: response.headers,
                    error: `${error.code} ${error.message}`,
                    cpu: process.cpuUsage(),
                    memory: process.memoryUsage(),
                    time: process.hrtime(startTime),
                }));
                reject(`${error.code} ${error.message} ${options.path}`);
            } else {
                const contentRange = String(response.headers['content-range']);
                const [, , from, to, total] = (contentRange.match(/(items )([0-9]*)-([0-9]*)\/([0-9]*)/) || [null, null, null, null, null]);
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
                        //@ts-ignore
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
                        // tslint:disable-next-line
                        console.error(JSON.stringify({
                            request: options,
                            response: response.headers,
                            error: `${error.name} ${error.message}`,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                        reject(`${error.name} ${error.message} ${options.path}`);
                    }
                });
            }
        });
        req.on('error', error => {
            // tslint:disable-next-line
            console.error(JSON.stringify({
                request: options,
                response: {},
                error: `${error.name} ${error.message}`,
                cpu: process.cpuUsage(),
                memory: process.memoryUsage(),
                time: process.hrtime(startTime),
            }));
            reject(`${error.name} ${error.message} ${options.path}`);
        });
        req.end();
    });
};

export const get = (config: any) => (url: string) => {
    const startTime = process.hrtime();
    const options: RequestOptions = {
        hostname: config.host,
        port: config.port,
        path: config.path ? config.path + url : url,
        method: 'GET',
        headers: {
            Connection: 'keep-alive',
        },
    };
    return new Promise<object>((resolve, reject) => {
        const req = http.request(options, response => {
            if (Math.floor((response.statusCode || 0) / 100) !== 2) {
                response.resume();
                const error = {
                    code: response.statusCode,
                    message: response.statusMessage,
                };

                // tslint:disable-next-line
                console.error(JSON.stringify({
                    request: options,
                    response: response.headers,
                    error: `${error.code} ${error.message}`,
                    cpu: process.cpuUsage(),
                    memory: process.memoryUsage(),
                    time: process.hrtime(startTime),
                }));
                reject(`${error.code} ${error.message} ${options.path}`);
            } else {
                let body = '';
                response.setEncoding('utf8');
                response.on('data', chunk => body += chunk);
                response.on('end', () => {
                    try {
                        // tslint:disable-next-line
                        console.log(JSON.stringify({
                            request: options,
                            response: response.headers,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                        resolve(JSON.parse(body));
                    } catch (error) {
                        response.resume();
                        // tslint:disable-next-line
                        console.error(JSON.stringify({
                            request: options,
                            response: response.headers,
                            error: `${error.name} ${error.message}`,
                            cpu: process.cpuUsage(),
                            memory: process.memoryUsage(),
                            time: process.hrtime(startTime),
                        }));
                        reject(`${error.name} ${error.message} ${options.path}`);
                    }
                });
            }
        });
        req.on('error', error => {
            // tslint:disable-next-line
            console.error(JSON.stringify({
                request: options,
                response: {},
                error: `${error.name} ${error.message}`,
                cpu: process.cpuUsage(),
                memory: process.memoryUsage(),
                time: process.hrtime(startTime),
            }));
            reject(`${error.name} ${error.message} ${options.path}`);
        });
        req.end();
    });
};

export const client = (config: any): Client => ({
    getPagination: getPagination(config),
    get: get(config),
});
