// ===== LISTAR TAREFAS =====
async function carregarTarefas() {
    const response = await fetch('/api/tarefas')
    const tarefas = await response.json()

    const corpo = document.getElementById('corpoTabela')
    corpo.innerHTML = ''

    tarefas.forEach(tarefa => {
        const data = new Date(tarefa.data_conclusao).toLocaleDateString('pt-BR')

        corpo.innerHTML += `
            <tr>
                <td>${tarefa.id}</td>
                <td>${tarefa.nome}</td>
                <td>${data}</td>
                <td>
                    <select onchange="atualizarStatus(${tarefa.id}, this.value)">
                        <option value="Pendente"     ${tarefa.status === 'Pendente'     ? 'selected' : ''}>⚠️ Pendente</option>
                        <option value="Em andamento" ${tarefa.status === 'Em andamento' ? 'selected' : ''}>▶️ Em andamento</option>
                        <option value="Concluído"    ${tarefa.status === 'Concluído'    ? 'selected' : ''}>✅ Concluído</option>
                    </select>
                </td>
                <td>
                    <button onclick="deletarTarefa(${tarefa.id})">🗑️ Deletar</button>
                </td>
            </tr>
        `
    })
}

// ===== ADICIONAR TAREFA =====
document.getElementById('AddTarefa').addEventListener('click', async () => {
    const nome = document.getElementById('nameTaf').value
    const data_conclusao = document.getElementById('dataconclusao').value

    if (!nome || !data_conclusao) {
        alert('Preencha o nome e a data!')
        return
    }

    await fetch('/api/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, data_conclusao })
    })

    document.getElementById('nameTaf').value = ''
    document.getElementById('dataconclusao').value = ''

    carregarTarefas()
})

// ===== ATUALIZAR STATUS =====
async function atualizarStatus(id, status) {
    await fetch(`/api/tarefas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
    })
}

// ===== DELETAR TAREFA =====
async function deletarTarefa(id) {
    if (!confirm('Deseja deletar essa tarefa?')) return

    await fetch(`/api/tarefas/${id}`, {
        method: 'DELETE'
    })

    carregarTarefas()
}

// Carrega as tarefas ao abrir a página
carregarTarefas()