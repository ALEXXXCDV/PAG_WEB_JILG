import {Pool} from 'pg';

require('dotenv').config();

let pool;

if (process.env.PRODUCTION === 'true') {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {

pool = new Pool ({
    host: process.env.DB_DEV_HOST,
    user: process.env.DB_DEV_USER,
    password: process.env.DB_DEV_PASSWORD,
    database: process.env.DB_DEV_NAME,
    port: parseInt(`${process.env.DB_DEV_PORT}`), 
    idleTimeoutMillis: 3000,
});
}
export default pool; 