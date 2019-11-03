import {ErrorInfo} from "react";
import {GraphQLError} from "graphql";
import {Operation} from "apollo-link";

const submitError = (data: object): void => {
    const payload = {
        ...data,
        path: window.location.href,
        referrer: window.document.referrer,
        agent: window.navigator.userAgent,
    };

    // @ts-ignore
    if (__DEVELOPMENT__) {
        return;
    }

    // @ts-ignore
    fetch(__FORWARDER_SERVER__ || 'http://localhost:8008', {
        method: 'POST',
        cache: 'no-cache',
        mode: 'cors',
        headers: {'content-type': 'application-json'},
        body: JSON.stringify(payload),
    }).then(() => true);
};

export const postError = (error: Error, errorInfo?: ErrorInfo): void => {
    submitError({
        'exception': error.name,
        'message': error.message,
        'stack': `${error.stack || ''}\n${(errorInfo || {componentStack: ''}).componentStack}`
    });
};

export const postNetworkError = (error: Error, operation: Operation): void => {
    submitError({
        'exception': error.name,
        'message': error.message,
        'stack': `${error.stack || ''}\n${JSON.stringify(operation)}`,
    });
};

export const postGraphQLError = (error: ReadonlyArray<GraphQLError>, operation: Operation): void => {
    submitError({
        'exception': 'GraphQLError',
        'message': error.map(item => item.message).join(' '),
        'stack': JSON.stringify(error.map(({ message, locations, path }) => ({
            message,
            locations,
            path
        }))) + '\n' + JSON.stringify(operation)
    });
};


