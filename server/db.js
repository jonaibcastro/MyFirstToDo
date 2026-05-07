import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config();

const connection = mysql.createConnection({

    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.log('erro ao conectar no banco', err)
        return
    }
    console.log('Conectado ao MySQL!')
})
export default connection
