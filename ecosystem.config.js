module.exports = {
    apps: [{
        script: './dist/server/index.js',
        name: 'graphql',
        log: './logs/graphql.log',
        log_type: 'json',
        trace: true
    }],
};
