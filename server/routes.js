import express from 'express'

import connection from './db.js'

const router = express.Router()

//READ - listar todas as tarefas
router.get('/tarefas', (req,res) => {
    connection.query('SELECT * FROM tarefas', (err, results) => {
        if (err) return res.status(500).json({ erro: err.message })
        res.json(results)
    })
})

// CREATE - Adicionar nova tarefa
router.post('/tarefas', (req, res) => {
    const { nome, data_conclusao } = req.body
    connection.query(
        'INSERT INTO tarefas (nome, data_conclusao) VALUES (?, ?)',
        [nome, data_conclusao],
        (err, results) => {
            if (err) return res.status(500).json({ erro: err.message })
            res.json({ mensagem: 'Tarefa criada!', id: results.insertId })
        }
    )
})

// UPDATE - Atualizar status da tarefa
router.put('/tarefas/:id', (req, res) => {
    const { status } = req.body
    const { id } = req.params
    connection.query(
        'UPDATE tarefas SET status = ? WHERE id = ?',
        [status, id],
        (err) => {
            if (err) return res.status(500).json({ erro: err.message })
            res.json({ mensagem: 'Tarefa atualizada!' })
        }
    )
})

// DELETE - Remover tarefa
router.delete('/tarefas/:id', (req, res) => {
    const { id } = req.params
    connection.query(
        'DELETE FROM tarefas WHERE id = ?',
        [id],
        (err) => {
            if (err) return res.status(500).json({ erro: err.message })
            res.json({ mensagem: 'Tarefa deletada!' })
        }
    )
})

export default router