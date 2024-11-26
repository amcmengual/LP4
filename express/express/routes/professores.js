// importart módulo express
const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();


// GET
rotas.get('/professores', (req, res) => {
  res.send('Você acessou a rota Professores.')
})


// POST
rotas.post('/disciplinas', (req, res) => {
  res.send('Você está na rota para cadastrar uma nova disciplina ao professor.');
  
});


// PUT
rotas.put('/hraula', (req, res) => {
  res.send('Você está na rota para a atualização das horas aulas de cada professor.');
});


// DELETE
rotas.delete('/excluiprof', (req, res) => {
    res.send('Você está na rota para deletar algum professor da a´licação.');
  });
  


// exportar toda a configuração das rotas
module.exports = rotas;