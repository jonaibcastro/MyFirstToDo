import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',// se tiver senha no seu MySQL, coloca aqui
    database: 'myfirsttodo'
})

connection.connect((err) => {
    if (err) {
        console.log('erro ao conectar no banco', err)
        return
    }
    console.log('Conectado ao MySQL!')
})
export default connection