import mysql from "mysql2";

const pool = mysql.createPool({
    user: "root",
    password: "1234",
    database: "app",
    host: "localhost"
});

export default pool;