import knex from 'knex';

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        user: 'INSIRA O USUARIO AQUI',
        password: 'INSIRA A SENHA AQUI',
        database: 'INSIRA A DATABASE AQUI'
    },
    pool: {
        min: 1,
        max: 10
    }
});

export default db;