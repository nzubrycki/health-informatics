const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
    query: (text, params, callback) => {
        const start = Date.now();
        return pool.query(text, params, (err, res) => {
            const duration = Date.now() - start;
            console.log('executed query', {test, duration, rows: res.rowCount });
            callback(err, res);
        })
    },
    getClient: (callback) {
        pool.connect((err, client, done) => {
            callback(err, client, done);
        })
    }
};