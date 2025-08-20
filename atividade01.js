// Atividade 01 - Lógica de Programação com JavaScript
// Curso Front End - React - Projeto Bolsa Futuro Digital - SOFTEX
// Prof. João Carlos Pinheiro
// Aluna: Luana Neres Reis


// ----------------------------------------------------------
// 1. Solicita um número ao usuário e mostra a tabuada de 1 a 10
// ----------------------------------------------------------

function multiplicationTable(number) {
  console.log(`Tabuada do número ${number}:`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

multiplicationTable(7);
// Resposta:
// Tabuada do número 7:
// 7 x 1 = 7
// 7 x 2 = 14
// 7 x 3 = 21
// 7 x 4 = 28
// 7 x 5 = 35
// 7 x 6 = 42
// 7 x 7 = 49
// 7 x 8 = 56
// 7 x 9 = 63
// 7 x 10 = 70

// ----------------------------------------------------------
// 2. Função que recebe um objeto com nome e idade e verifica se é maior de idade
// ----------------------------------------------------------

function checkAge(person) {
  if (person.age >= 18) {
    return `${person.name} é maior de idade.`;
  } else {
    return `${person.name} é menor de idade.`;
  }
}

console.log(checkAge({ name: "João", age: 17 }));
// Resposta: João é menor de idade.

console.log(checkAge({ name: "Maria", age: 22 }));
// Resposta: Maria é maior de idade.

// ----------------------------------------------------------
// 3. Imprime números de 1 a 100, substituindo múltiplos por Fizz / Buzz / FizzBuzz
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

fizzBuzz();
// Resposta completa:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// 31
// 32
// Fizz
// 34
// Buzz
// Fizz
// 37
// 38
// Fizz
// Buzz
// 41
// Fizz
// 43
// 44
// FizzBuzz
// 46
// 47
// Fizz
// 49
// Buzz
// Fizz
// 52
// 53
// Fizz
// Buzz
// 56
// Fizz
// 58
// 59
// FizzBuzz
// 61
// 62
// Fizz
// 64
// Buzz
// Fizz
// 67
// 68
// Fizz
// Buzz
// 71
// Fizz
// 73
// 74
// FizzBuzz
// 76
// 77
// Fizz
// 79
// Buzz
// Fizz
// 82
// 83
// Fizz
// Buzz
// 86
// Fizz
// 88
// 89
// FizzBuzz
// 91
// 92
// Fizz
// 94
// Buzz
// Fizz
// 97
// 98
// Fizz
// Buzz

// ----------------------------------------------------------
// 4. Função calculadora utilizando switch
// ----------------------------------------------------------

function calculator(a, b, operation) {
  switch (operation) {
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

console.log("10 + 5 = " + calculator(10, 5, "+"));
// Resposta: 10 + 5 = 15

console.log("10 - 5 = " + calculator(10, 5, "-"));
// Resposta: 10 - 5 = 5

console.log("10 * 5 = " + calculator(10, 5, "*"));
// Resposta: 10 * 5 = 50

console.log("10 / 5 = " + calculator(10, 5, "/"));
// Resposta: 10 / 5 = 2

console.log("10 / 0 = " + calculator(10, 0, "/"));
// Resposta: 10 / 0 = Erro: divisão por zero!

// ----------------------------------------------------------
// 5. Conversor de temperatura (Celsius ↔ Fahrenheit)
// ----------------------------------------------------------

function convertTemperature(temp) {
  if (temp.type === "C") {
    return {
      type: "F",
      value: temp.value * 1.8 + 32
    };
  } else if (temp.type === "F") {
    return {
      type: "C",
      value: (temp.value - 32) / 1.8
    };
  } else {
    return { error: "Tipo inválido! Use 'C' ou 'F'." };
  }
}

console.log(convertTemperature({ type: "C", value: 25 }));
// Resposta: { type: "F", value: 77 }

console.log(convertTemperature({ type: "F", value: 77 }));
// Resposta: { type: "C", value: 25 }



