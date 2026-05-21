import express from 'express' //Importação do express para o server
import './db.js' // importação do database para o serve
import router from './routes.js' // impotando rotas para o servidor

const app= express() // variável app para criar funções

app.use(express.static('docs'))
app.use(express.json())     // ← para ler o corpo das requisições
app.use('/api', router)     // ← todas as rotas começam com /api

app.listen(3000, (req, res) => {
    console.log('servidor rodando na porta 3000')
})