import mysql from 'mysql2'
import dotenv from 'dotenv'

const connection = mysql.createConnection({
<<<<<<< HEAD
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'myfirsttodo',
=======
    host: 'localhost',
    user: 'root',
    password: ''
    database: 'myfirsttodo'
>>>>>>> 7ea83cc060a26959fac34ac233503b175610262e
})

connection.connect((err) => {
    if (err) {
        console.log('erro ao conectar no banco', err)
        return
    }
    console.log('Conectado ao MySQL!')
})
export default connection
