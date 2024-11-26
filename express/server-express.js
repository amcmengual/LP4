//exemplo de servidor que utiliza a biblioteca express
//importar biblioteca 
const express = require('express');

//configuração de acesso ao servidor 
const localhost = '127.0.0.1';
const port = 5000;


//criação do aplicativo servidor 
const app = express();

//importar as configuracoes de rotas 
const estudantesRotas = require('./routes/estudantes');
const professoresRotas = require('./routes/professores');

//rota raiz do servidor
app.get('/', (req, res) =>{
    res.send('você acessou a raiz do servidor web.');
}); 

//configurar as rotas para veiculo
app.use('/estudantes', estudantesRotas);
app.use('/professores', professoresRotas);



//rodar o servidor 
app.listen(port, localhost, console.log('O servidor está rodando...'));