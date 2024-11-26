// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
rotas.get('/', (req, res) => {
  res.send('Você acessou a rota Estudantes.')
})


// POST
rotas.post('/cadastro', (req, res) => {
  res.send('Você está na rota para cadastrar um novo aluno.');
  // implementação para cadastrar um novo estudante
});


// PUT
rotas.put('/turma', (req, res) => {
  res.send('Você está na rota para a atualização das turmas de cada aluno.');
});


// DELETE
rotas.delete('/exluialuno', (req, res) => {
  res.send('Você está na rota para deletar alunos das turmas.');
});


// exportar toda a configuração das rotas
module.exports = rotas;