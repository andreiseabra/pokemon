// lib/db.js
import mysql from "mysql2/promise"

// Conexão com o MySQL local (dados no .env.local)
let db = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
})

export default db
