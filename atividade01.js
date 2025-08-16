// Atividade 01 - Lógica de Programação com JavaScript
// Curso Front End - React - Projeto Bolsa Futuro Digital - SOFTEX
// Prof. João Carlos Pinheiro
// Aluna: Luana Neres Reis

// ----------------------------------------------------------
// 1. Peça um número ao usuário e mostre a tabuada de 1 a 10
// ----------------------------------------------------------

function tabuada(numero) {
  console.log(`Tabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
}

// Exemplo de execução:
tabuada(7);

// ----------------------------------------------------------
// 2. Função que recebe objeto com nome e idade e verifica se é maior de idade
// ----------------------------------------------------------

function verificarIdade(pessoa) {
  if (pessoa.idade >= 18) {
    return `${pessoa.nome} é maior de idade.`;
  } else {
    return `${pessoa.nome} é menor de idade.`;
  }
}

// Exemplo:
console.log(verificarIdade({ nome: "João", idade: 17 }));
console.log(verificarIdade({ nome: "Maria", idade: 22 }));

// ----------------------------------------------------------
// 3. Imprimir de 1 a 100, substituindo múltiplos por Fizz / Buzz / FizzBuzz
// ----------------------------------------------------------

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// Exemplo:
fizzBuzz();

// ----------------------------------------------------------
// 4. Função calculadora com switch
// ----------------------------------------------------------

function calculadora(a, b, operacao) {
  switch (operacao) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "Erro: divisão por zero!";
    default:
      return "Operação inválida!";
  }
}

// Exemplo:
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));

// ----------------------------------------------------------
// 5. Conversor de temperatura (Celsius ↔ Fahrenheit)
// ----------------------------------------------------------

function converterTemperatura(temp) {
  if (temp.tipo === "C") {
    return {
      tipo: "F",
      valor: temp.valor * 1.8 + 32
    };
  } else if (temp.tipo === "F") {
    return {
      tipo: "C",
      valor: (temp.valor - 32) / 1.8
    };
  } else {
    return { erro: "Tipo inválido! Use 'C' ou 'F'." };
  }
}

// Exemplo:
console.log(converterTemperatura({ tipo: "C", valor: 25 })); // Celsius → Fahrenheit
console.log(converterTemperatura({ tipo: "F", valor: 77 })); // Fahrenheit → Celsius
