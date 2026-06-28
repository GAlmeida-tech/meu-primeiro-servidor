/* Desafio 2: O Primeiro Servidor (Hello World com Express)
Aqui eles vão aprender a instalar as ferramentas e colocar o Node.js para rodar na web local.

Instruções: Crie uma nova pasta no computador chamada meu-primeiro-servidor.

Abra o terminal nessa pasta e inicialize o projeto com npm init -y.

Instale o Express rodando o comando npm install express.

Crie um arquivo index.js e configure o Express para rodar na porta 3000.

Crie uma rota GET na raiz (/) que responda com a frase: "Parabéns! Nosso primeiro servidor Express está funcionando!".

Rode o projeto com node index.js, abra o navegador e acesse http://localhost:3000/ para ver a mensagem. */



//configuraçao do Express
const express = require('express');
const app = express();
const PORT = 3000;


// rota GET raiz
app.get('/', (req, res) => {
    res.send("Parabéns! Nosso primeiro servidor Express está funcionando!")
});



/* Desafio 3: Integrando Tudo e Usando o Postman (O Grande Teste)
Esse exercício junta a lógica do Desafio 1 com o servidor do Desafio 2.

Instruções: No mesmo projeto do Desafio 2, vocês vão criar uma simulação de API.

No topo do arquivo index.js, cole o array de usuarios que vocês criaram no Desafio 1.

Crie uma rota GET /usuarios que, quando acessada, devolva esse array de usuários no formato JSON (res.json(usuarios)).

Abra o Postman ou Insomnia, coloque o endereço http://localhost:3000/usuarios, dê um "Send" e veja se o programa consegue listar os usuários que estavam no código. */


const usuarios = [
    {"id" : 1, "nome": "Carlos" },
    {"id" : 2, "nome": "Daniel" },
    {"id" : 3, "nome": "Neymar" },
    {"id" : 4, "nome": "Gabriel" }
]

//rota GET envio de objeto json
app.get('/usuarios', (req, res) => {
    res.json(usuarios);
})


//escutador da porta
app.listen(PORT, () => {
    console.log(`servidor rodando no endereço: http://localhost:${PORT}/usuarios`)
})
