'use strict';

const Hapi = require('@hapi/hapi');
const util = require('node:util');
const child_process = require("node:child_process");
const exec = util.promisify(child_process.exec);

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: '0.0.0.0'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: async (request, h) => {
            return await exec('node -v')
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();