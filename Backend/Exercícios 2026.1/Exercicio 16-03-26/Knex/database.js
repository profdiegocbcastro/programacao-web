import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'postgres',
        database: 'postgres'
    },
    pool: {
        min: 1,
        max: 10
    }
});

export default db;