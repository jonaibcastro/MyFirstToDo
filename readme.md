MyFirstToDo

Aplicação web fullstack de gerenciamento de tarefas, desenvolvida como projeto de aprendizado.

Tecnologias utilizadas

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Banco de dados:** MySQL

Funcionalidades

- Adicionar tarefas com nome e data de conclusão
- Listar todas as tarefas
- Atualizar o status da tarefa (Pendente, Em andamento, Concluído)
- Deletar tarefas

Estrutura do projeto

---------------------------------------------------------

MyFirstToDo/
├── docs/
│   ├── images/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server/
│   ├── db.js
│   ├── routes.js
│   └── server.js
├── .gitignore
├── package.json
└── README.md
=========================================================
Como rodar o projeto

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Crie o banco de dados MySQL com o nome `myfirsttodo`
4. Configure suas credenciais no arquivo `db.js`
5. Inicie o servidor: `node server/server.js`
6. Acesse: `http://localhost:3000`

Autor:

Desenvolvido por **Jonaib Castro**
