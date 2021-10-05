/*
##Exercício da aula
  ###Vamos resolver um código assíncrono usando:
  [] Callbacks;
  [] Promises;
  [] Async/await; <~ foco desta aula, por ser o método mais moderno e usado 

##Nosso Algoritmo
  ###Simulação de requisições de dados em uma empresa de e-commerce:
    1. Informações do básicas de uma usuária;
    2. A partir da id da usuária obter o endereço cadastrado;
    3. A partir da id da usuária obter o histórico de pedidos;
*/

function pegarUsuaria() {
  setTimeout(() => {
    return {
      nome: "Pepita",
      email: "mulherpepita@gmail.com",
    };
  }, 2000);
}

const usuaria = pegarUsuaria();
console.log("usuária: ", usuaria);
