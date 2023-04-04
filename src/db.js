import {createPool} from 'mysql2/promise'

import {DB_PORT, DB_DATABASE, DB_HOST, DB_PASSWORD, DB_USER} from './config.js'

//esto esta bien para desarrollo, pero para produccion las varaibles cambian
//se deben configurar las variables de entorno
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

/*pool.query()*/