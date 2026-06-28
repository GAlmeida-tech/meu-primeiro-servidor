/* Desafio 1: Aquecimento de Lógica (Arrays e Objetos)
Antes de abrir o Express, vamos praticar como manipular os dados que usaremos no futuro.

Instruções: Crie um arquivo chamado teste-array.js. Nele, crie um array de objetos chamado usuarios (com id e nome).

Use o método .push() para adicionar um novo usuário ao array.

Use o método .find() para buscar um usuário específico pelo ID e mostre o nome dele no console.log.

Use o console.log para imprimir o array completo e ver a alteração.
 */

const usuarios = [
    {"id" : 1, "nome": "Carlos" },
    {"id" : 2, "nome": "Daniel" },
    {"id" : 3, "nome": "Neymar" },
    {"id" : 4, "nome": "Gabriel" }
]
console.log(usuarios)


usuarios.push({"id": 5, "nome": "Donatello"})
console.log("usuario CRIADO", usuarios)

 const encontrar  = usuarios.find(usuarios => usuarios.id === 5);

console.log('usuario ENCONTRADO:', encontrar )