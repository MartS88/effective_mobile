require('dotenv').config()

module.exports = {
    development: {
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'dexter12345',
        database: process.env.POSTGRES_NAME || 'effective_mobile',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: process.env.POSTGRES_PORT || '5432',
        dialect:'postgres',
    },
    test: {
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_NAME,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        dialect:'postgres',
    },
    production: {
        username: process.env.POSTGRES_USERNAME || 'postgres',
        password: process.env.POSTGRES_PASSWORD || 'dexter12345',
        database: process.env.POSTGRES_NAME || 'effective_mobile',
        host: process.env.POSTGRES_HOST || 'localhost',
        port: process.env.POSTGRES_PORT || '5432',
        dialect:'postgres',
    }
};


